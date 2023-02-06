import { ethers } from "ethers";
import { useMutation } from "react-query";
import { SnapshotClient, SNAPSHOT_ENS } from "../constants/snapshot";

const PROPOSAL_CHOICES = ["Yes", "No"];

const sanitiseTimestamp = (timestamp: number) => {
  return Math.round(timestamp / 1e3);
};

const PROPOSAL_PERIOD = 7 * 24 * 3600 * 1000;

const useCreateProposal = () => {
  return useMutation(async (payload: any) => {
    const { title, body } = payload;

    const proposalStartDate = sanitiseTimestamp(new Date().getTime());
    const proposalEndDate =
      proposalStartDate + sanitiseTimestamp(PROPOSAL_PERIOD);
    // @ts-ignore
    const web3 = new ethers.providers.Web3Provider(window.ethereum);
    const [block, [account]] = await Promise.all([
      web3.getBlockNumber(),
      web3.listAccounts(),
    ]);

    if (!!account) {
      await SnapshotClient.proposal(web3, account, {
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
