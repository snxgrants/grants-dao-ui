import Head from "next/head";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { competitionsData } from "../../domainData/CompetitionsData";

export default function Competitions() {
  let competitionsRender = Object.entries(competitionsData).map(
    ([key, competition]) => (
      <div key={key} className="data-wrapper">
        <div className="row">
          <div className="col-md-6 col-sm-12 data-p">
            <div className="data-description-wrapper">
              <Link href={"/competitions/" + key}>
                <a className="hover">
                  <h4 className="no-margin grantsdao-data-heading padding-right">
                    {competition.title}
                  </h4>
                  <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
                    {competition.description}
                    <span className="sm-font synth-blue bold">
                      View Details
                    </span>
                  </p>
                </a>
              </Link>
            </div>
            <div className="request-details-wrapper">
              <span className="sm-font no-margin bio-info">
                <span className="bio-info">Initiated by</span>
                <span className=" bio-info synth-blue">
                  {competition.requestedBy}
                </span>
                in
                <span className="sm-font bio-info synth-pink">
                  Competitions
                </span>
                <span className="sm-font bio-info">
                  on
                  <span className="synth-blue">{competition.startDate}</span>
                </span>
              </span>
            </div>
          </div>
          <div className="vertical-align align-center col-md-2 col-sm-12 votes">
            {competition.participants}
          </div>
          <div className="vertical-align align-center col-md-2 col-sm-12">
            {competition.budget}
          </div>
          <div className="vertical-align align-center col-md-2 col-sm-12">
            <div className="voting-wrapper">
              <div className="vertical-align grants-active">
                {competition.status}
              </div>
            </div>
          </div>
        </div>
        {/* ========================= Repeat Data End ========================= */}
        <div className="soft-divider" />
      </div>
    )
  );

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
                    <img
                      alt="Logo"
                      className="gdao-mini-logo"
                      src="/img/logo/synthetix_gdao_logo_mini.svg"
                    />
                  </div>
                  <h1
                    className="synth-grants-h wow fadeInUp animated"
                    data-wow-delay=".2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInUp",
                    }}
                  >
                    Competitions
                  </h1>
                  <p
                    className="wow fadeInUp synth-p-opti align-center"
                    data-wow-delay=".6s"
                  >
                    New Competitions posted weekly by the Spartan Council. Enter
                    one of our competitions and win great prizes.
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
              <div className="col-md-12"></div>
            </div>
          </div>
          {/* ========================= Divider End ========================= */}
          {/* ========================= Competitions Data ========================= */}
          {/* Nav tabs Start*/}
          <div className="container-fluid synth-tab-styling">
            <div className="filter-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-md-10">
                    <div className="synth-tabs">
                      <ul
                        className="tabs nav nav-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <div
                            aria-controls="home"
                            aria-selected="true"
                            className="nav-link active"
                            data-bs-target="#all"
                            data-bs-toggle="tab"
                            id="home-tab"
                            role="tab"
                          >
                            All
                          </div>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            aria-controls="active"
                            aria-selected="false"
                            className="nav-link"
                            data-bs-target="#active"
                            data-bs-toggle="tab"
                            id="active-tab"
                            role="tab"
                            type="button"
                          >
                            Active
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            aria-controls="completed"
                            aria-selected="false"
                            className="nav-link"
                            data-bs-target="#completed"
                            data-bs-toggle="tab"
                            id="completed-tab"
                            role="tab"
                            type="button"
                          >
                            Completed
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            aria-controls="completed"
                            aria-selected="false"
                            className="nav-link"
                            data-bs-target="#cancelled"
                            data-bs-toggle="tab"
                            id="cancelled-tab"
                            role="tab"
                            type="button"
                          >
                            Cancelled
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="vertical-align align-center col-md-2 col-sm-12">
                    <div>
                      <Link href="/grants/grant-application">
                        <a>
                          <div
                            className="vertical-align initiatives-active-btn wow fadeInUp"
                            data-wow-delay=".6s"
                            style={{
                              visibility: "visible",
                              animationDelay: "0.6s",
                              animationName: "fadeInUp",
                            }}
                          >
                            5 ACTIVE Competitions
                          </div>
                        </a>
                      </Link>
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
            <div
              aria-labelledby="all-tab"
              className="tab-pane fade show active"
              id="all"
              role="tabpanel"
            >
              {/* ========================= Tabs Content Start========================= */}
              <div className="container">
                <div className="heading-wrapper">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 active-tab-header">
                      Competitions - ALL
                    </div>
                    <div className="data-header align-center col-md-2 col-sm-12">
                      PARTICIPANTS{" "}
                      <span className="synth-up-arrow">
                        <img
                          alt="Arrow"
                          className="custom-icons"
                          src="/img/grants/down-arrow.svg"
                        />
                      </span>
                    </div>
                    <div className="data-header align-center col-md-2 col-sm-12">
                      AMOUNT{" "}
                      <span className="synth-up-arrow">
                        <img
                          alt="Arrow"
                          className="custom-icons"
                          src="/img/grants/down-arrow.svg"
                        />
                      </span>
                    </div>
                    <div className="data-header align-center col-md-2 col-sm-12">
                      STATUS{" "}
                      <span className="synth-up-arrow">
                        <img
                          alt="Arrow"
                          className="custom-icons"
                          src="/img/grants/down-arrow.svg"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========================= Tab Data Headings End========================= */}
              {/* ========================= Tabs Data Start .========================= */}
              <div className="container">
                {/* ========================= Repeat Data Start ========================= */}
                {/* ========================= Data Wrapper Start ========================= */}

                {competitionsRender}

                {/* ========================= Data Wrapper End ========================= */}
              </div>
              {/* ========================= Tabs All Data End========================= */}
              {/* =========================  Tabs End========================= */}
            </div>
            {/* All data end*/}

            {/* Completed start*/}
            <div
              aria-labelledby="cancelled-tab"
              className="tab-pane fade"
              id="cancelled"
              role="tabpanel"
            >
              <div className="container">
                <div className="heading-wrapper">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 active-tab-header">
                      Competitions - CANCELLED
                    </div>
                    <div className="data-header align-center col-md-2 col-sm-12">
                      PARTICIPANTS{" "}
                      <span className="synth-up-arrow">
                        <img
                          alt="Arrow"
                          className="custom-icons"
                          src="/img/grants/down-arrow.svg"
                        />
                      </span>
                    </div>
                    <div className="data-header align-center col-md-2 col-sm-12">
                      AMOUNT{" "}
                      <span className="synth-up-arrow">
                        <img
                          alt="Arrow"
                          className="custom-icons"
                          src="/img/grants/down-arrow.svg"
                        />
                      </span>
                    </div>
                    <div className="data-header align-center col-md-2 col-sm-12">
                      STATUS{" "}
                      <span className="synth-up-arrow">
                        <img
                          alt="Arrow"
                          className="custom-icons"
                          src="/img/grants/down-arrow.svg"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                {/* ========================= Tab Data Headings End========================= */}
              </div>
            </div>
            {/* Completed data end*/}
          </div>
          {/* Tab panes End*/}
        </div>

        <Footer />
      </main>
    </>
  );
}

