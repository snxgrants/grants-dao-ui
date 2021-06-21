import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {Header} from "../../components/Header";
import {Navbar} from "../../components/Navbar";
import {Footer} from "../../components/Footer";

export default function GrantApplicationThankYou() {
    return (
        <>
            <Head>
                <title>Grants Submission | Synthetix grantsDAO</title>
            </Head>

            <Header />

            <main>

                <Navbar />


                {/* ========================= Synthetix Blog Heading Start ========================= */}
                <div id="gradient_overlay">
                    <section id="blog" className="synth-blog-post-individual">
                        <div className="container">
                            <div className="row align-items-center position-relative">
                                <div className="col-md-12">
                                    <div className="hero-content blog-individual-vh">
                                        <div className="synth-gdao-grants-mini-logo">
                                            <span><img className="gdao-mini-logo" src="/img/logo/synthetix_gdao_logo_mini.svg" alt="Logo" /></span>
                                            <span>
                  <h1 className="synth-grants-h wow fadeInUp animated" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>
                    Blog
                  </h1>
                </span>
                                        </div>
                                        <h4 className="grants-indi-description align-center animated" style={{color: 'rgb(0, 209, 255)'}}>
                                            The Alnair release
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* ========================= Synthetix Blog Heading End ========================= */}
                <div className="blog-bg">
                    <div className="container">
                        <div className="row grants-pager-wrapper" style={{padding: 0}}>
                            <div className="col-md-12">
                                <ul className="pager">
                                    <li className="previous">
                                        <a className="grants-pager-link" href="blog.html"><span className="synth-up-arrow"><img alt="Arrow" className="pager-icons" src="/img/grants/gdao-previous.svg" /></span> Back to posts</a>
                                    </li>
                                    <li className="next">
                                        <a className="grants-pager-link" href="post-portal-live.html">Next Post<span className="synth-up-arrow"><img alt="Arrow" className="pager-icons" src="/img/grants/gdao-next.svg" /></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid synth-tab-styling">
                        <div className="indi-grants-h-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="synth-tabs">
                                            <span className="request no-margin bio-info"><span className="bio-info">Posted by</span> <span className="bio-info synth-blue">Andy</span> in <span className="bio-info synth-pink">Synthetix Protocol</span> <span className="sm-font bio-info">on <span className="synth-blue">12 May 2021</span></span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container blog-post-content-wrapper">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="blog-img" src="/img/blog/alnair-img.png" alt="post-tb" />
                                <p>Today (May 10, ~20:00 UTC) several new updates were added to the protocol. Here's what’s included in this release:</p>
                                <ul>
                                    <li><a href="https://sips.synthetix.io/sips/sip-116">SIP-116</a>: Optimism bridge update — This SIP makes use of the recent Optimism regenesis, to upgrade the bridge contracts in a way that has no withdrawal downtime. The upgrade would allow future bridge upgrades to also not have any withdrawal downtime, and would make the bridge conform to the new standard bridge interface being adopted by the community.</li>
                                    <li><a href="https://sips.synthetix.io/sips/sip-117">SIP-117</a>: Add support for Synth exchanging on L2 — This SIP enables Synth exchanges on L2 via Optimism.&nbsp;<strong>Please note</strong>&nbsp;that the release of this SIP will not mean that Synths will be available for trading immediately on L2, but simply that the functionality enabling exchanges will be released. L2 price feeds supplied by Chainlink’s decentralised network of oracles will still be required before other Synths can be released on L2.</li>
                                    <li><a href="https://sips.synthetix.io/sips/sip-118">SIP-118</a>: Conditional fee reclamation — This SIP allows for bypassing unnecessary fee reclamation functionality when the waiting period is set to zero.<br />
                                        This release is called ‘Alnair,' which like all releases is named after a star (<a href="https://en.wikipedia.org/wiki/List_of_brightest_stars">in order of visual magnitude</a>). If you've got any comments or questions about the release, please come join the conversation in&nbsp;<a href="https://discord.gg/synthetix">Discord</a>.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row max-width-grant-divider">
                            <div className="col-md-12">
                                <div className="grants-end" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row grants-pager-wrapper" style={{padding: '10px 0 50px 0'}}>
                            <div className="col-md-12">
                                <ul className="pager">
                                    <li className="previous">
                                        <a className="grants-pager-link" href="blog.html"><span className="synth-up-arrow"><img alt="Arrow" className="pager-icons" src="/img/grants/gdao-previous.svg" /></span> Back to posts</a>
                                    </li>
                                    <li className="next">
                                        <a className="grants-pager-link" href="post-portal-live.html">Next Post<span className="synth-up-arrow"><img alt="Arrow" className="pager-icons" src="/img/grants/gdao-next.svg" /></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <Footer />

            </main>
        </>
    )

}