import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Moment from "react-moment";

import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

import useGetSnapshotSpace from "../../queries/useGetSnapshotSpace";
import useGetSnapshotProposals from "../../queries/useGetSnapshotProposals";
import useGetSnapshotVotes from "../../queries/useGetSnapshotVotes";
import { useState } from "react";

const Grants = () => {
  const statuses = ["all", "active", "closed"];
  const [currentStatus, setCurrentStatus] = useState("all");

  const snapshotSpaceQuery = useGetSnapshotSpace();
  const space = snapshotSpaceQuery?.data;

  const snapshotProposalsQuery = useGetSnapshotProposals();
  const proposals = snapshotProposalsQuery?.data ?? null;
  const proposalIds =
    proposals && proposals.length > 0 ? proposals.map(({ id }) => id) : null;

  const snapshotVotesQuery = useGetSnapshotVotes(proposalIds);
  const votes = snapshotVotesQuery?.data;

  useEffect(() => {
    console.log(votes);
  }, [votes]);

  let statusesRender = Object.entries(statuses).map(([key, statusItem]) => {
    return (
      <li key={key} className="nav-item" role="presentation">
        <div
          aria-controls={statusItem}
          aria-selected={currentStatus === statusItem ? "true" : "false"}
          className={
            "nav-link " + (currentStatus === statusItem ? "active" : "")
          }
          data-bs-target={"#" + statusItem}
          data-bs-toggle="tab"
          id={statusItem + "-tab"}
          role="tab"
          style={{ cursor: "pointer" }}
          onClick={() => setCurrentStatus(statusItem)}
        >
          {statusItem}
        </div>
      </li>
    );
  });

  let grantsRender: JSX.Element[] = [];

  if (proposals) {
    var proposalsFiltered = proposals.filter(
      (item) => currentStatus === "all" || item.state === currentStatus
    );

    // let voteCount = 3; //votes[proposal.id].length;

    grantsRender = Object.entries(proposalsFiltered).map(([key, proposal]) => {
      let voteCount =
        votes && votes[proposal.id]
          ? Object.keys(votes[proposal.id]).length
          : 0;
      return (
        <div key={key} className="data-wrapper">
          <div className="row">
            <div className="col-md-6 col-sm-12 data-p">
              <div className="data-description-wrapper">
                <Link href={"/grants/" + proposal.id}>
                  <a className="hover">
                    <h4 className="no-margin grantsdao-data-heading padding-right">
                      {proposal.title}
                    </h4>
                    <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
                      {proposal.body}
                      <span className="sm-font synth-blue bold">
                        {" "}
                        View Details
                      </span>
                    </p>
                  </a>
                </Link>
              </div>
              <div className="request-details-wrapper">
                <span className="sm-font no-margin bio-info">
                  <span className="bio-info"> Requested by </span>
                  <span className="bio-info synth-blue">
                    {" "}
                    {proposal.author}{" "}
                  </span>{" "}
                  in
                  <span className="sm-font bio-info synth-pink"> Grants </span>
                  <span className="sm-font bio-info">
                    on{" "}
                    <span className="synth-blue">
                      <Moment unix date={proposal.start} format="D MMM YYYY" />
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <div className="vertical-align align-center col-md-1 col-sm-12 votes">
              {voteCount}
            </div>
            <div className="vertical-align align-center col-md-3 col-sm-12">
              <Moment unix date={proposal.end} format="D MMM YYYY" />
            </div>
            <div className="vertical-align align-center col-md-2 col-sm-12">
              <div className="voting-wrapper">
                <div className="vertical-align grants-applied">
                  {proposal.state}
                </div>
              </div>
            </div>
          </div>
          {/* ========================= Repeat Data End ========================= */}
          <div className="soft-divider"></div>
        </div>
      );
    });
  }

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
                    GRANTS
                  </h1>
                  <p
                    className="wow fadeInUp synth-p-opti align-center"
                    data-wow-delay=".6s"
                  >
                    Synthetix GrantsDAO is a decentrailzed organisation part of
                    the Synthetix protocol that governs the process of funding
                    projects that contribute to the adoption of Synthetix.
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
                <div className="synth-divider"></div>
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
                      <ul
                        className="tabs nav nav-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        {statusesRender}
                      </ul>
                    </div>
                  </div>
                  <div className="vertical-align align-center col-md-2 col-sm-12">
                    <div className="utility-btn">
                      <Link href="/grants/grant-application">
                        <a>
                          <button
                            className="vertical-align grants-apply-btn wow fadeInUp"
                            data-wow-delay=".6s"
                            style={{
                              visibility: "visible",
                              animationDelay: "0.6s",
                              animationName: "fadeInUp",
                            }}
                          >
                            APPLY FOR GRANT
                          </button>
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
              <div className="container">
                <div className="heading-wrapper">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 active-tab-header">
                      GRANTS - ALL
                    </div>
                    <div className="data-header align-center col-md-1 col-sm-12">
                      VOTES{" "}
                      <span className="synth-up-arrow">
                        <img
                          alt="Arrow"
                          className="custom-icons"
                          src="/img/grants/down-arrow.svg"
                        />
                      </span>
                    </div>
                    <div className="data-header align-center col-md-3 col-sm-12">
                      DUE{" "}
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
                {/* ========================= Repeat Data Start ========================= */}
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
  );
};

export default Grants;
