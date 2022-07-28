import Head from "next/head";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import useCurrentCouncilNew from "../../queries/useCurrentCouncil";
import { getEtherscanLink, truncateAddress } from "../../utils/wallet";

export default function Voting() {
  const currentCouncilNewQuery = useCurrentCouncilNew();

  const renderAddressRows = currentCouncilNewQuery.data?.results.map(
    (member, i, arr) => {
      const isLast = i === arr.length - 1;

      return (
        <div
          key={member.username}
          className={`voter-wrapper${isLast ? "-last" : ""}`}
        >
          <div className="row">
            <div className="col-md-1">
              <div
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: "50%",
                  border: "2px solid #29b6af",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  alt="Avatar"
                  className="member-avatar"
                  src="/img/blue-x.png"
                  style={{ transform: "scale(0.7)" }}
                />
              </div>
            </div>
            <div className="col-md-5 col-sm-12 vertical-align">
              <a href={getEtherscanLink(member.address)}>
                <h4 className="member-acc-nr no-margin grantsdao-data-heading padding-right">
                  {member.ens ? member.ens : truncateAddress(member.address)}
                </h4>
              </a>
            </div>
            <div className="align-center col-md-3 col-sm-12 vertical-align">
              {member.username}
            </div>
            <div className="align-center col-md-3 col-sm-12 vertical-align">
              <div className="utility-btn">
                <div>
                  <div className="vertical-align member-votes">
                    {member.score.toFixed(2)} Votes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
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
        <section className="synth-voting-hero-section" id="voting" />
        {/* ========================= Synthetix hero-section end ========================= */}
        <div className="voting-bg">
          <div className="container">
            <div className="row align-items-center position-relative">
              <div className="hero-content synth-vh voting-hero-content">
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
                      Current Members
                    </div>
                  </div>
                  <div className="vertical-align align-center col-md-6 col-sm-12">
                    <div className="epoch">
                      {!currentCouncilNewQuery.data ? (
                        "Loading"
                      ) : (
                        <>
                          <span className="synth-h-start">Start: </span>
                          {currentCouncilNewQuery.data.startDate.toLocaleDateString()}
                          -<span className="synth-h-end">End: </span>{" "}
                          {currentCouncilNewQuery.data.endDate.toLocaleDateString()}
                        </>
                      )}
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
                {renderAddressRows}
              </div>
            </div>
          </div>
          {/* End Current Members*/}
        </div>

        <Footer />
      </main>
    </>
  );
}
