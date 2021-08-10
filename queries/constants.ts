export const SNAPSHOT_ENS = 'grantsdao.eth';
export const SNAPSHOT_ENDPOINT = 'https://hub.snapshot.page/graphql';
export const QUERY_KEYS = {
	Snapshot: {
		Space: (id: string) => ['snapshot', 'space', id],
		Proposals: (spaceId: string) => ['snapshot', 'proposals', spaceId],
		Votes: (proposalIds: string[]) => ['snapshot', 'votes', proposalIds],
	},
};

//todo: Add correct details per wallet
export const MEMBERS = [
	{
		address:'0x099DbFa498d0b7Fbdf8bC6eD9FaF868454022EC2',
		logoUrl: '/img/grants/alexander.png',
		displayName: 'ΔLΞXΔNDΞR',
	},
	{
		address:'0xbF49B454818783D12Bf4f3375ff17C59015e66Cb',
		logoUrl: '/img/grants/andy.png',
		displayName: 'ΔLΞXΔNDΞR',
	},
	{
		address:'0xF5a701D13Be654a534D14DE8Cd6a328293712405',
		logoUrl: '/img/grants/david.png',
		displayName: 'ΔLΞXΔNDΞR',
	},
	{
		address:'0x4f370B4d03D2b46CcE26F1aEFE142708E03D7FFE',
		logoUrl: '/img/grants/cryptotoit.png',
		displayName: 'ΔLΞXΔNDΞR',
	},
	{
		address:'0x1a207bEefC754735871CEEb4C506686F044B1c41',
		logoUrl: '/img/grants/member-avatar.png',
		displayName: 'ΔLΞXΔNDΞR',
	},
];