// TODO, we really should be storing this somewhere else.

export const MEMBERS = [
  {
    displayName: "CT ⚔#5993",
    ens: "fallenhero.eth",
    address: "0x4f370b4d03d2b46cce26f1aefe142708e03d7ffe",
  },
  {
    displayName: "Aana#4785",
    ens: "",
    address: "0x9BF5Dc85B5a3A066e26e6CeD2A8481A767e91758",
  },
  {
    displayName: "synthquest",
    ens: "",
    address: "0x30E7ead8DE70d4BD3d2eD5Efd4B6A5427048A31E  ",
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
