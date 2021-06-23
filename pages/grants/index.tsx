import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {Header} from "../../components/Header";
import {Navbar} from "../../components/Navbar";
import {Footer} from "../../components/Footer";
import {grantsData} from "../../domainData/GrantsData";

export default function Grants() {

    let grantsRender = [] ;

    Object.entries(grantsData).forEach(([key, grant]) => grantsRender.push (
        <div className="data-wrapper">
            <div className="row">
                <div className="col-md-6 col-sm-12 data-p">
                    <div className="data-description-wrapper">
                        <Link href={'/grants/'+key}>
                            <a className="hover">
                                <h4 className="no-margin grantsdao-data-heading padding-right">
                                    {grant.title}
                                </h4>
                                <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
                                    {grant.description}
                                    <span className="sm-font synth-blue bold">View Details</span>
                                </p>
                            </a>
                        </Link>
                    </div>
                    <div className="request-details-wrapper">
                        <span className="sm-font no-margin bio-info"><span className="bio-info">Requested by</span> <span className="bio-info synth-blue">{grant.requesterBy}</span> in <span className="sm-font bio-info synth-pink">Grants</span> <span className="sm-font bio-info">on <span className="synth-blue">{grant.requestedDate}</span></span></span>
                    </div>
                </div>
                <div className="vertical-align align-center col-md-1 col-sm-12 votes">
                    {grant.votes}
                </div>
                <div className="vertical-align align-center col-md-3 col-sm-12">
                    {grant.budget}
                </div>
                <div className="vertical-align align-center col-md-2 col-sm-12">
                    <div className="voting-wrapper">
                        <div className="vertical-align grants-applied">
                            {grant.status}
                        </div>
                    </div>
                </div>
            </div>
            {/* ========================= Repeat Data End ========================= */}
            <div className="soft-divider">
            </div>
        </div>

    ));

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

                                {grantsRender}

                                {/* ========================= Data End ========================= */}
                            </div>
                        </div>
                        {/* All data end*/}

                    </div>
                    {/* Tab panes End*/}
                </div>

                <Footer />

            </main>
        </>
    )

}