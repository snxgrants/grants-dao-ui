import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { useRouter } from 'next/router'
import {Header} from "../../components/Header";
import {Navbar} from "../../components/Navbar";
import {Footer} from "../../components/Footer";
import {initiativesData} from "../../domainData/InitiativesData";

export default function Initiative() {

    const { id } = useRouter().query;

    console.log(id);

    const initiativeValue = initiativesData[id] ;

    console.log(initiativeValue);

    return (
        <>
            <Head>
                <title> Home | Synthetix Initiatives </title>
            </Head>

            <Header />

            <main>

                <Navbar />

                {/* ========================= Synthetix Grants Individual hero-section Start ========================= */}
                <section className="synth-grants-initiatives-individual-section" id="inititatives-indi">
                    <div className="container">
                        <div className="row align-items-center position-relative">
                            <div className="col-md-12">
                                <div className="hero-content grants-individual-vh">
                                    <div className="synth-gdao-grants-mini-logo"><img alt="Logo" className="gdao-mini-logo" src="/img/logo/synthetix_gdao_logo_mini.svg" /></div>
                                    <h1 className="synth-grants-h wow fadeInUp" data-wow-delay=".2s">INITIATIVES</h1>
                                    <h4 className="wow fadeInUp grants-indi-description align-center" data-wow-delay=".6s" style={{color: '#00D1FF'}}>
                                        {initiativeValue.title}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* ========================= Synthetix Grants Individual hero-section Start End ========================= */}
                {/* ========================= Pager Start ========================= */}
                <div className="grant-indi-bg">
                    <div className="container">
                        <div className="row grants-pager-wrapper">
                            <div className="col-md-12">
                                <ul className="pager">
                                    <li className="previous">
                                        <Link href="/initiatives">
                                            <a className="grants-pager-link">
                                                <span className="synth-up-arrow">
                                                    <img alt="Arrow" className="pager-icons" src="/img/grants/gdao-previous.svg" />
                                                </span>
                                                Back
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="next">
                                        <Link href="/initiatives">
                                            <a className="grants-pager-link">
                                                NEXT INITIATIVE
                                                <span className="synth-up-arrow">
                                                    <img alt="Arrow" className="pager-icons" src="/img/grants/gdao-next.svg" />
                                                </span>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>{/* ========================= Pager End ========================= */}
                    {/* ========================= Blue Banner Start ========================= */}
                    <div className="container-fluid synth-tab-styling">
                        <div className="indi-grants-h-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="synth-tabs">
                                            <span className="request no-margin bio-info">
                                                <span className="bio-info">Initiated by</span>
                                                <span className="bio-info synth-blue">
                                                    {initiativeValue.requestedBy}
                                                </span>
                                                in
                                                <span className="bio-info synth-pink">
                                                    Grants
                                                </span>
                                                <span className="sm-font bio-info">
                                                    on
                                                    <span className="synth-blue">
                                                        {initiativeValue.startDate}
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* ========================= Blue Banner End ========================= */}
                    {/* ========================= grantsDAO Introduction ========================= */}
                    <section className="grants-introduction">
                        <div className="container">
                            <div className="row grants-descr-wrapper padding-bottom">
                                <div className="h4-grants-dao-descr">
                                    DESCRIPTION
                                </div>
                                <p className="gdao-descriptor">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Dynamic data for this section from overview content submitted.</p>
                                <div className="h4-grants-dao-descr">
                                    OVERVIEW
                                </div>
                                <p className="gdao-descriptor">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Dynamic data for this section from overview content submitted.</p>
                                <div className="h4-grants-dao-descr">
                                    VALUE TO SYNTHETIX
                                </div>
                                <p className="gdao-descriptor">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Dynamic data for this section from VALUE TO Synthetix content submitted.</p>
                                <div className="h4-grants-dao-descr">
                                    PROJECT IMPLEMENTATION PLAN
                                </div>
                                <p className="gdao-descriptor">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Dynamic data for this section from implementation plan content submitted.</p>
                                <div className="h4-grants-dao-descr">
                                    ADDITIONAL INFORMATION
                                </div>
                                <p className="gdao-descriptor">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Dynamic data for this section from value to SynthetixX additional information contentnsubmitted.</p>
                                <div className="h4-grants-dao-descr">
                                    BUDGET BREAKDOWN
                                </div>
                                <p className="gdao-descriptor">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Dynamic data for this section budget breakdown content submitted.</p>
                            </div>
                        </div>
                    </section>{/* ========================= grantsDAO Introduction End ========================= */}{/* ========================= Blue Banner Start ========================= */}
                    <div className="container-fluid synth-tab-styling">
                        <div className="indi-grants-h-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="synth-tabs">
                                            <div className="h4-grants-summary-h">
                                                SUMMARY
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical-align align-center col-md-3 col-sm-12">
                                        <div className="indi-amount-wrapper">
                                            <div className="grants-indi-amount">
                                                1500 SNX
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* ========================= Blue Banner End ========================= */}
                    {/* ========================= grantsDAO Info Summary Start ========================= */}
                    <section className="grants-info-summary">
                        <div className="row initiatives-descr-wrapper grants-info-summary-wrapper padding-bottom">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="info-left col-md-2">
                                                        Initiated by
                                                    </div>
                                                    <div className="info-right col-md-2">
                                                        Andy
                                                    </div>
                                                    <div className="info-left col-md-3">
                                                        Initiation date
                                                    </div>
                                                    <div className="info-right col-md-4">
                                                        April 20, 2022, 2:00 AM
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="info-left col-md-2">
                                                        Author
                                                    </div>
                                                    <div className="info-right col-md-2">
                                                        synthetix.io
                                                    </div>
                                                    <div className="info-left col-md-3">
                                                        End Date
                                                    </div>
                                                    <div className="info-right col-md-4">
                                                        April 30, 2022, 2:00 AM
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="info-left col-md-2">
                                                        Voting
                                                    </div>
                                                    <div className="info-right col-md-2">
                                                        Internal
                                                    </div>
                                                    <div className="info-left col-md-3">
                                                        Optional info
                                                    </div>
                                                    <div className="info-right col-md-4">
                                                        Optional info
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="indi-btn-wrapper">
                                            <div className="utility-btn">
                                                <div className="voting-wrapper">
                                                    <div className="vertical-align grants-active">
                                                        ACTIVE
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="utility-btn">
                                                <a href="#"><button className="vertical-align grants-cancel wow fadeInUp animated" data-wow-delay=".6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp'}}>CANCEL INITIATIVE</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* ========================= grantsDAO Info Summary End ========================= */}
                    {/* ========================= Divider Start ========================= */}
                    <div className="container">
                        <div className="row max-width-grant-divider">
                            <div className="col-md-12">
                                <div className="grants-end" />
                            </div>
                        </div>
                    </div>{/* ========================= Divider End ========================= */}
                    {/* ========================= Pager Start ========================= */}
                    <div className="container">
                        <div className="row grants-pager-wrapper">
                            <div className="col-md-12">
                                <ul className="pager">
                                    <li className="previous">
                                        <Link href="/initiatives">
                                            <a className="grants-pager-link" >
                                                <span className="synth-up-arrow">
                                                    <img alt="Arrow" className="pager-icons" src="/img/grants/gdao-previous.svg" />
                                                </span>
                                                Back
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="next">
                                        <Link href="/initiatives">
                                            <a className="grants-pager-link" >
                                                NEXT INITIATIVE
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
                </div>


                <Footer />

            </main>
        </>
    )

}