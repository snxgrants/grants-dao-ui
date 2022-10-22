import { useMutation } from "react-query";
import { SnapshotClient, SNAPSHOT_ENS } from "../constants/snapshot";
import Connector from "../containers/Connector";

const useVote = () => {
  const { signer, provider } = Connector.useContainer();

  return useMutation(async (payload: any) => {
    const { proposal, body, choice } = payload;

    const address = signer?.getAddress();

    if (!!address && !!provider) {
      await SnapshotClient.vote(provider as any, address, {
        space: SNAPSHOT_ENS,
        proposal,
        type: "single-choice",
        choice,
        body,
      });
    }
  });
};

export default useVote;
