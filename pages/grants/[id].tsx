import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {Header} from "../../components/Header";
import {Navbar} from "../../components/Navbar";
import {Footer} from "../../components/Footer";
import {grantsData} from "../../domainData/GrantsData";
import {useRouter} from "next/router";

export default function Grant() {

    const { id } = useRouter().query;

    console.log(id);

    const grantsValue = grantsData[id] ;

    console.log(grantsValue);

    return (
        <>
            <Head>
                <title>{grantsValue.title} | Synthetix Initiatives</title>
            </Head>

            <Header />

            <main>

                <Navbar />

                {/* ========================= Synthetix Grants Individual hero-section Start ========================= */}
                <section className="synth-grants-indi-section" id="grants">
                    <div className="container">
                        <div className="row align-items-center position-relative">
                            <div className="col-md-12">
                                <div className="hero-content grants-individual-vh">
                                    <div className="synth-gdao-grants-mini-logo"><img alt="Logo" className="gdao-mini-logo" src="/img/logo/synthetix_gdao_logo_mini.svg" />
                                    </div>
                                    <h1 className="synth-grants-h wow fadeInUp" data-wow-delay=".2s">GRANT APPLICATION</h1>
                                    <h4 className="wow fadeInUp grants-indi-description align-center" data-wow-delay=".6s" style={{color: '#00D1FF'}}>{grantsValue.title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========================= Synthetix Grants Individual hero-section Start End ========================= */}
                {/* ========================= Pager Start ========================= */}
                <div className="grant-indi-bg">
                    <div className="container">
                        <div className="row grants-pager-wrapper">
                            <div className="col-md-12">
                                <ul className="pager">
                                    <li className="previous">
                                        <Link href="/grants">
                                            <a className="grants-pager-link">
                                                <span className="synth-up-arrow">
                                                    <img alt="Arrow" className="pager-icons" src="/img/grants/gdao-previous.svg" />
                                                </span>
                                                BACK TO GRANTS
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="next">
                                        <Link href="/grants">
                                            <a className="grants-pager-link">
                                                NEXT GRANT
                                                <span className="synth-up-arrow">
                                                    <img alt="Arrow" className="pager-icons" src="/img/grants/gdao-next.svg" />
                                                </span>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* ========================= Pager End ========================= */}
                    {/* ========================= Blue Banner Start ========================= */}
                    <div className="container-fluid synth-tab-styling">
                        <div className="indi-grants-h-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="synth-tabs">
                                            <span className="request no-margin bio-info">
                                                <span className="bio-info">Requested by</span>
                                                <span className="bio-info synth-blue">
                                                    {grantsValue.requestedBy}
                                                </span>
                                                in
                                                <span className="bio-info synth-pink">
                                                    Grants
                                                </span>
                                                <span className="sm-font bio-info">
                                                    on
                                                    <span className="synth-blue">
                                                        {grantsValue.startDate}
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ========================= Blue Banner End ========================= */}
                    {/* ========================= grantsDAO Introduction ========================= */}
                    <section className="grants-introduction">
                        <div className="container">
                            <div className="row grants-descr-wrapper padding-bottom">
                                <div className="h4-grants-dao-descr">
                                    DESCRIPTION
                                </div>
                                <p className="gdao-descriptor">
                                    {grantsValue.description}
                                </p>
                                <div className="h4-grants-dao-descr">
                                    OVERVIEW
                                </div>
                                <p className="gdao-descriptor">
                                    {grantsValue.overview}
                                </p>
                                <div className="h4-grants-dao-descr">
                                    VALUE TO SYNTHETIX
                                </div>
                                <p className="gdao-descriptor">
                                    {grantsValue.valueStatement}
                                </p>
                                <div className="h4-grants-dao-descr">
                                    APPLICANT BACKGROUND
                                </div>
                                <p className="gdao-descriptor">
                                    {grantsValue.background}
                                </p>
                                <div className="h4-grants-dao-descr">
                                    PROJECT IMPLEMENTATION PLAN
                                </div>
                                <p className="gdao-descriptor">
                                    {grantsValue.background}
                                </p>
                                <div className="h4-grants-dao-descr">
                                    ADDITIONAL INFORMATION
                                </div>
                                <p className="gdao-descriptor">
                                    {grantsValue.additionalInformation}
                                </p>
                                <div className="h4-grants-dao-descr">
                                    BUDGET BREAKDOWN
                                </div>
                                <p className="gdao-descriptor">
                                    {grantsValue.budgetBreakdown}
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* ========================= grantsDAO Introduction End ========================= */}{/* ========================= Blue Banner Start ========================= */}
                    <div className="container-fluid synth-tab-styling">
                        <div className="indi-grants-h-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="synth-tabs">
                                            <div className="h4-grants-summary-h">
                                                SUMMARY
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ========================= Blue Banner End ========================= */}
                    {/* ========================= grantsDAO Info Summary Start ========================= */}
                    <section className="grants-info-summary">
                        <div className="row grants-descr-wrapper grants-info-summary-wrapper padding-bottom">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="info-left col-md-2">
                                                        Strategies
                                                    </div>
                                                    <div className="info-right col-md-4">
                                                        Icon
                                                    </div>
                                                    <div className="info-left col-md-2">
                                                        Start Date
                                                    </div>
                                                    <div className="info-right col-md-4">
                                                        {grantsValue.startDate}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="info-left col-md-2">
                                                        Author
                                                    </div>
                                                    <div className="info-right col-md-4">
                                                        {grantsValue.author}
                                                    </div>
                                                    <div className="info-left col-md-2">
                                                        End Date
                                                    </div>
                                                    <div className="info-right col-md-4">
                                                        {grantsValue.endDate}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="info-left col-md-2">
                                                        IPFS
                                                    </div>
                                                    <div className="info-right col-md-4">
                                                        #QmaniFD
                                                    </div>
                                                    <div className="info-left col-md-2">
                                                        Snapshot
                                                    </div>
                                                    <div className="info-right col-md-4">
                                                        11,646,734
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                    </div>
                                    <div className="col-md-3">
                                        <div className="indi-btn-wrapper">
                                            <div className="utility-btn">
                                                <div className="voting-wrapper">
                                                    <div className="vertical-align grants-active">
                                                        {grantsValue.status}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="utility-btn">
                                                <a href="#"><button className="vertical-align grants-cancel wow fadeInUp animated" data-wow-delay=".6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp'}}>CANCEL GRANT</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ========================= grantsDAO Info Summary End ========================= */}
                    {/* ========================= Yes No Votes Start ========================= */}
                    <div className="container-fluid synth-tab-styling">
                        <div className="indi-grants-h-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-4 synth-tabs">
                                                <span className="candidates-h">YES VOTES</span> <span className="votes-amount">4/5</span>
                                            </div>
                                            <div className="col-md-4 synth-tabs">
                                                <span className="candidates-h">NO VOTES</span><span className="votes-amount">0</span>
                                            </div>
                                            <div className="col-md-1">
                                            </div>
                                            <div className="vertical-align align-center col-md-3 col-sm-12">
                                                <div className="indi-amount-wrapper">
                                                    <div className="grants-indi-amount">
                                                        0 SNX
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ========================= Yes No Votes End ========================= */}{/* ========================= Voting Info Start========================= */}
                    <section className="candidates-info anchor" id="candidates-info">
                        {/* ========================= Tab Data Headings========================= */}
                        <div className="container">
                            <div className="heading-wrapper max-width padding-15">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 active-tab-header">
                                        VOTES
                                    </div>
                                    <div className="data-header align-center col-md-3 col-sm-12">
                                        HANDLE <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                    </div>
                                    <div className="data-header align-center col-md-3 col-sm-12">
                                        VOTE <span className="synth-up-arrow"><img alt="Arrow" className="custom-icons" src="/img/grants/down-arrow.svg" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ========================= Tab Data Headings End========================= */}
                        {/* ========================= Tabs All Data Start - Repeat these items...========================= */}
                        <div className="container">
                            <div className="gi-input-wrapper max-width">
                                <div className="voter-wrapper">
                                    <div className="row">
                                        <div className="col-md-1"><img alt="Avatar" className="member-avatar" src="/img/grants/alexander.png" />
                                        </div>
                                        <div className="col-md-5 col-sm-12 vertical-align">
                                            <a href="#">
                                                <h4 className="member-acc-nr no-margin grantsdao-data-heading padding-right">0xCD36e4F3D64B6B0c4EE8e414F0Ef288FC54325432534f</h4></a>
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            ΔLΞXΔNDΞR
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            <div className="utility-btn">
                                                <div className>
                                                    <div className="vertical-align grants-yes">
                                                        YES
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="voter-wrapper">
                                    <div className="row">
                                        <div className="col-md-1"><img alt="Avatar" className="member-avatar" src="/img/grants/andy.png" />
                                        </div>
                                        <div className="col-md-5 col-sm-12 vertical-align">
                                            <a href="#">
                                                <h4 className="member-acc-nr no-margin grantsdao-data-heading padding-right">0xCD36e4F3D64B6B0c4EE8e414F0Ef288FCFE6653654</h4></a>
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            andy
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            <div className="utility-btn">
                                                <div className>
                                                    <div className="vertical-align grants-yes">
                                                        YES
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="voter-wrapper">
                                    <div className="row">
                                        <div className="col-md-1"><img alt="Avatar" className="member-avatar" src="/img/grants/cryptotoit.png" />
                                        </div>
                                        <div className="col-md-5 col-sm-12 vertical-align">
                                            <a href="#">
                                                <h4 className="member-acc-nr no-margin grantsdao-data-heading padding-right">0xCD36e4F3D64B6B0c4EE8e414F0Ef288FCF432543245</h4></a>
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            cryptotoit
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            <div className="utility-btn">
                                                <div className>
                                                    <div className="vertical-align grants-to-vote">
                                                        TO VOTE
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="voter-wrapper">
                                    <div className="row">
                                        <div className="col-md-1"><img alt="Avatar" className="member-avatar" src="/img/grants/david.png" />
                                        </div>
                                        <div className="col-md-5 col-sm-12 vertical-align">
                                            <a href="#">
                                                <h4 className="member-acc-nr no-margin grantsdao-data-heading padding-right">0xCD36e4F3D64B6B0c4EE8e414F0Ef288FCFE1f9876987</h4></a>
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            david
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            <div className="utility-btn">
                                                <div className>
                                                    <div className="vertical-align grants-yes">
                                                        YES
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="voter-wrapper-last">
                                    <div className="row">
                                        <div className="col-md-1"><img alt="Avatar" className="member-avatar" src="/img/grants/member-avatar.png" />
                                        </div>
                                        <div className="col-md-5 col-sm-12 vertical-align">
                                            <a href="#">
                                                <h4 className="member-acc-nr no-margin grantsdao-data-heading padding-right">0xCD36e4F3D64B6B0c4EE8e414F0Ef288FCFE543245324</h4></a>
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            RubberˆDuck
                                        </div>
                                        <div className="align-center col-md-3 col-sm-12 vertical-align">
                                            <div className="utility-btn">
                                                <div className>
                                                    <div className="vertical-align grants-yes">
                                                        YES
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ========================= Tabs Data End========================= */}{/* ========================= Candidates Info End========================= */}{/* ========================= Divider Start ========================= */}
                        <div className="container">
                            <div className="row max-width-grant-divider">
                                <div style={{height: 20}}>
                                </div>
                                <div className="col-md-12">
                                    <div className="grants-end">
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ========================= Divider End ========================= */}
                        {/* ========================= grantsDAO Data End========================= */}
                        {/* ========================= Grants Section End ========================= */}
                        {/* ========================= Pager Start ========================= */}
                        <div className="container">
                            <div className="row grants-pager-wrapper">
                                <div className="col-md-12">
                                    <ul className="pager">
                                        <li className="previous">
                                            <Link href="/grants">
                                                <a className="grants-pager-link">
                                                    <span className="synth-up-arrow">
                                                        <img alt="Arrow" className="pager-icons" src="/img/grants/gdao-previous.svg" />
                                                    </span>
                                                    BACK TO GRANTS
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="next">
                                            <Link href="/grants">
                                                <a className="grants-pager-link" >
                                                    NEXT GRANT
                                                    <span className="synth-up-arrow">
                                                        <img alt="Arrow" className="pager-icons" src="/img/grants/gdao-next.svg" />
                                                    </span>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* ========================= Pager End ========================= */}

                <Footer />

            </main>
        </>
    )

}