import request, { gql } from "graphql-request";
import { useQuery } from "react-query";
import { SNAPSHOT_ENDPOINT } from "../constants/snapshot";
import {
  numOfGrantMembers,
  SPACE_KEY,
} from "@synthetixio/queries/build/node/src/queries/gov/constants";
import { MEMBER_ADDRESSES_BY_DISPLAY_NAME } from "./constants";
import { addMonths, endOfMonth, startOfMonth } from "date-fns";
export type SpaceData = {
  domain: string;
  filters: {
    onlyMembers: boolean;
    minScore: number;
  };
  members: string[];
  name: string;
  network: string;
  skin: string;
  strategies: SpaceStrategy[];
  symbol: string;
};

export type SpaceStrategy = {
  name: string;
  params: {
    address?: string;
    decimals: number;
    symbol: string;
  };
};
type SnapshotResponse = {
  choices: string[];
  scores: number[];
  start: number;
  end: number;
};
type CurrentCouncil = {
  members: {
    score: number;
    displayName: string;
    address: string;
    ens?: string;
  }[];
  start: Date;
  end: Date;
};

const useCurrentCouncil = () => {
  return useQuery<CurrentCouncil>(["currentCouncil"], async () => {
    const { proposals }: { proposals: SnapshotResponse[] } = await request(
      SNAPSHOT_ENDPOINT,
      gql`
        query ProposalsForSpace($spaceKey: String) {
          proposals(
            first: 1
            where: { space: $spaceKey, scores_state: "final" }
            orderBy: "created"
            orderDirection: desc
          ) {
            id
            start
            end
            choices
            scores
          }
        }
      `,
      { spaceKey: SPACE_KEY.GRANTS }
    );
    const latestProposal = proposals[0];
    const members = latestProposal?.choices
      .map((displayName, i) => {
        const score = latestProposal.scores[i];
        const { address, ens } =
          MEMBER_ADDRESSES_BY_DISPLAY_NAME[displayName.trim()] || {};
        return { score, displayName, address: address || "", ens };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, numOfGrantMembers)
      .filter((x) => {
        if (!x.address) {
          console.error(
            `${x.displayName} is missing address, pls update MEMBERS in constants.ts `
          );
          return false;
        }
        return true;
      });

    return {
      members,
      start: startOfMonth(addMonths(new Date(latestProposal.start * 1000), 1)),
      end: endOfMonth(addMonths(new Date(latestProposal.end * 1000), 3)),
    };
  });
};
export default useCurrentCouncil;
