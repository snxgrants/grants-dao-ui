import { useQuery, UseQueryOptions } from "react-query";
import request, { gql } from "graphql-request";

import {
  QUERY_KEYS,
  SNAPSHOT_ENS,
  SNAPSHOT_ENDPOINT,
} from "../constants/snapshot";

export type Space = {
  id: string;
  name: string;
  about: string;
  network: string;
  symbol: string;
  admins: [string];
  strategies: any;
};

const useGetSnapshotSpace = (options?: UseQueryOptions<Space | null>) => {
  return useQuery<Space | null>(
    QUERY_KEYS.Snapshot.Space(SNAPSHOT_ENS),
    async () => {
      const { space } = await request(
        SNAPSHOT_ENDPOINT,
        gql`
          query Space($spaceId: String) {
            space(id: $spaceId) {
              id
              name
              about
              network
              symbol
              admins
              strategies {
                name
                params
              }
            }
          }
        `,
        { spaceId: SNAPSHOT_ENS }
      );
      return space;
    },
    {
      ...options,
    }
  );
};

export default useGetSnapshotSpace;
