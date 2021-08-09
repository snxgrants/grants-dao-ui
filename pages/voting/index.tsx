import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {Header} from "../../components/Header";
import {Navbar} from "../../components/Navbar";
import {Footer} from "../../components/Footer";

export default function Voting() {
    return (
        <>
            <Head>
                <title>Home | Synthetix grantsDAO</title>
            </Head>

            <Header />

            <main>

                <Navbar />

                {/* ========================= Synthetix hero-section start ========================= */}
                <section className="synth-voting-hero-section" id="voting" />
                {/* ========================= Synthetix hero-section end ========================= */}
                <div className="voting-bg">
                    <div className="container">
                        <div className="row align-items-center position-relative">
                            <div className="hero-content synth-vh voting-hero-content">
                                <div className="col-md-12">
                                    <div className="synth-gdao-grants-mini-logo">
                                        <img alt="Logo" className="gdao-mini-logo" src="/img/logo/synthetix_gdao_logo_mini.svg" />
                                    </div>
                                    <h1 className="synth-hero-h-index wow fadeInUp" data-wow-delay=".2s">
                                        VOTING
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Current gDAO council heading*/}
                    <div className="container-fluid voting-tab-styling">
                        <div className="filter-wrapper">
                            <div className="container">
                                <div className="row max-width">
                                    <div className="col-md-6 voting-header-height">
                                        <div className="synth-tabs voting-header">
                                            current Members
                                        </div>
                                    </div>
                                    <div className="vertical-align align-center col-md-6 col-sm-12">
                                        <div className="epoch">
                                            <span className="synth-h-start">start: </span> 15/03/2021 - <span className="synth-h-end">End: </span> 15/06/2021
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Current gDAO council heading end*/}
                    {/* Current Members*/}
                    <div className="container">
                        <div className="row">
                            <div className="gi-input-wrapper max-width margin-0">
                                <div className="voter-wrapper">
                                    <div className="row">
                                        <div className="col-md-1">
                                            <img alt="Avatar" className="member-avatar" src="/img/grants/alexander.png" />
                                        </div>
                                        <div className="col-md-5 col-sm-12 vertical-align">
                                            <a href="#">
                                                <h4 className="member-acc-nr no-margin grantsdao-data-heading padding-right">
                                                    0xCD36e4F3D64B6B0c4EE8e414F0Ef288FC54325432534f
                                                </h4></a>
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            ΔLΞXΔNDΞR
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            <div className="utility-btn">
                                                <div className>
                                                    <div className="vertical-align member-votes">
                                                        40 Votes
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="voter-wrapper">
                                    <div className="row">
                                        <div className="col-md-1">
                                            <img alt="Avatar" className="member-avatar" src="/img/grants/andy.png" />
                                        </div>
                                        <div className="col-md-5 col-sm-12 vertical-align">
                                            <a href="#">
                                                <h4 className="member-acc-nr no-margin grantsdao-data-heading padding-right">
                                                    0xCD36e4F3D64B6B0c4EE8e414F0Ef288FCFE6653654
                                                </h4></a>
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            andy
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            <div className="utility-btn">
                                                <div className>
                                                    <div className="vertical-align member-votes">
                                                        51 Votes
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="voter-wrapper">
                                    <div className="row">
                                        <div className="col-md-1">
                                            <img alt="Avatar" className="member-avatar" src="/img/grants/cryptotoit.png" />
                                        </div>
                                        <div className="col-md-5 col-sm-12 vertical-align">
                                            <a href="#">
                                                <h4 className="member-acc-nr no-margin grantsdao-data-heading padding-right">
                                                    0xCD36e4F3D64B6B0c4EE8e414F0Ef288FCF432543245
                                                </h4></a>
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            cryptotoit
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            <div className="utility-btn">
                                                <div className>
                                                    <div className="vertical-align member-votes">
                                                        60 Votes
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="voter-wrapper">
                                    <div className="row">
                                        <div className="col-md-1">
                                            <img alt="Avatar" className="member-avatar" src="/img/grants/david.png" />
                                        </div>
                                        <div className="col-md-5 col-sm-12 vertical-align">
                                            <a href="#">
                                                <h4 className="member-acc-nr no-margin grantsdao-data-heading padding-right">
                                                    0xCD36e4F3D64B6B0c4EE8e414F0Ef288FCFE1f9876987
                                                </h4></a>
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            david
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            <div className="utility-btn">
                                                <div className>
                                                    <div className="vertical-align member-votes">
                                                        41 Votes
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="voter-wrapper-last">
                                    <div className="row">
                                        <div className="col-md-1">
                                            <img alt="Avatar" className="member-avatar" src="/img/grants/member-avatar.png" />
                                        </div>
                                        <div className="col-md-5 col-sm-12 vertical-align">
                                            <a href="#">
                                                <h4 className="member-acc-nr no-margin grantsdao-data-heading padding-right">
                                                    0xCD36e4F3D64B6B0c4EE8e414F0Ef288FCFE543245324
                                                </h4></a>
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            RubberˆDuck
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            <div className="utility-btn">
                                                <div className>
                                                    <div className="vertical-align member-votes">
                                                        42 votes
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Current Members*/}

                </div>

                <Footer />

            </main>
        </>
    )

}