import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import {Header} from "../../components/Header";
import {Navbar} from "../../components/Navbar";
import {Footer} from "../../components/Footer";
import {useRouter} from "next/router";

export default function GrantApplication() {
    return (
        <>

            <Head>
                <title>Home | Synthetix grantsDAO</title>
            </Head>

            <Header />

            <main>
                <Navbar />

                {/* ========================= Synthetix Grants Individual hero-section Start ========================= */}
                <section className="synth-grant-application-hero-section" id="grants">
                    <div className="container">
                        <div className="row align-items-center position-relative">
                            <div className="col-md-12">
                                <div className="hero-content grant-application-vh">
                                    <div className="synth-gdao-grants-mini-logo">
                                        <img
                                                alt="Logo"
                                                className="gdao-mini-logo"
                                                src="/img/logo/synthetix_gdao_logo_mini.svg"
                                        />
                                    </div>
                                    <h1 className="synth-grants-h wow fadeInUp" data-wow-delay=".2s">
                                        GRANT APPLICATION
                                    </h1>
                                    <p
                                            className="wow fadeInUp synth-p-opti align-center"
                                            data-wow-delay=".6s"
                                    >
                                        Need funding for a brilliant idea that benefits Synthetix?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========================= Synthetix Grants Individual hero-section Start End ========================= */}
                <div className="grants-indi-bg">
                    {/* ========================= Blue Banner Start ========================= */}
                    <div className="container-fluid synth-tab-styling">
                        <div className="indi-grants-h-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="synth-tabs">
                                            <div className="grp">GRANT REQUEST PROCESS</div>
                                            <p className="grp-p">
                                                Welcome, complete the grant proposal using the form below and
                                                submit.
                                            </p>
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
                                <div className="h4-grants-dao-descr">USERNAME</div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="sga-wrapper">
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <textarea
                                                            className="form-control"
                                                            id="username"
                                                            placeholder="Enter your username"
                                                            rows="2"
                                                            defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h4-grants-dao-descr">DESCRIPTION</div>
                                <p className="ga">Add a short description</p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="sga-wrapper">
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <textarea
                                                            className="form-control"
                                                            id="description"
                                                            placeholder="Description"
                                                            rows="2"
                                                            defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h4-grants-dao-descr">TITLE</div>
                                <p className="ga">
                                    The title should clearly and succinctly describe the project.
                                </p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="sga-wrapper">
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <textarea
                                                            className="form-control"
                                                            id="title"
                                                            placeholder="Enter your title"
                                                            rows="4"
                                                            defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h4-grants-dao-descr">OVERVIEW</div>
                                <p className="ga">
                                    The Overview section is where the the applicant should provide a
                                    high-level description of what the proposal hopes to achieve. The
                                    purpose is to describe the project and to give more color,
                                    background, and goals of the effort. A paragraph-based prose is best
                                    for this section, and it will serve as the first impression of the
                                    project.
                                </p>
                                <p>
                                    By the end of this section, the reader should be fully understand
                                    what the project will produce, as well as enough background context
                                    to understand it’s place within the broader Synthetix/crypto
                                    ecosystem. This section should avoid more mechanical information,
                                    such as in-depth outlines/timelines/funding/etc., which have their
                                    own sections later in the proposal.
                                </p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="sga-wrapper">
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <textarea
                                                            className="form-control"
                                                            id="overview"
                                                            placeholder="Add your overview"
                                                            rows="4"
                                                    defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h4-grants-dao-descr">VALUE TO SYNTHETIX</div>
                                <p className="ga">
                                    This section should describe the specific benefits that the
                                    completion of this work will bring to the Synthetix ecosystem. The
                                    grantsDAO is ultimately tasked with deploying funding for the
                                    betterment of Synthetix, and thus this section is pivotal to the
                                    justification of approval of fund disbursement. The grantsDAO should
                                    be able to turn around and use this section to explain to the SNX
                                    stakeholders what they are getting for their money.
                                </p>
                                <p>
                                    This section should avoid describing benefits other than direct
                                    value to Synthetix. If there is value to be delivered outside of SNX
                                    that the proposer feels is important to include (e.g. benefitting
                                    other DeFi projects), then that should be included in the previous
                                    Overview section.
                                </p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="sga-wrapper">
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <textarea
                                                            className="form-control"
                                                            id="value"
                                                            placeholder="Value to Synthetix"
                                                            rows="4"
                                                    defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h4-grants-dao-descr">Applicant Background</div>
                                <p className="ga">
                                    This section is where the proposer(s) should explain the skillsets
                                    and experience they possess, which justifies their ability to
                                    execute and deliver on the project they propose. Developers and
                                    designers should be able give some examples of past-work, with a
                                    brief description of their background/resume.
                                </p>
                                <p>
                                    It is important to note that being an expert in the field is not a
                                    pre-requisite for approval of a project, and should not discourage
                                    less-experienced members from applying. The important thing is to
                                    set expectations appropriately, and the grantsDAO will take into
                                    account all information presented here.
                                </p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="sga-wrapper">
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <textarea
                                                            className="form-control"
                                                            id="applicant-background"
                                                            placeholder="Your background"
                                                            rows="4"
                                                    defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h4-grants-dao-descr">PROJECT IMPLEMENTATION PLAN</div>
                                <p className="ga">
                                    This section is where the proposer will give a detailed description
                                    of the steps they will go through as well as the estimated timelines
                                    to execute and complete the proposal. The more complex (and
                                    expensive) the project, the more time one should spend compiling a
                                    solid project plan. Often, multiple phases/deliverables will be
                                    necessary, so as to provide natural checkpoints for both the
                                    proposer and the grantsDAO to ensure that the project is progressing
                                    well.
                                </p>
                                <p>
                                    It is understood that the implementation plan may need to be
                                    changed, or that some pieces cannot be fully outlined from the
                                    outset of the project. In these cases, just make note of this, and
                                    work with the grantsDAO to set expectations appropriately.
                                </p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="sga-wrapper">
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <textarea
                                                            className="form-control"
                                                            id="implementation"
                                                            placeholder="Project implementation plan"
                                                            rows="4"
                                                    defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h4-grants-dao-descr">ADDITIONAL INFORMATION</div>
                                <p className="ga">
                                    This is an optional section, for the purpose of giving more detailed
                                    data (datasets/charts/tables/etc.) which are used to justify some
                                    piece of the project, similar to an appendix. This is a better home
                                    for deeper data that does not fit cleanly alongside the other, more
                                    prose-heavy sections.
                                </p>
                                <p>
                                    For instance, if the project requires reimbursement for server
                                    hosting fees, API licenses, or SSL certificates, this would be the
                                    appropriate place to make a table that shows a breakdown of all
                                    these costs. This is also the appropriate place to give breakdowns
                                    of hourly rates if labor costs are being considered in the budget.
                                </p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="sga-wrapper">
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <textarea
                                                            className="form-control"
                                                            id="additional-information"
                                                            placeholder="Additional information"
                                                            rows="4"
                                                    defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h4-grants-dao-descr">FUNDING REQUEST</div>
                                <p className="ga">
                                    This section is where the proposer should give the overall budgetary
                                    request, as well as break down the funding to any specific phases,
                                    if applicable.
                                </p>
                                <p>
                                    As funding is often the most important and potentially contentious
                                    aspect of the agreement between the proposer and grantsDAO, the
                                    proposer should work with the grantsDAO directly prior to submitting
                                    a final proposal to come to an agreeable payment on a
                                    per-deliverable basis. The Synthetix Discord (in the #grants-dao
                                    channel) is the best place to engage with the grantsDAO to achieve
                                    this goal.
                                </p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="sga-wrapper">
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <textarea
                                                            className="form-control"
                                                            id="budget"
                                                            placeholder="Overall budgetary request information"
                                                            rows="4"
                                                    defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-align align-center col-md-2 col-sm-12">
                                    <div className="utility-btn">
                                        <a href="grant-application-thank-you.html">
                                            <button
                                                    className="vertical-align grants-apply-btn wow fadeInUp"
                                                    style={{visibility: 'visible',animationDelay: '0.6s',animationName: 'fadeInUp'}}
                                                    data-wow-delay=".6s"
                                            >
                                                SUBMIT
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* ========================= grantsDAO Introduction End ========================= */}

                <Footer />
            </main>
        </>
        )
}