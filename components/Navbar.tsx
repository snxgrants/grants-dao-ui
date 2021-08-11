import { useState } from "react";
import Link from "next/link";
import useDismiss from "use-dismiss";
import styled, { css } from "styled-components";

import Button from "./Button";

import {
  FlexDivCentered,
  gray,
  mediumBlue,
  navy,
  UpperCased,
  white,
  FlexDivColCentered,
  FlexDivCol,
  condensedMedium,
} from "../styles/common";
import Connector from "../containers/Connector";
import { truncateAddress } from "../utils/wallet";

export const Navbar = () => {
  const [walletOptionsModalOpened, setWalletOptionsModalOpened] = useState<
    boolean
  >(false);
  const {
    walletAddress,
    connectWallet,
    disconnectWallet,
  } = Connector.useContainer();

  let walletRender;

  const walletOptionsModalDismiss = useDismiss(() => {
    setWalletOptionsModalOpened(false);
  });

  if (!!walletAddress) {
    walletRender = (
      <>
        <WalletButton
          variant="solid"
          onClick={() => setWalletOptionsModalOpened(!walletOptionsModalOpened)}
        >
          <FlexDivCentered>
            <StyledConnectionDot />
            <UpperCased>{truncateAddress(walletAddress)}</UpperCased>
          </FlexDivCentered>
        </WalletButton>
        {walletOptionsModalOpened && (
          <StyledMenuModal ref={walletOptionsModalDismiss}>
            <Buttons>
              <StyledButton
                onClick={() => {
                  setWalletOptionsModalOpened(false);
                  connectWallet();
                }}
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.333 3.333v1.52c.394.234.667.654.667 1.147v4c0 .493-.273.913-.667 1.147v1.52c0 .733-.6 1.333-1.333 1.333H2.667c-.74 0-1.334-.6-1.334-1.333V3.333C1.333 2.6 1.927 2 2.667 2H12c.733 0 1.333.6 1.333 1.333zM8 10h4.667V6H8v4zm-5.333 2.667V3.333H12v1.334H8c-.733 0-1.333.6-1.333 1.333v4c0 .733.6 1.333 1.333 1.333h4v1.334H2.667zM9 8a1 1 0 112 0 1 1 0 01-2 0z"
                    fill="#828295"
                  ></path>
                </svg>
                Change Wallet
              </StyledButton>
              <StyledTextButton
                onClick={() => {
                  setWalletOptionsModalOpened(false);
                  disconnectWallet();
                }}
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.333 2h9.334C13.4 2 14 2.6 14 3.333v9.334C14 13.4 13.4 14 12.667 14H3.333C2.593 14 2 13.4 2 12.667V10h1.333v2.667h9.334V3.333H3.333V6H2V3.333C2 2.6 2.593 2 3.333 2zm4.334 9.333l-.94-.94 1.72-1.726H2V7.333h6.447l-1.72-1.726.94-.94L11 8l-3.333 3.333z"
                    fill="#ED1EFF"
                  ></path>
                </svg>
                Disconnect
              </StyledTextButton>
            </Buttons>
          </StyledMenuModal>
        )}
      </>
    );
  } else {
    walletRender = (
      <>
        <WalletButton variant="solid" onClick={connectWallet}>
          <FlexDivCentered>
            <StyledConnectionDot />
            <UpperCased>Connect</UpperCased>
          </FlexDivCentered>
        </WalletButton>
      </>
    );
  }

  return (
    <>
      {/* ========================= Navigation Start ========================= */}
      <header className="header">
        <div className="navbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <Link className="navbar-brand" href="/">
                    <img
                      alt="Logo"
                      src="/img/logo/synthetix_grantsDAO_logo.svg"
                    />
                  </Link>
                  <button
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#navbarSupportedContent"
                    data-toggle="collapse"
                    type="button"
                  >
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto" id="nav">
                      <li className="nav-item">
                        <Link href="/grants">Grants</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/initiatives">Initiatives</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/competitions">Competitions</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/blogs">Blog</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/voting">Voting</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/treasury">Treasury</Link>
                      </li>
                      <li className="nav-item">{walletRender}</li>
                    </ul>
                  </div>
                  {/* navbar collapse */}
                </nav>
                {/* navbar */}
              </div>
            </div>
            {/* row */}
          </div>
          {/* container */}
        </div>
        {/* navbar area */}
      </header>
      {/* ========================= Navigation End ========================= */}
    </>
  );
};

const NetworkTag = styled(FlexDivCentered)`
  background: ${mediumBlue};
  font-size: 10px;
  font-family: "GT America Condensed-Medium";
  padding: 2px 5px;
  border-radius: 100px;
  height: 18px;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
`;

const WalletButton = styled(Button).attrs({
  size: "md",
})`
  width: 175px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${mediumBlue};
  background: ${navy};

  svg {
    margin-left: 5px;
    width: 10px;
    height: 10px;
    color: ${gray};
    ${(props) =>
      props.isActive &&
      css`
        color: ${white};
      `}
  }
  &:hover {
    ${NetworkTag} {
      background: ${navy};
    }
  }
`;

const Dot = styled.span<{ background: string }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: "#29B6AF";
`;

const StyledConnectionDot = styled(Dot)`
  margin-right: 8px;
`;

const StyledMenuModal = styled(FlexDivColCentered)`
  margin-top: 12px;
  background: ${navy};
  border: 1px solid ${mediumBlue};
  border-radius: 4px;
  width: 175px;
`;

const Buttons = styled(FlexDivCol)`
  margin: 0px 8px;
`;

const StyledButton = styled(Button).attrs({
  variant: "outline",
  size: "md",
})`
  font-family: ${condensedMedium};
  padding: 0 20px;
  display: inline-grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-items: center;
  text-transform: uppercase;

  margin: 6px 0px;

  svg {
    margin-right: 5px;
    color: ${gray};
  }
`;

const StyledTextButton = styled(Button).attrs({
  variant: "text",
  size: "md",
})`
  font-family: ${condensedMedium};
  padding: 0 20px;
  display: inline-grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-items: center;
  text-transform: uppercase;

  svg {
    margin-right: 5px;
    color: ${gray};
  }
`;
