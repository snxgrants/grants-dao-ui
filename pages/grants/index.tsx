import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {Header} from "../../components/Header";
import {Navbar} from "../../components/Navbar";
import {Footer} from "../../components/Footer";

export default function Grants() {
    return (
        <>
            <Head>
                <title>Home | Synthetix grantsDAO</title>
            </Head>

            <Header />

            <main>

                <Navbar />

                {/* ========================= Synthetix hero-section start ========================= */}
                <section className="synth-grants-hero-section" id="grants">
                    <div className="container">
                        <div className="row align-items-center position-relative">
                            <div className="col-md-12">
                                <div className="hero-content grants-vh">
                                    <div className="synth-gdao-grants-mini-logo">
                                        <img alt="Logo" className="gdao-mini-logo" src="/img/logo/synthetix_gdao_logo_mini.svg" />
                                    </div>
                                    <h1 className="synth-grants-h wow fadeInUp animated" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>
                                        GRANTS
                                    </h1>
                                    <p className="wow fadeInUp synth-p-opti align-center" data-wow-delay=".6s">
                                        Synthetix GrantsDAO is a decentrailzed organisation part of the Synthetix protocol that governs the process of funding projects that contribute to the adoption of Synthetix.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========================= Synthetix hero-section end ========================= */}
                <div className="grants-bg">
                    {/* ========================= Divider Start ========================= */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="synth-divider">
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ========================= Divider End ========================= */}
                    {/* ========================= grantsDAO Data ========================= */}
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
                                                <li className="nav-item" role="presentation">
                                                    <button aria-controls="applied" aria-selected="false" className="nav-link" data-bs-target="#applied" data-bs-toggle="tab" id="applied-tab" role="tab" type="button">Applied</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button aria-controls="approved" aria-selected="false" className="nav-link" data-bs-target="#approved" data-bs-toggle="tab" id="approved-tab" role="tab" type="button">Approved</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button aria-controls="rejected" aria-selected="false" className="nav-link" data-bs-target="#rejected" data-bs-toggle="tab" id="rejected-tab" role="tab" type="button">Rejected</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button aria-controls="active" aria-selected="false" className="nav-link" data-bs-target="#active" data-bs-toggle="tab" id="active-tab" role="tab" type="button">Active</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button aria-controls="completed" aria-selected="false" className="nav-link" data-bs-target="#completed" data-bs-toggle="tab" id="completed-tab" role="tab" type="button">Completed</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button aria-controls="cancelled" aria-selected="false" className="nav-link" data-bs-target="#cancelled" data-bs-toggle="tab" id="cancelled-tab" role="tab" type="button">Cancelled</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="vertical-align align-center col-md-2 col-sm-12">
                                        <div className="utility-btn">
                                            <a href="grant-application.html"><button className="vertical-align grants-apply-btn wow fadeInUp" data-wow-delay=".6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp'}}>APPLY FOR GRANT</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Nav tabs end*/}
                    {/* Tab panes Start*/}
                    <div className="tab-content" id="myTabContent">
                        {/* All Start*/}
                        <div aria-labelledby="all-tab" className="tab-pane fade show active" id="all" role="tabpanel">
                            <div className="container">
                                <div className="heading-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 active-tab-header">
                                            GRANTS - ALL
                                        </div>
                                        <div className="data-header align-center col-md-1 col-sm-12">
                                            VOTES <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-3 col-sm-12">
                                            AMOUNT <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            STATUS <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                    </div>
                                </div>
                                {/* ========================= Tab Data Headings End========================= */}{/* ========================= Repeat Data Start ========================= */}
                                {/* ========================= Data Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="grant-application-discord-bot-maintenance.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">
                                                        Discord Bot Maintenance
                                                    </h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
                                                        Discord bots are one of the most useful features of the communication platform. They are AIs that marketers and business owners can use to perform a wide range of automated... <span className="sm-font synth-blue bold">View Details</span>
                                                    </p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="sm-font no-margin bio-info"><span className="bio-info">Requested by</span> <span className="bio-info synth-blue">Danijel</span> in <span className="sm-font bio-info synth-pink">Grants</span> <span className="sm-font bio-info">on <span className="synth-blue">20 March 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-1 col-sm-12 votes">
                                            0
                                        </div>
                                        <div className="vertical-align align-center col-md-3 col-sm-12">
                                            0
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            <div className="voting-wrapper">
                                                <div className="vertical-align grants-applied">
                                                    APPLIED
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider">
                                    </div>
                                </div>
                                {/* ========================= Data End ========================= */}
                                {/* ========================= Data Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="grant-application-discord-documentation.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">
                                                        Discord Documentation
                                                    </h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
                                                        The Synthetix developer documentation site needs to be given a much-needed upgrade. Overhaul the docs to cover a few key user journeys for engineers looking to programmatically... <span className="sm-font synth-blue bold">View Details</span>
                                                    </p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="request no-margin bio-info"><span className="bio-info">Requested by</span> <span className="bio-info synth-blue">BiGs</span> in <span className="bio-info synth-pink">Grants</span> <span className="sm-font bio-info">on <span className="synth-blue">9 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-1 col-sm-12 votes">
                                            5/5
                                        </div>
                                        <div className="vertical-align align-center col-md-3 col-sm-12">
                                            0
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            <div className="utility-btn vertical-align">
                                                <div className="voting-wrapper">
                                                    <div className="grants-approved">
                                                        APPROVED
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider">
                                    </div>
                                </div>
                                {/* ========================= Data End ========================= */}
                                {/* ========================= Data Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="grant-application-coinbase-hedging-bot.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">
                                                        Coinbase Hedging Bot
                                                    </h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
                                                        Coinbase is one of the main Cryptocurrency spot-trading exchanges out there. San Fransisco based Coinbase was founded in June 2012. Coinbase provides a digital currency platform... <span className="sm-font synth-blue bold">View Details</span>
                                                    </p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="request no-margin bio-info"><span className="bio-info">Requested by</span> <span className="bio-info synth-blue">DeepFakingValue</span> in <span className="bio-info synth-pink">Grants</span> <span className="sm-font bio-info">on <span className="synth-blue">17 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-1 col-sm-12 votes">
                                            4/5
                                        </div>
                                        <div className="vertical-align align-center col-md-3 col-sm-12">
                                            1500 SNX
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
                                    </div>
                                    {/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider">
                                    </div>
                                </div>
                                {/* ========================= Data End ========================= */}
                                {/* ========================= Data Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="grant-application-gnosis-safe-sponsoring.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">
                                                        Gnosis Safe Sponsoring
                                                    </h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
                                                        Coinbase is one of the main Cryptocurrency spot-trading exchanges out there. San Fransisco based Coinbase was founded in June 2012. Coinbase provides a digital currency wallet... <span className="sm-font synth-blue bold">View Details</span>
                                                    </p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="request no-margin bio-info"><span className="bio-info">Requested by</span> <span className="bio-info synth-blue">GS</span> in <span className="bio-info synth-pink">Grants</span> <span className="sm-font bio-info">on <span className="synth-blue">23 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-1 col-sm-12 votes">
                                            5/5
                                        </div>
                                        <div className="vertical-align align-center col-md-3 col-sm-12">
                                            1500 SNX
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
                                    </div>
                                    {/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider">
                                    </div>
                                </div>
                                {/* ========================= Data End ======================= == */}
                            </div>
                        </div>
                        {/* All data end*/}
                        {/* Applied Start*/}
                        <div aria-labelledby="applied-tab" className="tab-pane fade" id="applied" role="tabpanel">
                            <div className="container">
                                <div className="heading-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 active-tab-header">
                                            GRANTS - APPLIED FOR
                                        </div>
                                        <div className="data-header align-center col-md-1 col-sm-12">
                                            VOTES <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-3 col-sm-12">
                                            AMOUNT <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            STATUS <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                    </div>
                                </div>
                                {/* ========================= Tab Data Headings End========================= */}
                                {/* ========================= Repeat Data Start ========================= */}
                                {/* ========================= Data Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="grant-application-discord-bot-maintenance.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">
                                                        Discord Bot Maintenance
                                                    </h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
                                                        Discord bots are one of the most useful features of the communication platform. They are AIs that marketers and business owners can use to perform a wide range of automated... <span className="sm-font synth-blue bold">View Details</span>
                                                    </p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="sm-font no-margin bio-info"><span className="bio-info">Requested by</span> <span className="bio-info synth-blue">Danijel</span> in <span className="sm-font bio-info synth-pink">Grants</span> <span className="sm-font bio-info">on <span className="synth-blue">20 March 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-1 col-sm-12 votes">
                                            0
                                        </div>
                                        <div className="vertical-align align-center col-md-3 col-sm-12">
                                            0
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            <div className="voting-wrapper">
                                                <div className="vertical-align grants-applied">
                                                    APPLIED
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider">
                                    </div>
                                </div>
                                {/* ========================= Data End ========================= */}
                            </div>
                        </div>
                        {/* Applied data end*/}
                        {/* Approved Start*/}
                        <div aria-labelledby="approved-tab" className="tab-pane fade" id="approved" role="tabpanel">
                            <div className="container">
                                <div className="heading-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 active-tab-header">
                                            GRANTS - APPROVED
                                        </div>
                                        <div className="data-header align-center col-md-1 col-sm-12">
                                            VOTES <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-3 col-sm-12">
                                            AMOUNT <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            STATUS <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                    </div>
                                </div>
                                {/* ========================= Tab Data Headings End========================= */}{/* ========================= Repeat Data Start ========================= */}
                                {/* ========================= Data Start ========================= */}
                                {/* ========================= Data Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="grant-application-discord-documentation.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">
                                                        Discord Documentation
                                                    </h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
                                                        The Synthetix developer documentation site needs to be given a much-needed upgrade. Overhaul the docs to cover a few key user journeys for engineers looking to programmatically... <span className="sm-font synth-blue bold">View Details</span>
                                                    </p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="request no-margin bio-info"><span className="bio-info">Requested by</span> <span className="bio-info synth-blue">BiGs</span> in <span className="bio-info synth-pink">Grants</span> <span className="sm-font bio-info">on <span className="synth-blue">9 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-1 col-sm-12 votes">
                                            5/5
                                        </div>
                                        <div className="vertical-align align-center col-md-3 col-sm-12">
                                            0
                                        </div>
                                        <div className="vertical-align align-center col-md-2 col-sm-12">
                                            <div className="utility-btn vertical-align">
                                                <div className="voting-wrapper">
                                                    <div className="grants-approved">
                                                        APPROVED
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider">
                                    </div>
                                </div>
                                {/* ========================= Data End ========================= */}
                            </div>
                        </div>
                        {/* Approved data end*/}
                        {/* Rejected Start*/}
                        <div aria-labelledby="rejected-tab" className="tab-pane fade" id="rejected" role="tabpanel">
                            <div className="container">
                                <div className="heading-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 active-tab-header">
                                            GRANTS - REJECTED
                                        </div>
                                        <div className="data-header align-center col-md-1 col-sm-12">
                                            VOTES <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-3 col-sm-12">
                                            AMOUNT <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            STATUS <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                    </div>
                                </div>
                                {/* ========================= Tab Data Headings End========================= */}{/* ========================= Repeat Data Start ========================= */}
                                {/* ========================= Data Start ========================= */}
                                {/* ========================= Data Start ========================= */}
                                {/* ========================= Data End ========================= */}
                            </div>
                        </div>
                        {/* Rejected data end*/}
                        {/* Active Start*/}
                        <div aria-labelledby="active-tab" className="tab-pane fade" id="active" role="tabpanel">
                            <div className="container">
                                <div className="heading-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 active-tab-header">
                                            GRANTS - ACTIVE
                                        </div>
                                        <div className="data-header align-center col-md-1 col-sm-12">
                                            VOTES <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-3 col-sm-12">
                                            AMOUNT <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            STATUS <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                    </div>
                                </div>
                                {/* ========================= Tab Data Headings End========================= */}{/* ========================= Repeat Data Start ========================= */}
                                {/* ========================= Data Start ========================= */}
                                {/* ========================= Data Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="grant-application-coinbase-hedigng-bot.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">
                                                        Coinbase Hedging Bot
                                                    </h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
                                                        Coinbase is one of the main Cryptocurrency spot-trading exchanges out there. San Fransisco based Coinbase was founded in June 2012. Coinbase provides a digital currency platform... <span className="sm-font synth-blue bold">View Details</span>
                                                    </p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="request no-margin bio-info"><span className="bio-info">Requested by</span> <span className="bio-info synth-blue">DeepFakingValue</span> in <span className="bio-info synth-pink">Grants</span> <span className="sm-font bio-info">on <span className="synth-blue">17 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-1 col-sm-12 votes">
                                            4/5
                                        </div>
                                        <div className="vertical-align align-center col-md-3 col-sm-12">
                                            1500 SNX
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
                                    </div>
                                    {/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider">
                                    </div>
                                </div>
                                {/* ========================= Data End ========================= */}
                            </div>
                        </div>
                        {/* Active data end*/}
                        {/* Completed Start*/}
                        <div aria-labelledby="completed-tab" className="tab-pane fade" id="completed" role="tabpanel">
                            <div className="container">
                                <div className="heading-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 active-tab-header">
                                            GRANTS - COMPLETED
                                        </div>
                                        <div className="data-header align-center col-md-1 col-sm-12">
                                            VOTES <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-3 col-sm-12">
                                            AMOUNT <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            STATUS <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                    </div>
                                </div>
                                {/* ========================= Tab Data Headings End========================= */}
                                {/* ========================= Repeat Data Start ========================= */}
                                <div className="data-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 data-p">
                                            <div className="data-description-wrapper">
                                                <a className="hover" href="grant-application-gnosis-safe-sponsoring.html">
                                                    <h4 className="no-margin grantsdao-data-heading padding-right">
                                                        Gnosis Safe Sponsoring
                                                    </h4>
                                                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
                                                        Coinbase is one of the main Cryptocurrency spot-trading exchanges out there. San Fransisco based Coinbase was founded in June 2012. Coinbase provides a digital currency wallet... <span className="sm-font synth-blue bold">View Details</span>
                                                    </p></a>
                                            </div>
                                            <div className="request-details-wrapper">
                                                <span className="request no-margin bio-info"><span className="bio-info">Requested by</span> <span className="bio-info synth-blue">GS</span> in <span className="bio-info synth-pink">Grants</span> <span className="sm-font bio-info">on <span className="synth-blue">23 April 2021</span></span></span>
                                            </div>
                                        </div>
                                        <div className="vertical-align align-center col-md-1 col-sm-12 votes">
                                            5/5
                                        </div>
                                        <div className="vertical-align align-center col-md-3 col-sm-12">
                                            1500 SNX
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
                                    </div>
                                    {/* ========================= Repeat Data End ========================= */}
                                    <div className="soft-divider">
                                    </div>
                                </div>
                                {/* ========================= Data End ======================= == */}
                            </div>
                        </div>
                        {/* Completed data end*/}
                        {/* Cancelled Start*/}
                        <div aria-labelledby="cancelled-tab" className="tab-pane fade" id="cancelled" role="tabpanel">
                            <div className="container">
                                <div className="heading-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 active-tab-header">
                                            GRANTS - CANCELLED
                                        </div>
                                        <div className="data-header align-center col-md-1 col-sm-12">
                                            VOTES <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-3 col-sm-12">
                                            AMOUNT <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                        <div className="data-header align-center col-md-2 col-sm-12">
                                            STATUS <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                        </div>
                                    </div>
                                </div>
                                {/* ========================= Tab Data Headings End========================= */}
                                {/* ========================= Repeat Data Start ========================= */}
                                {/* ========================= Data End ======================= == */}
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