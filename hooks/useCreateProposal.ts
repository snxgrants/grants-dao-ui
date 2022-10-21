import { ethers } from "ethers";
import { useMutation } from "react-query";
import { SnapshotClient, SNAPSHOT_ENS } from "../constants/snapshot";
import Connector from "../containers/Connector";

const PROPOSAL_CHOICES = ["Yes", "No"];

const sanitiseTimestamp = (timestamp: number) => {
  return Math.round(timestamp / 1e3);
};

const PROPOSAL_PERIOD = 7 * 24 * 3600 * 1000;

const useCreateProposal = () => {
  const { walletAddress } = Connector.useContainer();

  return useMutation(async (payload: any) => {
    const { title, body, block } = payload;

    const proposalStartDate = sanitiseTimestamp(new Date().getTime());
    const proposalEndDate =
      proposalStartDate + sanitiseTimestamp(PROPOSAL_PERIOD);
    // @ts-ignore
    const web3 = new ethers.providers.Web3Provider(window.ethereum as any);

    if (!!walletAddress) {
      await SnapshotClient.proposal(web3, walletAddress, {
        title,
        space: SNAPSHOT_ENS,
        choices: PROPOSAL_CHOICES,
        body,
        start: proposalStartDate,
        end: proposalEndDate,
        snapshot: block,
        plugins: JSON.stringify({}),
        type: "single-choice",
        discussion: "",
      });
    }
  });
};

export default useCreateProposal;
