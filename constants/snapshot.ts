export const SNAPSHOT_ENS = "grantsdao.eth";

export const SNAPSHOT_ENDPOINT = `https://hub.snapshot.page/graphql`;

export const MESSAGE_URL = `https://hub.snapshot.page/api/message`;

export const QUERY_KEYS = {
  Snapshot: {
    Space: (id: string) => ["snapshot", "space", id],
    Proposals: (spaceId: string) => ["snapshot", "proposals", spaceId],
    Votes: (proposalIds: string[]) => ["snapshot", "votes", proposalIds],
  },
};
