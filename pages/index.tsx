import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Synthetix grantsDAO</title>
      </Head>

      <Header />

      <main>
        <Navbar />

        {/* ========================= Synthetix hero-section start ========================= */}
        <section
          className="synth-landing-hero synth-hero-section"
          id="home"
        ></section>
        <section className="feature-section" id="features">
          <div className="container">
            <div className="row align-items-center position-relative">
              <div className="hero-content synth-vh home-hero-content">
                <div className="col-md-12">
                  <div className="synth-gdao-grants-mini-logo">
                    <img
                      alt="Logo"
                      className="gdao-mini-logo"
                      src="/img/logo/synthetix_gdao_logo_mini.svg"
                    />
                  </div>
                  <h1
                    className="synth-hero-h-index wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <span className="synth-g">g</span>rantsDAO
                  </h1>
                  <p
                    className="wow fadeInUp synth-p-opti align-center"
                    data-wow-delay=".2s"
                  >
                    Synthetix grantsDAO is a decentralized organization part of
                    the the Synthetix protocol that governs the process of
                    funding projects that contribute to the adoption of
                    Synthetix.
                  </p>
                </div>
                <div className="col-md-12 index-btn-wrapper">
                  <span className="synth-hero-btn">
                    <Link href="/grants/grant-application">
                      <a
                        className="hero-btn wow fadeInUp"
                        data-wow-delay=".2s"
                        rel="nofollow"
                      >
                        <img
                          alt="Apply for a Grant"
                          className="join-innitiative-btn"
                          src="/img/buttons/grant-application-btn.png"
                        />
                      </a>
                    </Link>
                  </span>
                  <span className="synth-hero-btn">
                    <img
                      alt="Join an Initiative"
                      className="apply-for-grant-btn"
                      src="/img/buttons/join-initiative-btn.png"
                      style={{ cursor: "not-allowed", opacity: 0.3 }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 synth-align-center">
                <p
                  className="wow fadeInUp synth-p-opti align-center"
                  data-wow-delay=".2s"
                >
                  The grantsDAO is responsible for managing grants and leading
                  initiatives.
                  <br />
                  The scope of managing grants includes:
                </p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-10">
                <div className="single-feature">
                  <div className="icon">
                    <img
                      alt="Identify Opportunities"
                      className="synth-home-icon-img"
                      src="/img/home/synth_io_icon.png"
                    />
                  </div>
                  <div className="content">
                    <h3>Identify Opportunities</h3>
                    <p>
                      Find resources and opportunities to help grow Synthetix.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-10">
                <div className="single-feature">
                  <div className="icon">
                    <img
                      alt="Guiding Applicants"
                      className="synth-home-icon-img"
                      src="/img/home/synth_ga_icon.png"
                    />
                  </div>
                  <div className="content">
                    <h3>Guiding Applicants</h3>
                    <p>Through the required processes and protocols.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-10">
                <div className="single-feature">
                  <div className="icon">
                    <img
                      alt="Interviewing Applicants"
                      className="synth-home-icon-img"
                      src="/img/home/synth_ia_icon.png"
                    />
                  </div>
                  <div className="content">
                    <h3>Interviewing Applicants</h3>
                    <p>And evaluating proposals for granting purposes.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-10">
                <div className="single-feature">
                  <div className="icon">
                    <img
                      alt="Voting on Proposals"
                      className="synth-home-icon-img"
                      src="/img/home/synth_vp_icon.png"
                    />
                  </div>
                  <div className="content">
                    <h3>Voting on Proposals</h3>
                    <p>And distributing approved funds to grantees.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================= Feaure Section End ========================= */}
        {/* ========================= Section 3 ========================= */}
        <section className="synth-section3" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12">
                <div className="synth-proto-img">
                  <img
                    alt="Synthetix Protocol"
                    className="synth-proto wow fadeInUp"
                    data-wow-delay=".2s"
                    src="/img/home/synth-protocol.svg"
                  />
                </div>
                <p className="wow fadeInUp synth-proto-p" data-wow-delay=".2s">
                  The grantsDAO consists of five community and team members who
                  will review proposals for SNX grants that contribute to the
                  project. This is a huge milestone for the project as it marks
                  the first phase of the transition to decentralised governance.
                </p>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <h3 className="synth-proto-excerpt">
                    part of the greater Distributed Decentralised Autonomous
                    Organisations responsible for the well being, growth and
                    adoption of the Synthetix protocol.
                  </h3>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12 col-lg-6">
                  <div className="s">
                    <img
                      alt="Synth car"
                      className="synth-car wow fadeInRight"
                      data-wow-delay=".2s"
                      src="/img/home/synth-retro-car.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================= Section 3 End ========================= */}
        {/* ========================= Process Start ========================= */}
        <section className="process-section">
          <div className="synth-scenery-img-left">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-md-6 col-sm-12 col-lg-6">
                  <div className="scenery-wrapper">
                    <img
                      alt="Synth Scenery"
                      className="synth-process-scenery wow fadeInLeft"
                      data-wow-delay=".2s"
                      src="/img/home/synth-process-scenery.png"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 order-first order-lg-last">
                  <div className="synth-process-content">
                    <div className="section-title mb-30">
                      <h2
                        className="synth-process-h fadeInUp"
                        data-wow-delay=".2s"
                      >
                        THE PROCESS
                      </h2>
                    </div>
                    <ul>
                      <li className="process-li">
                        Follow the link and go to the GRANTS page
                      </li>
                      <li className="process-li">
                        {'Click on the "APPLY FOR GRANT" button'}
                      </li>
                      <li className="process-li">
                        Fill in the TITLE & DESCRIPTION
                      </li>
                      <li className="process-li">
                        Ensure you cover all the following sections:
                      </li>
                      <li className="process-li li-ml">Overview</li>
                      <li className="process-li li-ml">
                        Value to the Synthetix Protocol or Community
                      </li>
                      <li className="process-li li-ml">Applicant Background</li>
                      <li className="process-li li-ml">Implementation Plan</li>
                      <li className="process-li li-ml">
                        Additional Information
                      </li>
                      <li className="process-li li-ml">
                        Funding Required ($ Value)
                      </li>
                      <li className="process-li">
                        This will automatically create a Snapshot where the
                        grantsDAO members will vote on the Application after
                        deliberations.
                      </li>
                      <li className="process-li">
                        A 3/5 YES vote will mean the Grant has been approved.
                      </li>
                      <p>
                        NOTE: This is Version 1 of our site. We will be rolling
                        out regular enhancements on how we technically manage
                        the Grant application process and introduce our smart
                        contract.
                      </p>
                    </ul>
                    <div className="synth-grants-btn">
                      <Link href="/grants">
                        <a
                          className="process-btn wow fadeInUp"
                          data-wow-delay=".2s"
                          rel="nofollow"
                        >
                          <img
                            alt="Apply for a Grant"
                            className="synth-grant-btn"
                            src="/img/buttons/grants-btn.png"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================= Process End ========================= */}
        {/* ========================= Members Section ========================= */}
        {/* <section className="grants-members-section">
                  <div className="grants-members-section-wrapper">
                      <div className="container">
                          <div className="row justify-content-center">
                              <div className="col-md-12">
                                  <div className="section-title text-center">
                                      <h2 className="synth-members-h fadeInUp" data-wow-delay=".2s">
                                          MEMBERS
                                      </h2>
                                      <p className="wow fadeInUp synth-members-p" data-wow-delay=".2s">
                                          The current grantsDAO members are the following:
                                      </p>
                                      <img alt="Grant Members" className="synthetic-grant-members-img wow fadeInUp" data-wow-delay=".2s" src="/img/home/synth-grant-members.png" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section> */}
        {/* ========================= Members Section end ========================= */}
        {/* ========================= Treasury Section ========================= */}
        <section className="treasury-section">
          <div className="treasury-section-wrapper">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <h2
                    className="synth-treasury-h fadeInUp"
                    data-wow-delay=".2s"
                  >
                    TREASURY
                  </h2>
                </div>
                <div className="col-md-6">
                  <div className="section-title">
                    <p
                      className="synth-space wow fadeInUp synth-proto-p"
                      data-wow-delay=".2s"
                    >
                      The twin purpose of setting up the grantsDAO is to provide
                      greater transparency and decentralisation to the project.
                      All proposals will be available for public viewing at
                      snxgrants.io, meaning the community will be able to see at
                      a glance all the proposals that have been accepted and
                      rejected, as well as any that are pending.
                    </p>
                    <p
                      className="synth-space wow fadeInUp synth-proto-p"
                      data-wow-delay=".2s"
                    >
                      These members were determined by rough consensus through
                      our Discord community. In the near future we will look to
                      expand the number of members via community consensus.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section-title">
                    <p
                      className="synth-space wow fadeInUp synth-proto-p"
                      data-wow-delay=".2s"
                    >
                      Potential initiatives that could be proposed to the DAO
                      include infrastructure, promotional content, and dApp
                      front-end hosting. But don’t be locked in by these
                      suggestions — anything that contributes to the Synthetix
                      ecosystem is worth a proposal!
                    </p>
                  </div>
                  <div className="synth-treasury-btn-wrapper">
                    <Link href="/treasury">
                      <a
                        className="process-btn wow fadeInUp"
                        data-wow-delay=".2s"
                        rel="nofollow"
                      >
                        <img
                          alt="Go To Treasury"
                          className="synth-treasury-btn"
                          src="/img/buttons/treasury-btn.png"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================= Treasury Section end ========================= */}

        <Footer />
      </main>
    </>
  );
}
