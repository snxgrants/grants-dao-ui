// TODO, we really should be storing this somewhere else.

export const MEMBERS = [
  {
    displayName: "CT ⚔#5993",
    ens: "fallenhero.eth",
    address: "0x4f370b4d03d2b46cce26f1aefe142708e03d7ffe",
  },
  {
    displayName: "Maxxam#8383",
    ens: "fritzschoff.eth",
    address: "0x71226c538679eD4A72E803b3E2C93aD7403DA094",
  },
  {
    displayName: "cyberduck.eth",
    ens: "cyberduck.eth",
    address: "0xbf49b454818783d12bf4f3375ff17c59015e66cb s",
  },
  {
    address: "0x1a207bEefC754735871CEEb4C506686F044B1c41",
    ens: "ethmemes.eth",
    displayName: "ΔLΞXΔNDΞR",
  },
  {
    address: "0x8be60fe9F7C8d940D8DA9d5dDD0D8E0c15A4288B",
    ens: "jvk.eth",
    displayName: "JVK",
  },
];
export const MEMBER_ADDRESSES_BY_DISPLAY_NAME = MEMBERS.reduce(
  (acc: Record<string, { ens?: string; address: string } | undefined>, val) => {
    acc[val.displayName] = val;
    return acc;
  },
  {}
);
