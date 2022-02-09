// TODO, we really should be storing this somewhere else.

export const MEMBERS = [
  {
    displayName: "CT ⚔#5993",
    ens: "fallenhero.eth",
    address: "0x4f370b4d03d2b46cce26f1aefe142708e03d7ffe",
  },
  {
    displayName: "Mike#0714",
    ens: "ensmaxis.eth",
    address: "0xe1f02f7e90ea5f21d0ac6f12c659c3484c143b03",
  },
  {
    displayName: "cyberduck.eth",
    ens: "cyberduck.eth",
    address: "0xbf49b454818783d12bf4f3375ff17c59015e66cb s",
  },
  {
    displayName: "joey#1760",
    ens: "jocke.eth",
    address: "0x86691c1dd5d567f8e73a46feb0ddd2b42e404b6b",
  },
  {
    displayName: "beachmom__/#3781",
    ens: undefined,
    address: "0x5753f05A0C757F38f8365c22B8f9Bd6DA763D1F5",
  },
  {
    address: "0x1a207bEefC754735871CEEb4C506686F044B1c41",
    displayName: "ΔLΞXΔNDΞR",
  },
  {
    address: "0xF5a701D13Be654a534D14DE8Cd6a328293712405",
    displayName: "DG",
  },
  {
    address: "0x099DbFa498d0b7Fbdf8bC6eD9FaF868454022EC2",
    displayName: "clΞm",
    ens: "clem.eth",
  },
  {
    address: "0xbF49B454818783D12Bf4f3375ff17C59015e66Cb",
    displayName: "Rubber^Duck",
  },
];
export const MEMBER_ADDRESSES_BY_DISPLAY_NAME = MEMBERS.reduce(
  (acc: Record<string, { ens?: string; address: string } | undefined>, val) => {
    acc[val.displayName] = val;
    return acc;
  },
  {}
);
