import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { useRouter } from "next/router";

const GrantApplication = () => {
  const [grantsTitle, setGrantsTitle] = useState<string>("");
  const [grantsDescription, setGrantsDescription] = useState<string>("");

  const canSubmit = !!grantsTitle && !!grantsDescription;

  const handleSubmit = async () => {
    console.log("yo");
  };

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
                  <h1
                    className="synth-grants-h wow fadeInUp"
                    data-wow-delay=".2s"
                  >
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
                        Welcome, complete the grant proposal using the form
                        below and submit.
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
                            value={grantsTitle}
                            onChange={(e) => setGrantsTitle(e.target.value)}
                            className="form-control"
                            id="title"
                            placeholder="Enter your title"
                            rows="2"
                            defaultValue=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h4-grants-dao-descr">DESCRIPTION</div>
                <p className="ga">
                  The Overview section is where the the applicant should provide
                  a high-level description of what the proposal hopes to
                  achieve. The purpose is to describe the project and to give
                  more color, background, and goals of the effort. A
                  paragraph-based prose is best for this section, and it will
                  serve as the first impression of the project.
                </p>
                <div className="row">
                  <div className="col-md-12">
                    <div className="sga-wrapper">
                      <div className="form-group">
                        <div className="col-sm-12">
                          <textarea
                            value={grantsDescription}
                            onChange={(e) =>
                              setGrantsDescription(e.target.value)
                            }
                            className="form-control"
                            id="description"
                            placeholder="Description"
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
                    {/* <a href="grant-application-thank-you.html"> */}
                    <button
                      disabled={!canSubmit}
                      onClick={handleSubmit}
                      className="vertical-align grants-apply-btn wow fadeInUp"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.6s",
                        animationName: "fadeInUp",
                      }}
                      data-wow-delay=".6s"
                    >
                      SUBMIT
                    </button>
                    {/* </a> */}
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
  );
};

export default GrantApplication;
