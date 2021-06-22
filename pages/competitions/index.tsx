import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {Header} from "../../components/Header";
import {Navbar} from "../../components/Navbar";
import {Footer} from "../../components/Footer";

export default function Competitions() {
    return (
        <>
            <Head>
                <title>Home | Synthetix grantsDAO</title>
            </Head>

            <Header />

            <main>

                <Navbar />

                {/* ========================= Synthetix hero-section start ========================= */}
                <section className="synth-events-section" id="events">
                    <div className="container">
                        <div className="row align-items-center position-relative">
                            <div className="col-md-12">
                                <div className="hero-content events-vh">
                                    <div className="synth-gdao-grants-mini-logo">
                                        <img alt="Logo" className="gdao-mini-logo" src="/img/logo/synthetix_gdao_logo_mini.svg" />
                                    </div>
                                    <h1 className="synth-grants-h wow fadeInUp animated" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>
                                        Competitions
                                    </h1>
                                    <p className="wow fadeInUp synth-p-opti align-center" data-wow-delay=".6s">
                                        New Competitions posted weekly by the Spartan Council.
                                        Enter one of our competitions and win great prizes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========================= Synthetix hero-section end ========================= */}
                <div className="events-bg">
                    {/* ========================= Divider Start ========================= */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            </div>
                        </div>
                    </div>{/* ========================= Divider End ========================= */}
                    {/* ========================= Competitions Data ========================= */}
                    {/* Nav tabs Start*/}
                    <div className="container-fluid synth-tab-styling">
                        <div className="filter-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-10">
                                        <div className="synth-tabs">
                                            <ul className="tabs nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <div aria-controls="home" aria-selected="true" className="nav-link active" data-bs-target="#all" data-bs-toggle="tab" id="home-tab" role="tab">
                                                        All
                                                    </div>
                                                </li>
                                                <li className="nav-item" role="presentation"><button aria-controls="active" aria-selected="false" className="nav-link" data-bs-target="#active" data-bs-toggle="tab" id="active-tab" role="tab" type="button">Active</button></li>
                                                <li className="nav-item" role="presentation"><button aria-controls="completed" aria-selected="false" className="nav-link" data-bs-target="#completed" data-bs-toggle="tab" id="completed-tab" role="tab" type="button">Completed</button></li>
                                                <li className="nav-item" role="presentation"><button aria-controls="completed" aria-selected="false" className="nav-link" data-bs-target="#cancelled" data-bs-toggle="tab" id="cancelled-tab" role="tab" type="button">Cancelled</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="vertical-align align-center col-md-2 col-sm-12">
                                        <div className>
                                            <a href="grant-application.html">
                                                <div className="vertical-align initiatives-active-btn wow fadeInUp" data-wow-delay=".6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp'}}>
                                                    5 ACTIVE Competitions
                                                </div></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* Nav tabs end*/}
                    {/* Tab panes Start*/}
                    <div className="tab-content" id="myTabContent">
                        {/* All Start*/}
                        <div aria-labelledby="all-tab" className="tab-pane fade show active" id="all" role="tabpanel">
                            {/* ========================= Tabs Content Start========================= */}
                            <div className="container">
                                <div className="heading-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 active-tab-header">
                                            Competitions - ALL
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            PARTICIPANTS <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            AMOUNT <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            STATUS <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* ========================= Tab Data Headings End========================= */}
                            {/* ========================= Tabs Data Start .========================= */}
                            <div className="container">
                                {/* ========================= Repeat Data Start ========================= */}
                                {/* ========================= Data Wrapper Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="initiative-stsla-meme-site-design-comp-v1.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">sTSLA Meme Site Design Comp v1</h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">Discord bots are one of the most useful features of the communication platform. They are AIs that marketers and business owners can use to perform a wide range of automated... <span className="sm-font synth-blue bold">View Details</span></p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="sm-font no-margin bio-info"><span className="bio-info">Initiated by</span> <span className=" bio-info synth-blue">Andy</span> in <span className="sm-font bio-info synth-pink">Competitions</span> <span className="sm-font bio-info">on <span className="synth-blue">20 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12 votes">
                                            12
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            1.500 SNX
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            <div className="voting-wrapper">
                                                <div className="vertical-align grants-active">
                                                    ACTIVE
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider" />
                                </div>{/* ========================= Data Wrapper End ========================= */}
                                {/* ========================= Data Wrapper Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="chainlink-hackathon-initiative.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">Chainlink Hackathon</h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">The Synthetix developer documentation site needs to be given a much-needed upgrade. Overhaul the docs to cover a few key user journeys for engineers looking to programmatically interact with Synthetix... <span className="sm-font synth-blue bold">View Details</span></p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="request no-margin bio-info"><span className="bio-info">initiated by</span> <span className=" bio-info synth-blue">ΔLΞXΔNDΞR</span> in <span className="bio-info synth-pink">Competitions</span> <span className="sm-font bio-info">on <span className="synth-blue">9 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12 votes">
                                            10
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            500 SNX
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            <div className="utility-btn vertical-align">
                                                <div className="voting-wrapper">
                                                    <div className="grants-active">
                                                        ACTIVE
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider" />
                                </div>{/* ========================= Data Wrapper End ========================= */}
                                {/* ========================= Data Wrapper Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="gdao-site-design-competition-initiative.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">gDAO Site Design Competition</h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">Coinbase is one of the main Cryptocurrency spot-trading exchanges out there. San Fransisco based Coinbase was founded in June 2012. Coinbase provides a digital currency wallet service and a platform.. <span className="sm-font synth-blue bold">View Details</span></p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="request no-margin bio-info"><span className="bio-info">initiated by</span> <span className=" bio-info synth-blue">cryptotoit</span> in <span className="bio-info synth-pink">Competitions</span> <span className="sm-font bio-info">on <span className="synth-blue">17 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12 votes">
                                            24
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            200 SNX
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            <div className="utility-btn vertical-align">
                                                <div className="voting-wrapper">
                                                    <div className="grants-active">
                                                        ACTIVE
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider" />
                                </div>{/* ========================= Data Wrapper End ========================= */}
                                {/* ========================= Data Wrapper Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="gdao-site-design-and-build-initiative.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">gDAO Site Design and Build</h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">Coinbase is one of the main Cryptocurrency spot-trading exchanges out there. San Fransisco based Coinbase was founded in June 2012. Coinbase provides a digital currency wallet service and a platform.. <span className="sm-font synth-blue bold">View Details</span></p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="request no-margin bio-info"><span className="bio-info">initiated by</span> <span className=" bio-info synth-blue">RubberˆDuck</span> in <span className="bio-info synth-pink">Competitions</span> <span className="sm-font bio-info">on <span className="synth-blue">23 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12 votes">
                                            16
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            800 SNX
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            <div className="utility-btn vertical-align">
                                                <div className="voting-wrapper">
                                                    <div className="grants-active">
                                                        ACTIVE
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider" />
                                </div>{/* ========================= Data Wrapper End ========================= */}
                                {/* ========================= Data Wrapper Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="ambassador-site-delegation-v1-initiative.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">Ambassador Site: Delegation v1</h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">Coinbase is one of the main Cryptocurrency spot-trading exchanges out there. San Fransisco based Coinbase was founded in June 2012. Coinbase provides a digital currency wallet service and a platform.. <span className="sm-font synth-blue bold">View Details</span></p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="request no-margin bio-info"><span className="bio-info">initiated by</span> <span className=" bio-info synth-blue">david</span> in <span className="bio-info synth-pink">Competitions</span> <span className="sm-font bio-info">on <span className="synth-blue">23 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12 votes">
                                            6
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            800 SNX
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            <div className="utility-btn vertical-align">
                                                <div className="voting-wrapper">
                                                    <div className="grants-active">
                                                        ACTIVE
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider" />
                                </div>{/* ========================= Data Wrapper End ========================= */}
                                {/* ========================= Data Wrapper Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="debt-hedging-zaps-initiative.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">Debt Hedging Zaps</h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">Coinbase is one of the main Cryptocurrency spot-trading exchanges out there. San Fransisco based Coinbase was founded in June 2012. Coinbase provides a digital currency wallet service and a platform.. <span className="sm-font synth-blue bold">View Details</span></p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="request no-margin bio-info"><span className="bio-info">initiated by</span> <span className=" bio-info synth-blue">ΔLΞXΔNDΞR</span> in <span className="bio-info synth-pink">Competitions</span> <span className="sm-font bio-info">on <span className="synth-blue">23 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12 votes">
                                            7
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            800 SNX
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            <div className="utility-btn vertical-align">
                                                <div className="voting-wrapper">
                                                    <div className="grants-completed">
                                                        COMPLETED
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider" />
                                </div>{/* ========================= Data Wrapper End ========================= */}{/* ========================= Data Wrapper Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="meme-site-design-and-build-initiative.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">Meme Site Design and Build: Multi Asset v2</h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">Coinbase is one of the main Cryptocurrency spot-trading exchanges out there. San Fransisco based Coinbase was founded in June 2012. Coinbase provides a digital currency wallet service and a platform.. <span className="sm-font synth-blue bold">View Details</span></p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="request no-margin bio-info"><span className="bio-info">initiated by</span> <span className=" bio-info synth-blue">david</span> in <span className="bio-info synth-pink">Competitions</span> <span className="sm-font bio-info">on <span className="synth-blue">23 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12 votes">
                                            4
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            800 SNX
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            <div className="utility-btn vertical-align">
                                                <div className="voting-wrapper">
                                                    <div className="grants-completed">
                                                        COMPLETED
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider" />
                                </div>{/* ========================= Data Wrapper End ========================= */}
                            </div>{/* ========================= Tabs All Data End========================= */}{/* =========================  Tabs End========================= */}
                        </div>{/* All data end*/}
                        {/* Applied Start*/}
                        <div aria-labelledby="applied-tab" className="tab-pane fade" id="active" role="tabpanel">
                            <div className="container">
                                <div className="heading-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 active-tab-header">
                                            Competitions - ACTIVE
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            PARTICIPANTS <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            AMOUNT <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            STATUS <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                    </div>
                                </div>{/* ========================= Tab Data Headings End========================= */}
                                {/* ========================= Repeat Data Start ========================= */}
                                {/* ========================= Data Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="initiative-stsla-meme-site-design-comp-v1.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">sTSLA Meme Site Design Comp v1</h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">Discord bots are one of the most useful features of the communication platform. They are AIs that marketers and business owners can use to perform a wide range of automated... <span className="sm-font synth-blue bold">View Details</span></p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="sm-font no-margin bio-info"><span className="bio-info">Initiated by</span> <span className=" bio-info synth-blue">Andy</span> in <span className="sm-font bio-info synth-pink">Competitions</span> <span className="sm-font bio-info">on <span className="synth-blue">20 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12 votes">
                                            12
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            1.500 SNX
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            <div className="voting-wrapper">
                                                <div className="vertical-align grants-active">
                                                    ACTIVE
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider" />
                                </div>{/* ========================= Data Wrapper End ========================= */}
                                {/* ========================= Data Wrapper Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="Competitions-individual.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">Chainlink Hackathon</h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">The Synthetix developer documentation site needs to be given a much-needed upgrade. Overhaul the docs to cover a few key user journeys for engineers looking to programmatically interact with Synthetix... <span className="sm-font synth-blue bold">View Details</span></p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="request no-margin bio-info"><span className="bio-info">initiated by</span> <span className=" bio-info synth-blue">ΔLΞXΔNDΞR</span> in <span className="bio-info synth-pink">Competitions</span> <span className="sm-font bio-info">on <span className="synth-blue">9 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12 votes">
                                            10
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            500 SNX
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            <div className="utility-btn vertical-align">
                                                <div className="voting-wrapper">
                                                    <div className="grants-active">
                                                        ACTIVE
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider" />
                                </div>{/* ========================= Data Wrapper End ========================= */}
                                {/* ========================= Data Wrapper Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="Competitions-individual.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">gDAO Site Design Competition</h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">Coinbase is one of the main Cryptocurrency spot-trading exchanges out there. San Fransisco based Coinbase was founded in June 2012. Coinbase provides a digital currency wallet service and a platform.. <span className="sm-font synth-blue bold">View Details</span></p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="request no-margin bio-info"><span className="bio-info">initiated by</span> <span className=" bio-info synth-blue">cryptotoit</span> in <span className="bio-info synth-pink">Competitions</span> <span className="sm-font bio-info">on <span className="synth-blue">17 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12 votes">
                                            24
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            200 SNX
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            <div className="utility-btn vertical-align">
                                                <div className="voting-wrapper">
                                                    <div className="grants-active">
                                                        ACTIVE
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider" />
                                </div>{/* ========================= Data Wrapper End ========================= */}
                                {/* ========================= Data Wrapper Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="gdao-site-design-and-build-initiative.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">gDAO Site Design and Build</h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">Coinbase is one of the main Cryptocurrency spot-trading exchanges out there. San Fransisco based Coinbase was founded in June 2012. Coinbase provides a digital currency wallet service and a platform.. <span className="sm-font synth-blue bold">View Details</span></p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="request no-margin bio-info"><span className="bio-info">initiated by</span> <span className=" bio-info synth-blue">RubberˆDuck</span> in <span className="bio-info synth-pink">Competitions</span> <span className="sm-font bio-info">on <span className="synth-blue">23 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12 votes">
                                            16
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            800 SNX
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            <div className="utility-btn vertical-align">
                                                <div className="voting-wrapper">
                                                    <div className="grants-active">
                                                        ACTIVE
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider" />
                                </div>{/* ========================= Data Wrapper End ========================= */}
                                {/* ========================= Data Wrapper Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="Competitions-individual.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">Ambassador Site: Delegation v1</h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">Coinbase is one of the main Cryptocurrency spot-trading exchanges out there. San Fransisco based Coinbase was founded in June 2012. Coinbase provides a digital currency wallet service and a platform.. <span className="sm-font synth-blue bold">View Details</span></p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="request no-margin bio-info"><span className="bio-info">initiated by</span> <span className=" bio-info synth-blue">david</span> in <span className="bio-info synth-pink">Competitions</span> <span className="sm-font bio-info">on <span className="synth-blue">23 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12 votes">
                                            6
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            800 SNX
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            <div className="utility-btn vertical-align">
                                                <div className="voting-wrapper">
                                                    <div className="grants-active">
                                                        ACTIVE
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider" />
                                </div>{/* ========================= Data Wrapper End ========================= */}
                                {/* ========================= Data End ========================= */}
                            </div>
                        </div>{/* Applied data end*/}
                        {/* Completed start*/}
                        <div aria-labelledby="completed-tab" className="tab-pane fade" id="completed" role="tabpanel">
                            <div className="container">
                                <div className="heading-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 active-tab-header">
                                            Competitions - COMPLETED
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            PARTICIPANTS <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            AMOUNT <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            STATUS <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                    </div>
                                </div>{/* ========================= Tab Data Headings End========================= */}
                                {/* ========================= Data Wrapper Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="Competitions-individual.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">Debt Hedging Zaps</h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">Coinbase is one of the main Cryptocurrency spot-trading exchanges out there. San Fransisco based Coinbase was founded in June 2012. Coinbase provides a digital currency wallet service and a platform.. <span className="sm-font synth-blue bold">View Details</span></p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="request no-margin bio-info"><span className="bio-info">initiated by</span> <span className=" bio-info synth-blue">ΔLΞXΔNDΞR</span> in <span className="bio-info synth-pink">Competitions</span> <span className="sm-font bio-info">on <span className="synth-blue">23 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12 votes">
                                            7
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            800 SNX
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            <div className="utility-btn vertical-align">
                                                <div className="voting-wrapper">
                                                    <div className="grants-completed">
                                                        COMPLETED
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider" />
                                </div>{/* ========================= Data Wrapper End ========================= */}{/* ========================= Data Wrapper Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="Competitions-individual.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">Meme Site Design and Build: Multi Asset v2</h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">Coinbase is one of the main Cryptocurrency spot-trading exchanges out there. San Fransisco based Coinbase was founded in June 2012. Coinbase provides a digital currency wallet service and a platform.. <span className="sm-font synth-blue bold">View Details</span></p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="request no-margin bio-info"><span className="bio-info">initiated by</span> <span className=" bio-info synth-blue">david</span> in <span className="bio-info synth-pink">Competitions</span> <span className="sm-font bio-info">on <span className="synth-blue">23 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12 votes">
                                            4
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            800 SNX
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            <div className="utility-btn vertical-align">
                                                <div className="voting-wrapper">
                                                    <div className="grants-completed">
                                                        COMPLETED
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider" />
                                </div>{/* ========================= Data Wrapper End ========================= */}
                            </div>
                        </div>{/* Completed data end*/}
                        {/* Completed start*/}
                        <div aria-labelledby="cancelled-tab" className="tab-pane fade" id="cancelled" role="tabpanel">
                            <div className="container">
                                <div className="heading-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 active-tab-header">
                                            Competitions - CANCELLED
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            PARTICIPANTS <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            AMOUNT <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            STATUS <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                    </div>
                                </div>{/* ========================= Tab Data Headings End========================= */}
                            </div>
                        </div>
                        {/* Completed data end*/}
                    </div>
                    {/* Tab panes End*/}
                </div>

                <Footer />

            </main>
        </>
    )

}