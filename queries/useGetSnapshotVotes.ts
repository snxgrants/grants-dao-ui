import { useQuery, UseQueryOptions } from "react-query";
import request, { gql } from "graphql-request";

import {
  QUERY_KEYS,
  SNAPSHOT_ENS,
  SNAPSHOT_ENDPOINT,
} from "../constants/snapshot";

export type Vote = {
  choice: number;
  created: number;
  voter: string;
};

export type Votes = Record<string, Record<string, Vote>>;

const useGetSnapshotVotes = (
  proposalIds: string[] | null,
  options?: UseQueryOptions<Votes | null>
) => {
  return useQuery<Votes | null>(
    QUERY_KEYS.Snapshot.Votes(proposalIds || [""]),
    async () => {
      const { votes } = await request(
        SNAPSHOT_ENDPOINT,
        gql`
          query Votes($proposalIds: [String]) {
            votes(first: 5, where: { proposal_in: $proposalIds }) {
              id
              voter
              created
              choice
              proposal {
                id
              }
            }
          }
        `,
        { proposalIds }
      );
      return votes.reduce((acc: any, vote: any) => {
        const { proposal, choice, created, voter } = vote;
        acc[proposal.id] = acc[proposal.id] || {};
        acc[proposal.id][voter] = {
          choice,
          created,
          voter,
        };
        return acc;
      }, {});
    },
    {
      ...options,
      enabled: !!proposalIds && proposalIds.length > 0,
    }
  );
};

export default useGetSnapshotVotes;
