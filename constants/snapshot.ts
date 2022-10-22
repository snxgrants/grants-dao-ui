import snapshot from "@snapshot-labs/snapshot.js";

export const SNAPSHOT_ENS = "grantsdao.eth";

export const SNAPSHOT_ENDPOINT = `https://hub.snapshot.org/graphql`;

export const MESSAGE_URL = `https://hub.snapshot.org/api/message`;

export const SNAPSHOT_HUB = "https://hub.snapshot.org";

export const SnapshotClient = new snapshot.Client712(SNAPSHOT_HUB);

export const QUERY_KEYS = {
  Snapshot: {
    Space: (id: string) => ["snapshot", "space", id],
    Proposals: (spaceId: string) => ["snapshot", "proposals", spaceId],
    Votes: (proposalIds: string[]) => ["snapshot", "votes", proposalIds],
  },
};
