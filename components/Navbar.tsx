
import Link from "next/link";
import {isConnected, connect} from "../pages/domain/Wallet"

export const Navbar = () => {

    let walletRender;
    if(isConnected()){
        walletRender = <>
            <li className="nav-item" onClick={connect}>
                Connect Wallet
            </li>
            </>
    }else{
        walletRender = <>
            <li className="nav-item" >
                Wallet
            </li>
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
}