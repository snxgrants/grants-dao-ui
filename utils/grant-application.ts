interface GenerateBodyOptions {
  username: string;
  overview: string;
  vts: string;
  fundingRequest: string;
  additionalInformation: string;
  implementation: string;
  description: string;
}

export const generateBody = (options: GenerateBodyOptions) => {
  return `## Username \n${options.username}\n\n## Grant Description\n${options.description}\n\n## Overview\n${options.overview}\n\n## Value to Synthetix\n${options.vts}\n\n## Project Implementation Plan\n${options.implementation}\n\n## Additional Information\n${options.additionalInformation}\n\n## Funding Request\n${options.fundingRequest}
	`;
};
