import { useMemo } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import useGetGnosisBalances from "../../queries/useGetGnosisBalances";
import { parseGnosisBalances } from "../../utils/balances";

export default function Treasury() {
  const gnosisBalancesData = useGetGnosisBalances();
  const data = gnosisBalancesData?.data;

  const parsedBalanceData = useMemo(
    () => parseGnosisBalances((data as any) || []),
    [data]
  );

  const renderBalances = useMemo(() => {
    return Object.entries(parsedBalanceData).map(([key, value]) => (
      <div key={key} className="col-md-3">
        <div className="vertical-align treasury-snx">
          {value} {key}
        </div>
      </div>
    ));
  }, [parsedBalanceData]);

  return (
    <>
      <Head>
        <title>Home | Synthetix grantsDAO</title>
      </Head>

      <Header />

      <main>
        <Navbar />

        {/* ========================= Synthetix hero-section start ========================= */}
        <section className="synth-treasury-hero-section" id="grants">
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
                    TREASURY
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
        <div className="treasury-bg">
          <div className="padding-top">
            <div className="container-fluid synth-tab-styling">
              <div className="treasury-header-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="synth-tabs">
                        <div className="align-center current-balance-h">
                          CURRENT BALANCE
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 max-width">
                <div className="row">{renderBalances}</div>
              </div>
            </div>
          </div>
          {/* ========================= grantsDAO Data ========================= */}
          {/* Nav tabs Start*/}
          {/* Tab panes End*/}
        </div>

        <Footer />
      </main>
    </>
  );
}

// NOTE:
// This comment goes between lines 98 and 99.
// It was extracted here, since we need to keep the code,
// but JSX comments don't allow us to have nested comments.

