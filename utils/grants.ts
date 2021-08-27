export const getGrantStatus = (state: string, yesVotes: number) => {
  switch (state) {
    case "active":
      return "open";
    case "closed":
      if (yesVotes >= 3) {
        return "approved";
      } else {
        return "refused";
      }
    default:
      return "open";
  }
};
