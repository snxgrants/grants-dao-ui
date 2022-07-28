import { Contract, providers, BigNumber } from "ethers";
import request, { gql } from "graphql-request";
import { useQuery, UseQueryOptions } from "react-query";
import { INFURA_RPC_URL } from "../containers/walletConfig";

import { Grants } from "../contracts/Grants";

const BOARDROOM_PRODUCTION_URL = "https://api.boardroom.info";

export const BOARDROOM_BATCH_USER_DETAILS_URL = `${BOARDROOM_PRODUCTION_URL}/v1/batchUserDetails`;

export const getUsersDetails = async (walletAddresses: string[]) => {
  const response = await fetch(
    BOARDROOM_BATCH_USER_DETAILS_URL +
      "?" +
      new URLSearchParams({
        addressesList: walletAddresses.join(","),
      })
  );

  const json: { data: { users: UserDetail[] } } = await response.json();
  return json.data.users;
};
export type UserDetail = {
  address: string;
  email: string;
  ens: string;
  username: string;
  twitter: string;
  about: string;
  website: string;
  notificationPreferences: string;
  associatedAddresses: string;
  type: string;
  pfpUrl: string;
  pfpImageId: string;
  bannerThumbnailUrl: string;
  bannerImageId: string;
  pfpThumbnailUrl: string;
  bannerUrl: string;
  discord: string;
  delegationPitch: string;
  github: string;
  council?: string;
};

type UserDetailWithScores = UserDetail & { score: number };
export const hexStringBN = (value: number | string) =>
  BigNumber.from(value).toHexString();

const getVotes = async (
  contract: Contract,
  members: string[],
  lastElectionEpoch: number
) => {
  const membersByAddress = members.reduce(
    (acc: { [key: string]: string }, val) => {
      acc[val.toLowerCase()] = val.toLocaleLowerCase();
      return acc;
    },
    {}
  );
  const { voteResults }: { voteResults: { id: string; voteCount: string }[] } =
    await request(
      "https://api.thegraph.com/subgraphs/name/rickk137/synthetix-election",
      gql`
		query VoteResults {
      voteResults(
        where: { epochIndex: "${lastElectionEpoch}" contract: "${contract.address.toLowerCase()}"  }
      ) {
        id
        voteCount
      }
    }
    `
    );

  const addresses: string[] = await Promise.all(
    voteResults.map((voteResult) =>
      contract
        ?.getBallotCandidatesInEpoch(
          voteResult.id,
          hexStringBN(lastElectionEpoch)
        )
        .then(([address]: string[]) => address)
    )
  );
  return voteResults.filter(
    (_x, i) => membersByAddress[addresses[i].toLowerCase()]
  );
};
const useGetGrantsCouncil = () => {
  const provider = new providers.JsonRpcProvider(INFURA_RPC_URL);
  return useQuery(
    ["getGrantsCouncilMembers"],
    async () => {
      if (!provider) {
        throw Error("Expected provider to be defined");
      }
      const contract = new Contract(Grants.address, Grants.abi, provider);
      const councilMembersAddresses: string[] =
        await contract.getCouncilMembers();

      const currentEpoch = Number(await contract.getEpochIndex());
      const lastElectionEpoch = currentEpoch - 1;
      const [startSec, endSec]: [BigNumber, BigNumber] = await Promise.all([
        contract.getEpochStartDateForIndex(lastElectionEpoch),
        contract.getEpochEndDateForIndex(lastElectionEpoch),
      ]);
      const scoresP = getVotes(
        contract,
        councilMembersAddresses,
        lastElectionEpoch
      );
      const membersP = getUsersDetails(councilMembersAddresses);
      const [scores, members] = await Promise.all([scoresP, membersP]);
      const results: UserDetailWithScores[] = members.map((m, i) => ({
        ...m,
        score: Number(scores[i].voteCount),
      }));
      return {
        results,
        startDate: new Date(startSec.toNumber() * 1000),
        endDate: new Date(endSec.toNumber() * 1000),
      };
    },
    {
      enabled: Boolean(provider),
      staleTime: 900000,
    }
  );
};
export default useGetGrantsCouncil;
