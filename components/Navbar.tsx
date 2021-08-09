
import Link from "next/link";
import {connect, isConnected} from "../services/Wallet"
import Button from "./Button";

import styled, { css } from 'styled-components';
import {FlexDivCentered, gray, mediumBlue, navy, UpperCased, white} from "../styles/common";

export const Navbar = () => {

    let walletRender;

    if(isConnected()){
        walletRender = <>
            <li className="nav-item" onClick={connect}>
                <a>Wallet Connected</a>
            </li>
            </>
    }else{
        walletRender = <>
            <WalletButton variant="solid" onClick={connect}>
                <FlexDivCentered>
                    <StyledConnectionDot />
                    <UpperCased>Connect</UpperCased>
                </FlexDivCentered>
            </WalletButton>
        </>
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
                                    <img alt="Logo" src="/img/logo/synthetix_grantsDAO_logo.svg" />
                                </Link>
                                <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
                                    <span className="toggler-icon" />
                                    <span className="toggler-icon" />
                                    <span className="toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto" id="nav">
                                        <li className="nav-item">
                                            <Link href="/grants">Grants</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link  href="/initiatives">Initiatives</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link  href="/competitions">Competitions</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link  href="/blogs">Blog</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link  href="/voting">Voting</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link  href="/treasury">Treasury</Link>
                                        </li>
                                        {walletRender}
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
    )
};

const NetworkTag = styled(FlexDivCentered)`
	background: ${mediumBlue};
	font-size: 10px;
	font-family: 'GT America Condensed-Medium';
	padding: 2px 5px;
	border-radius: 100px;
	height: 18px;
	text-align: center;
	justify-content: center;
	text-transform: uppercase;
`;

const WalletButton = styled(Button).attrs({
    size: 'md',
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
	background-color: '#29B6AF';
`;

const StyledConnectionDot = styled(Dot)`
	margin-right: 8px;
`;
