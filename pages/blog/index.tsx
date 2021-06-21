import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {Header} from "../../components/Header";
import {Navbar} from "../../components/Navbar";
import {Footer} from "../../components/Footer";

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blog | Synthetix grantsDAO</title>
            </Head>

            <Header />

            <main>

                <Navbar />

                {/* ========================= Synthetix Blog Heading Start ========================= */}
                <div id="gradient_overlay">
                    <section id="blog-new" className="synth-blog-section">
                        <div className="container">
                            <div className="row align-items-center position-relative">
                                <div className="col-md-12">
                                    <div className="hero-content blog-individual-vh">
                                        <div className="synth-gdao-grants-mini-logo">
                                            <img alt="Logo" className="gdao-mini-logo" src="/img/logo/synthetix_gdao_logo_mini.svg" />
                                        </div>
                                        <h1 className="synth-grants-h wow fadeInUp animated" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>
                                            Blog
                                        </h1>
                                        <p className="wow fadeInUp synth-p-opti align-center animated" data-wow-delay=".6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp'}}>
                                            Decentralised Synthetic Assets<br />News, Updates and Industry Insights
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* ========================= Synthetix Blog Heading End ========================= */}
                <div className="container">
                </div>
                <div className="blog-bg">
                    <div className="container">
                        <div className="synth-blog-wrapper">
                            <div className="row padding-bottom">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <a className="synth-blog-post-hover" href="post-alnair-release.html">
                                                <div className="synth-blog-post-wrapper">
                                                    <div className="synth-blog-post-img">
                                                        <img className="synth-post-img" src="/img/blog/bp-img1.png" alt="Blog Post Thumbnail" />
                                                        <h3 className="synth-blog-post-h">The Alnair release</h3>
                                                        <p className="synth-post-excerpt">Today (May 10, ~20:00 UTC) several new updates were added to the protocol. Here's what’s included in this release: SIP-116: Optimism bridge...</p>
                                                        <p className="synth-blog-post-date">15 May 2021</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <a className="synth-blog-post-hover" href="#">
                                                <div className="synth-blog-post-wrapper">
                                                    <div className="synth-blog-post-img">
                                                        <img className="synth-post-img" src="/img/blog/bp-img2.png" alt="Blog Post Thumbnail" />
                                                        <h3 className="synth-blog-post-h">The Synthetix Ambassadors governance portal is now live!</h3>
                                                        <p className="synth-post-excerpt">The new Synthetix Ambassadors governance portal is now live, brought to you by the Synthetix grantsDAO! The Synthetix Ambassadors program pr...</p>
                                                        <p className="synth-blog-post-date">10 May 2021</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <a className="synth-blog-post-hover" href="#">
                                                <div className="synth-blog-post-wrapper">
                                                    <div className="synth-blog-post-img">
                                                        <img className="synth-post-img" src="/img/blog/bp-img3.png" alt="Blog Post Thumbnail" />
                                                        <h3 className="synth-blog-post-h">sCOIN &amp; sMSFT pool incentives are now live on Balancer!</h3>
                                                        <p className="synth-post-excerpt">Balancer pool incentives for sCOIN and sMSFT are now live...</p>
                                                        <p className="synth-blog-post-date">9 May 2021</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row padding-bottom">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <a className="synth-blog-post-hover" href="snx-liquidity.html">
                                                <div className="synth-blog-post-wrapper">
                                                    <div className="synth-blog-post-img">
                                                        <img className="synth-post-img" src="/img/blog/bp-img4.png" alt="Blog Post Thumbnail" />
                                                        <h3 className="synth-blog-post-h">The Regor release</h3>
                                                        <p className="synth-post-excerpt">This Wednesday (April 28, ~22:00 UTC) several new Synths are being added to the protocol. During this time...</p>
                                                        <p className="synth-blog-post-date">15 May 2021</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <a className="synth-blog-post-hover" href="#">
                                                <div className="synth-blog-post-wrapper">
                                                    <div className="synth-blog-post-img">
                                                        <img className="synth-post-img" src="/img/blog/bp-img5.png" alt="Blog Post Thumbnail" />
                                                        <h3 className="synth-blog-post-h">Equity Synth pool incentives are now live on Balancer!</h3>
                                                        <p className="synth-post-excerpt">With yesterday’s launch of the new equity Synths — sFB, sAAPL, sAMZN, sNFLX, and sGOOG — the synthetixDAO is incentivizing liquidity pools...</p>
                                                        <p className="synth-blog-post-date">10 May 2021</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <a className="synth-blog-post-hover" href="#">
                                                <div className="synth-blog-post-wrapper">
                                                    <div className="synth-blog-post-img">
                                                        <img className="synth-post-img" src="/img/blog/bp-img6.png" alt="Blog Post Thumbnail" />
                                                        <h3 className="synth-blog-post-h">ETH and renBTC loans are now on Staking!</h3>
                                                        <p className="synth-post-excerpt">We’ve expanded the Synthetix loans feature and integrated it into the Staking dApp! Previously, loans were housed on Synthetix</p>
                                                        <p className="synth-blog-post-date">9 May 2021</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row padding-bottom">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <a className="synth-blog-post-hover" href="snx-liquidity.html">
                                                <div className="synth-blog-post-wrapper">
                                                    <div className="synth-blog-post-img">
                                                        <img className="synth-post-img" src="/img/blog/bp-img7.png" alt="Blog Post Thumbnail" />
                                                        <h3 className="synth-blog-post-h">Frontrunning Synthetix: a history</h3>
                                                        <p className="synth-post-excerpt">As we embark on two new approaches to limit frontrunning I thought it would be valuable to document the history of frontrunning Synthetix</p>
                                                        <p className="synth-blog-post-date">15 May 2021</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <a className="synth-blog-post-hover" href="#">
                                                <div className="synth-blog-post-wrapper">
                                                    <div className="synth-blog-post-img">
                                                        <img className="synth-post-img" src="/img/blog/bp-img8.png" alt="Blog Post Thumbnail" />
                                                        <h3 className="synth-blog-post-h">Spartan Council updates: voting live for next epoch + integration into Staking dApp!</h3>
                                                        <p className="synth-post-excerpt">It’s all happening right now for the Spartan Council! Fresh off last week’s first Council-led community governance call...</p>
                                                        <p className="synth-blog-post-date">10 May 2021</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <a className="synth-blog-post-hover" href="#">
                                                <div className="synth-blog-post-wrapper">
                                                    <div className="synth-blog-post-img">
                                                        <img className="synth-post-img" src="/img/blog/bp-img9.png" alt="Blog Post Thumbnail" />
                                                        <h3 className="synth-blog-post-h">Spartan Council updates: voting live for next epoch + integration into Staking dApp!</h3>
                                                        <p className="synth-post-excerpt">It’s all happening right now for the Spartan Council! Fresh off last week’s first Council-led community governance call...</p>
                                                        <p className="synth-blog-post-date">9 May 2021</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row padding-bottom">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <a className="synth-blog-post-hover" href="snx-liquidity.html">
                                                <div className="synth-blog-post-wrapper">
                                                    <div className="synth-blog-post-img">
                                                        <img className="synth-post-img" src="/img/blog/bp-img10.png" alt="Blog Post Thumbnail" />
                                                        <h3 className="synth-blog-post-h">SNX liquidity incentive for sUSD/DHT Uniswap pool</h3>
                                                        <p className="synth-post-excerpt">The synthetixDAO has agreed to contribute 3000 SNX per week in incentives towards a new liquidity pool of DHT and sUSD for ten weeks...</p>
                                                        <p className="synth-blog-post-date">15 May 2021</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <a className="synth-blog-post-hover" href="#">
                                                <div className="synth-blog-post-wrapper">
                                                    <div className="synth-blog-post-img">
                                                        <img className="synth-post-img" src="/img/blog/bp-img11.png" alt="Blog Post Thumbnail" />
                                                        <h3 className="synth-blog-post-h">Spartan Council updates: voting live for next epoch + integration into Staking dApp!</h3>
                                                        <p className="synth-post-excerpt">It’s all happening right now for the Spartan Council! Fresh off last week’s first Council-led community governance call...</p>
                                                        <p className="synth-blog-post-date">10 May 2021</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <a className="synth-blog-post-hover" href="#">
                                                <div className="synth-blog-post-wrapper">
                                                    <div className="synth-blog-post-img">
                                                        <img className="synth-post-img" src="/img/blog/bp-img12.png" alt="Blog Post Thumbnail" />
                                                        <h3 className="synth-blog-post-h">SNX liquidity incentive for sUSD/DHT Uniswap pool</h3>
                                                        <p className="synth-post-excerpt">The synthetixDAO has agreed to contribute 3000 SNX per week in incentives towards a new liquidity pool of DHT and sUSD for ten weeks...</p>
                                                        <p className="synth-blog-post-date">9 May 2021</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </main>
        </>
    )

}