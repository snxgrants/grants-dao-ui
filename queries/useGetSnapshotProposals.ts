import { useQuery, UseQueryOptions } from "react-query";
import request, { gql } from "graphql-request";

import {
  QUERY_KEYS,
  SNAPSHOT_ENS,
  SNAPSHOT_ENDPOINT,
} from "../constants/snapshot";

export type Proposal = {
  id: string;
  title: string;
  body: string;
  choices: [string];
  start: number;
  end: number;
  state: string;
  author: string;
  ipfs: string;
  snapshot: string;
};

const useGetSnapshotProposals = (
  options?: UseQueryOptions<Proposal[] | null>
) => {
  return useQuery<Proposal[] | null>(
    QUERY_KEYS.Snapshot.Proposals(SNAPSHOT_ENS),
    async () => {
      const { proposals } = await request(
        SNAPSHOT_ENDPOINT,
        gql`
          query Proposals($spaceId: String) {
            proposals(
              first: 100
              skip: 0
              where: { space_in: [$spaceId] }
              orderBy: "created"
              orderDirection: desc
            ) {
              id
              title
              body
              choices
              start
              end
              state
              author
              ipfs
              snapshot
            }
          }
        `,
        { spaceId: SNAPSHOT_ENS }
      );
      return proposals;
    },
    {
      ...options,
    }
  );
};

export default useGetSnapshotProposals;