//   <div className="container-fluid synth-tab-styling">
//     <div className="filter-wrapper device-margin">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-10">
//             <div className="synth-tabs">
//               <ul
//                 className="tabs nav nav-tabs"
//                 id="myTab"
//                 role="tablist"
//               >
//                 <li className="nav-item" role="presentation">
//                   <div
//                     aria-controls="home"
//                     aria-selected="true"
//                     className="nav-link active"
//                     data-bs-target="#all"
//                     data-bs-toggle="tab"
//                     id="home-tab"
//                     role="tab"
//                   >
//                     All
//                   </div>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     aria-controls="completed"
//                     aria-selected="false"
//                     className="nav-link"
//                     data-bs-target="#completed"
//                     data-bs-toggle="tab"
//                     id="completed-tab"
//                     role="tab"
//                     type="button"
//                   >
//                     Grants
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     aria-controls="cancelled"
//                     aria-selected="false"
//                     className="nav-link"
//                     data-bs-target="#initiatives"
//                     data-bs-toggle="tab"
//                     id="cancelled-tab"
//                     role="tab"
//                     type="button"
//                   >
//                     Initiatives
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     aria-controls="cancelled"
//                     aria-selected="false"
//                     className="nav-link"
//                     data-bs-target="#competitions"
//                     data-bs-toggle="tab"
//                     id="competitions-tab"
//                     role="tab"
//                     type="button"
//                   >
//                     Competitions
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     aria-controls="other"
//                     aria-selected="false"
//                     className="nav-link"
//                     data-bs-target="#other"
//                     data-bs-toggle="tab"
//                     id="other-tab"
//                     role="tab"
//                     type="button"
//                   >
//                     Other
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="vertical-align align-center col-md-2 col-sm-12">
//             {/*
// 						<div class="utility-btn">
// 							<a href="grant-application.html"><button class="vertical-align grants-apply-btn wow fadeInUp" data-wow-delay=".6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">Call To Action</button></a>
// 						</div>
//               */}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* Nav tabs end*/}
//   {/* Tab panes Start*/}
//   <div className="tab-content" id="myTabContent">
//     {/* All Start*/}
//     <div
//       aria-labelledby="all-tab"
//       className="tab-pane fade show active"
//       id="all"
//       role="tabpanel"
//     >
//       <div className="container">
//         <div className="heading-wrapper">
//           <div className="row">
//             <div className="col-md-6 col-sm-12 active-tab-header">
//               PAYMENT TRANSACTION HISTORY - ALL
//             </div>
//             <div className="data-header align-center col-md-1 col-sm-12" />
//             <div className="data-header align-center col-md-3 col-sm-12">
//               AMOUNT{" "}
//               <span className="synth-up-arrow">
//                 <img
//                   alt="Arrow"
//                   className="custom-icons"
//                   src="/img/grants/down-arrow.svg"
//                 />
//               </span>
//             </div>
//             <div className="data-header align-center col-md-2 col-sm-12">
//               STATUS{" "}
//               <span className="synth-up-arrow">
//                 <img
//                   alt="Arrow"
//                   className="custom-icons"
//                   src="/img/grants/down-arrow.svg"
//                 />
//               </span>
//             </div>
//           </div>
//         </div>
//         {/* ========================= Tab Data Headings End========================= */}
//         {/* ========================= Repeat Data Start ========================= */}
//         {/* ========================= Data Start ========================= */}
//         {/* ========================= Data Wrapper Start ========================= */}
//         <div className="data-wrapper">
//           <div className="row">
//             <div className="col-md-6 col-sm-12 data-p">
//               <div className="data-description-wrapper">
//                 <a
//                   className="hover"
//                   href="grant-application-gnosis-safe-sponsoring.html"
//                 >
//                   <h4 className="no-margin grantsdao-data-heading padding-right">
//                     Gnosis Safe Sponsoring
//                   </h4>
//                   <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
//                     Coinbase is one of the main Cryptocurrency
//                     spot-trading exchanges out there. San Fransisco
//                     based Coinbase was founded in June 2012. Coinbase
//                     provides a digital currency wallet...{" "}
//                     <span className="sm-font synth-blue bold">
//                       View Details
//                     </span>
//                   </p>
//                 </a>
//               </div>
//               <div className="request-details-wrapper">
//                 <span className="request no-margin bio-info">
//                   <span className="bio-info">Requested by</span>{" "}
//                   <span className="bio-info synth-blue">GS</span> in{" "}
//                   <span className="bio-info synth-pink">Grants</span>{" "}
//                   <span className="sm-font bio-info">
//                     on <span className="synth-blue">23 April 2021</span>
//                   </span>
//                 </span>
//               </div>
//               <div className="request-details-wrapper">
//                 <span className="request no-margin bio-info">
//                   <span className="bio-info">Transaction ID</span>
//                   <span className="bio-info synth-blue">
//                     {" "}
//                     xxxxxxxxxxx
//                   </span>
//                 </span>
//               </div>
//             </div>
//             <div className="vertical-align align-center col-md-1 col-sm-12"></div>
//             <div className="vertical-align align-center col-md-3 col-sm-12">
//               1500 SNX
//             </div>
//             <div className="vertical-align align-center col-md-2 col-sm-12">
//               <div className="utility-btn vertical-align">
//                 <div className="voting-wrapper">
//                   <div className="grants-completed">COMPLETED</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ========================= Repeat Data End ========================= */}
//           <div className="soft-divider"></div>
//         </div>
//         {/* ========================= Data Wrapper End ======================= == */}
//         {/* ========================= Data Wrapper Start ========================= */}
//         <div className="data-wrapper">
//           <div className="row">
//             <div className="col-md-6 col-sm-12 data-p">
//               <div className="data-description-wrapper">
//                 <a className="hover" href="initiatives-individual.html">
//                   <h4 className="no-margin grantsdao-data-heading padding-right">
//                     Debt Hedging Zaps
//                   </h4>
//                   <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
//                     Coinbase is one of the main Cryptocurrency
//                     spot-trading exchanges out there. San Fransisco
//                     based Coinbase was founded in June 2012. Coinbase
//                     provides a digital currency wallet service and a
//                     platform..{" "}
//                     <span className="sm-font synth-blue bold">
//                       View Details
//                     </span>
//                   </p>
//                 </a>
//               </div>
//               <div className="request-details-wrapper">
//                 <span className="request no-margin bio-info">
//                   <span className="bio-info">Initiated by</span>{" "}
//                   <span className=" bio-info synth-blue">
//                     ΔLΞXΔNDΞR
//                   </span>{" "}
//                   in{" "}
//                   <span className="bio-info synth-pink">
//                     Initiatives
//                   </span>{" "}
//                   <span className="sm-font bio-info">
//                     on <span className="synth-blue">23 April 2021</span>
//                   </span>
//                 </span>
//               </div>
//               <div className="request-details-wrapper">
//                 <span className="request no-margin bio-info">
//                   <span className="bio-info">Transaction ID</span>
//                   <span className="bio-info synth-blue">
//                     {" "}
//                     xxxxxxxxxxx
//                   </span>
//                 </span>
//               </div>
//             </div>
//             <div className="col-md-1" />
//             <div className="vertical-align align-center col-md-3 col-sm-12">
//               800 SNX
//             </div>
//             <div className="vertical-align align-center col-md-2 col-sm-12">
//               <div className="utility-btn vertical-align">
//                 <div className="voting-wrapper">
//                   <div className="grants-completed">COMPLETED</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ========================= Repeat Data End ========================= */}
//           <div className="soft-divider" />
//         </div>
//         {/* ========================= Data Wrapper End ========================= */}
//         {/* ========================= Data Wrapper Start ========================= */}
//         <div className="data-wrapper">
//           <div className="row">
//             <div className="col-md-6 col-sm-12 data-p">
//               <div className="data-description-wrapper">
//                 <a
//                   className="hover"
//                   href="Competitions-individual.html"
//                 >
//                   <h4 className="no-margin grantsdao-data-heading padding-right">
//                     Meme Site Design and Build: Multi Asset v2
//                   </h4>
//                   <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
//                     Coinbase is one of the main Cryptocurrency
//                     spot-trading exchanges out there. San Fransisco
//                     based Coinbase was founded in June 2012. Coinbase
//                     provides a digital currency wallet service and a
//                     platform..{" "}
//                     <span className="sm-font synth-blue bold">
//                       View Details
//                     </span>
//                   </p>
//                 </a>
//               </div>
//               <div className="request-details-wrapper">
//                 <span className="request no-margin bio-info">
//                   <span className="bio-info">initiated by</span>{" "}
//                   <span className=" bio-info synth-blue">david</span> in{" "}
//                   <span className="bio-info synth-pink">
//                     Competitions
//                   </span>{" "}
//                   <span className="sm-font bio-info">
//                     on <span className="synth-blue">23 April 2021</span>
//                   </span>
//                 </span>
//               </div>
//               <div className="request-details-wrapper">
//                 <span className="request no-margin bio-info">
//                   <span className="bio-info">Transaction ID</span>
//                   <span className="bio-info synth-blue">
//                     {" "}
//                     xxxxxxxxxxx
//                   </span>
//                 </span>
//               </div>
//             </div>
//             <div className="vertical-align align-center col-md-2 col-sm-12"></div>
//             <div className="vertical-align align-center col-md-2 col-sm-12">
//               800 SNX
//             </div>
//             <div className="vertical-align align-center col-md-2 col-sm-12">
//               <div className="utility-btn vertical-align">
//                 <div className="voting-wrapper">
//                   <div className="grants-completed">COMPLETED</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ========================= Repeat Data End ========================= */}
//           <div className="soft-divider" />
//         </div>
//         {/* ========================= Data Wrapper End ========================= */}
//       </div>
//     </div>
//     {/* All data end*/}
//     {/* Grants Start*/}
//     <div
//       aria-labelledby="completed-tab"
//       className="tab-pane fade"
//       id="completed"
//       role="tabpanel"
//     >
//       <div className="container">
//         <div className="heading-wrapper">
//           <div className="row">
//             <div className="col-md-6 col-sm-12 active-tab-header">
//               PAYMENT TRANSACTION HISTORY - GRANTS
//             </div>
//             <div className="data-header align-center col-md-1 col-sm-12">
//               VOTES{" "}
//               <span className="synth-up-arrow">
//                 <img
//                   alt="Arrow"
//                   className="custom-icons"
//                   src="/img/grants/down-arrow.svg"
//                 />
//               </span>
//             </div>
//             <div className="data-header align-center col-md-3 col-sm-12">
//               AMOUNT{" "}
//               <span className="synth-up-arrow">
//                 <img
//                   alt="Arrow"
//                   className="custom-icons"
//                   src="/img/grants/down-arrow.svg"
//                 />
//               </span>
//             </div>
//             <div className="data-header align-center col-md-2 col-sm-12">
//               STATUS{" "}
//               <span className="synth-up-arrow">
//                 <img
//                   alt="Arrow"
//                   className="custom-icons"
//                   src="/img/grants/down-arrow.svg"
//                 />
//               </span>
//             </div>
//           </div>
//         </div>
//         {/* ========================= Tab Data Headings End========================= */}
//         {/* ========================= Repeat Data Start ========================= */}
//         <div className="data-wrapper">
//           <div className="row">
//             <div className="col-md-6 col-sm-12 data-p">
//               <div className="data-description-wrapper">
//                 <a
//                   className="hover"
//                   href="grant-application-gnosis-safe-sponsoring.html"
//                 >
//                   <h4 className="no-margin grantsdao-data-heading padding-right">
//                     Gnosis Safe Sponsoring
//                   </h4>
//                   <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
//                     Coinbase is one of the main Cryptocurrency
//                     spot-trading exchanges out there. San Fransisco
//                     based Coinbase was founded in June 2012. Coinbase
//                     provides a digital currency wallet...{" "}
//                     <span className="sm-font synth-blue bold">
//                       View Details
//                     </span>
//                   </p>
//                 </a>
//               </div>
//               <div className="request-details-wrapper">
//                 <span className="request no-margin bio-info">
//                   <span className="bio-info">Requested by</span>{" "}
//                   <span className="bio-info synth-blue">GS</span> in{" "}
//                   <span className="bio-info synth-pink">Grants</span>{" "}
//                   <span className="sm-font bio-info">
//                     on <span className="synth-blue">23 April 2021</span>
//                   </span>
//                 </span>
//               </div>
//               <div className="request-details-wrapper">
//                 <span className="request no-margin bio-info">
//                   <span className="bio-info">Transaction ID</span>
//                   <span className="bio-info synth-blue">
//                     {" "}
//                     xxxxxxxxxxx
//                   </span>
//                 </span>
//               </div>
//             </div>
//             <div className="vertical-align align-center col-md-1 col-sm-12 votes">
//               5/5
//             </div>
//             <div className="vertical-align align-center col-md-3 col-sm-12">
//               1500 SNX
//             </div>
//             <div className="vertical-align align-center col-md-2 col-sm-12">
//               <div className="utility-btn vertical-align">
//                 <div className="voting-wrapper">
//                   <div className="grants-completed">COMPLETED</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ========================= Repeat Data End ========================= */}
//           <div className="soft-divider"></div>
//         </div>
//         {/* ========================= Data End ======================= == */}
//       </div>
//     </div>
//     {/* Grants End*/}
//     {/* Initiatives Start*/}
//     <div
//       aria-labelledby="initiatives-tab"
//       className="tab-pane fade"
//       id="initiatives"
//       role="tabpanel"
//     >
//       <div className="container">
//         <div className="heading-wrapper">
//           <div className="row">
//             <div className="col-md-6 col-sm-12 active-tab-header">
//               PAYMENT TRANSACTION HISTORY - INITIATIVES
//             </div>
//             <div className="data-header align-center col-md-1 col-sm-12" />
//             <div className="data-header align-center col-md-3 col-sm-12">
//               AMOUNT{" "}
//               <span className="synth-up-arrow">
//                 <img
//                   alt="Arrow"
//                   className="custom-icons"
//                   src="/img/grants/down-arrow.svg"
//                 />
//               </span>
//             </div>
//             <div className="data-header align-center col-md-2 col-sm-12">
//               STATUS{" "}
//               <span className="synth-up-arrow">
//                 <img
//                   alt="Arrow"
//                   className="custom-icons"
//                   src="/img/grants/down-arrow.svg"
//                 />
//               </span>
//             </div>
//           </div>
//         </div>
//         {/* ========================= Tab Data Headings End========================= */}
//         {/* ========================= Data Wrapper Start ========================= */}
//         <div className="data-wrapper">
//           <div className="row">
//             <div className="col-md-6 col-sm-12 data-p">
//               <div className="data-description-wrapper">
//                 <a className="hover" href="initiatives-individual.html">
//                   <h4 className="no-margin grantsdao-data-heading padding-right">
//                     Debt Hedging Zaps
//                   </h4>
//                   <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
//                     Coinbase is one of the main Cryptocurrency
//                     spot-trading exchanges out there. San Fransisco
//                     based Coinbase was founded in June 2012. Coinbase
//                     provides a digital currency wallet service and a
//                     platform..{" "}
//                     <span className="sm-font synth-blue bold">
//                       View Details
//                     </span>
//                   </p>
//                 </a>
//               </div>
//               <div className="request-details-wrapper">
//                 <span className="request no-margin bio-info">
//                   <span className="bio-info">initiated by</span>{" "}
//                   <span className=" bio-info synth-blue">
//                     ΔLΞXΔNDΞR
//                   </span>{" "}
//                   in{" "}
//                   <span className="bio-info synth-pink">
//                     Initiatives
//                   </span>{" "}
//                   <span className="sm-font bio-info">
//                     on <span className="synth-blue">23 April 2021</span>
//                   </span>
//                 </span>
//               </div>
//               <div className="request-details-wrapper">
//                 <span className="request no-margin bio-info">
//                   <span className="bio-info">Transaction ID</span>
//                   <span className="bio-info synth-blue">
//                     {" "}
//                     xxxxxxxxxxx
//                   </span>
//                 </span>
//               </div>
//             </div>
//             <div className="col-md-1" />
//             <div className="vertical-align align-center col-md-3 col-sm-12">
//               800 SNX
//             </div>
//             <div className="vertical-align align-center col-md-2 col-sm-12">
//               <div className="utility-btn vertical-align">
//                 <div className="voting-wrapper">
//                   <div className="grants-completed">COMPLETED</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ========================= Repeat Data End ========================= */}
//           <div className="soft-divider" />
//         </div>
//         {/* ========================= Data Wrapper End ========================= */}
//       </div>
//     </div>
//     {/* Initiatives End*/}
//     {/* Competitions start*/}
//     <div
//       aria-labelledby="competitions-tab"
//       className="tab-pane fade"
//       id="competitions"
//       role="tabpanel"
//     >
//       <div className="container">
//         <div className="heading-wrapper">
//           <div className="row">
//             <div className="col-md-6 col-sm-12 active-tab-header">
//               PAYMENT TRANSACTION HISTORY - COMPETITIONS
//             </div>
//             <div className="data-header align-center col-md-2 col-sm-12">
//               PARTICIPANTS{" "}
//               <span className="synth-up-arrow">
//                 <img
//                   alt="Arrow"
//                   className="custom-icons"
//                   src="/img/grants/down-arrow.svg"
//                 />
//               </span>
//             </div>
//             <div className="data-header align-center col-md-2 col-sm-12">
//               AMOUNT{" "}
//               <span className="synth-up-arrow">
//                 <img
//                   alt="Arrow"
//                   className="custom-icons"
//                   src="/img/grants/down-arrow.svg"
//                 />
//               </span>
//             </div>
//             <div className="data-header align-center col-md-2 col-sm-12">
//               STATUS{" "}
//               <span className="synth-up-arrow">
//                 <img
//                   alt="Arrow"
//                   className="custom-icons"
//                   src="/img/grants/down-arrow.svg"
//                 />
//               </span>
//             </div>
//           </div>
//         </div>
//         {/* ========================= Tab Data Headings End========================= */}
//         {/* ========================= Data Wrapper Start ========================= */}
//         <div className="data-wrapper">
//           <div className="row">
//             <div className="col-md-6 col-sm-12 data-p">
//               <div className="data-description-wrapper">
//                 <a
//                   className="hover"
//                   href="Competitions-individual.html"
//                 >
//                   <h4 className="no-margin grantsdao-data-heading padding-right">
//                     Debt Hedging Zaps
//                   </h4>
//                   <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
//                     Coinbase is one of the main Cryptocurrency
//                     spot-trading exchanges out there. San Fransisco
//                     based Coinbase was founded in June 2012. Coinbase
//                     provides a digital currency wallet service and a
//                     platform..{" "}
//                     <span className="sm-font synth-blue bold">
//                       View Details
//                     </span>
//                   </p>
//                 </a>
//               </div>
//               <div className="request-details-wrapper">
//                 <span className="request no-margin bio-info">
//                   <span className="bio-info">initiated by</span>{" "}
//                   <span className=" bio-info synth-blue">
//                     ΔLΞXΔNDΞR
//                   </span>{" "}
//                   in{" "}
//                   <span className="bio-info synth-pink">
//                     Competitions
//                   </span>{" "}
//                   <span className="sm-font bio-info">
//                     on <span className="synth-blue">23 April 2021</span>
//                   </span>
//                 </span>
//               </div>
//               <div className="request-details-wrapper">
//                 <span className="request no-margin bio-info">
//                   <span className="bio-info">Transaction ID</span>
//                   <span className="bio-info synth-blue">
//                     {" "}
//                     xxxxxxxxxxx
//                   </span>
//                 </span>
//               </div>
//             </div>
//             <div className="vertical-align align-center col-md-2 col-sm-12 votes">
//               7
//             </div>
//             <div className="vertical-align align-center col-md-2 col-sm-12">
//               800 SNX
//             </div>
//             <div className="vertical-align align-center col-md-2 col-sm-12">
//               <div className="utility-btn vertical-align">
//                 <div className="voting-wrapper">
//                   <div className="grants-completed">COMPLETED</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ========================= Repeat Data End ========================= */}
//           <div className="soft-divider" />
//         </div>
//         {/* ========================= Data Wrapper End ========================= */}
//         {/* ========================= Data Wrapper Start ========================= */}
//         <div className="data-wrapper">
//           <div className="row">
//             <div className="col-md-6 col-sm-12 data-p">
//               <div className="data-description-wrapper">
//                 <a
//                   className="hover"
//                   href="Competitions-individual.html"
//                 >
//                   <h4 className="no-margin grantsdao-data-heading padding-right">
//                     Meme Site Design and Build: Multi Asset v2
//                   </h4>
//                   <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
//                     Coinbase is one of the main Cryptocurrency
//                     spot-trading exchanges out there. San Fransisco
//                     based Coinbase was founded in June 2012. Coinbase
//                     provides a digital currency wallet service and a
//                     platform..{" "}
//                     <span className="sm-font synth-blue bold">
//                       View Details
//                     </span>
//                   </p>
//                 </a>
//               </div>
//               <div className="request-details-wrapper">
//                 <span className="request no-margin bio-info">
//                   <span className="bio-info">initiated by</span>{" "}
//                   <span className=" bio-info synth-blue">david</span> in{" "}
//                   <span className="bio-info synth-pink">
//                     Competitions
//                   </span>{" "}
//                   <span className="sm-font bio-info">
//                     on <span className="synth-blue">23 April 2021</span>
//                   </span>
//                 </span>
//               </div>
//               <div className="request-details-wrapper">
//                 <span className="request no-margin bio-info">
//                   <span className="bio-info">Transaction ID</span>
//                   <span className="bio-info synth-blue">
//                     {" "}
//                     xxxxxxxxxxx
//                   </span>
//                 </span>
//               </div>
//             </div>
//             <div className="vertical-align align-center col-md-2 col-sm-12 votes">
//               4
//             </div>
//             <div className="vertical-align align-center col-md-2 col-sm-12">
//               800 SNX
//             </div>
//             <div className="vertical-align align-center col-md-2 col-sm-12">
//               <div className="utility-btn vertical-align">
//                 <div className="voting-wrapper">
//                   <div className="grants-completed">COMPLETED</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ========================= Repeat Data End ========================= */}
//           <div className="soft-divider" />
//         </div>
//         {/* ========================= Data Wrapper End ========================= */}
//       </div>
//     </div>
//     {/* Competitions End*/}
//     {/* Other Start*/}
//     <div
//       aria-labelledby="other-tab"
//       className="tab-pane fade"
//       id="other"
//       role="tabpanel"
//     >
//       <div className="container">
//         <div className="heading-wrapper">
//           <div className="row">
//             <div className="col-md-6 col-sm-12 active-tab-header">
//               PAYMENT TRANSACTION HISTORY - OTHER
//             </div>
//             <div className="data-header align-center col-md-1 col-sm-12" />
//             <div className="data-header align-center col-md-3 col-sm-12">
//               AMOUNT{" "}
//               <span className="synth-up-arrow">
//                 <img
//                   alt="Arrow"
//                   className="custom-icons"
//                   src="/img/grants/down-arrow.svg"
//                 />
//               </span>
//             </div>
//             <div className="data-header align-center col-md-2 col-sm-12">
//               STATUS{" "}
//               <span className="synth-up-arrow">
//                 <img
//                   alt="Arrow"
//                   className="custom-icons"
//                   src="/img/grants/down-arrow.svg"
//                 />
//               </span>
//             </div>
//           </div>
//         </div>
//         {/* ========================= Tab Data Headings End========================= */}
//         {/* ========================= Data Wrapper Start ========================= */}
//         <div className="data-wrapper">
//           <div className="row">
//             <div className="col-md-6 col-sm-12 data-p">
//               <div className="data-description-wrapper">
//                 <a className="hover" href="initiatives-individual.html">
//                   <h4 className="no-margin grantsdao-data-heading padding-right">
//                     Debt Hedging Zaps
//                   </h4>
//                   <p className="no-margin bio-info-p grants-excerpt bio-info-p no-margin padding-right">
//                     Coinbase is one of the main Cryptocurrency
//                     spot-trading exchanges out there. San Fransisco
//                     based Coinbase was founded in June 2012. Coinbase
//                     provides a digital currency wallet service and a
//                     platform..{" "}
//                     <span className="sm-font synth-blue bold">
//                       View Details
//                     </span>
//                   </p>
//                 </a>
//               </div>
//               <div className="request-details-wrapper">
//                 <span className="request no-margin bio-info">
//                   <span className="bio-info">Initiated by</span>{" "}
//                   <span className=" bio-info synth-blue">
//                     ΔLΞXΔNDΞR
//                   </span>{" "}
//                   in <span className="bio-info synth-pink">xxx</span>{" "}
//                   <span className="sm-font bio-info">
//                     on <span className="synth-blue">23 April 2021</span>
//                   </span>
//                 </span>
//               </div>
//               <div className="request-details-wrapper">
//                 <span className="request no-margin bio-info">
//                   <span className="bio-info">Transaction ID</span>
//                   <span className="bio-info synth-blue">
//                     {" "}
//                     xxxxxxxxxxx
//                   </span>
//                 </span>
//               </div>
//             </div>
//             <div className="col-md-1" />
//             <div className="vertical-align align-center col-md-3 col-sm-12">
//               800 SNX
//             </div>
//             <div className="vertical-align align-center col-md-2 col-sm-12">
//               <div className="utility-btn vertical-align">
//                 <div className="voting-wrapper">
//                   <div className="grants-completed">COMPLETED</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ========================= Repeat Data End ========================= */}
//           <div className="soft-divider" />
//         </div>
//         {/* ========================= Data Wrapper End ========================= */}
//       </div>
//     </div>
//     {/* Initiatives End*/}
//   </div>
