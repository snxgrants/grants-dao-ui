import { useState, useEffect, useMemo } from "react";

import Head from "next/head";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { useRouter } from "next/router";

import Connector from "../../containers/Connector";
import useSignMessage, { SignatureType } from "../../hooks/useSignMessage";
import useSnapshotSpaceQuery from "../../queries/useGetSnapshotSpace";
import { SNAPSHOT_ENS } from "../../constants/snapshot";

const PROPOSAL_PERIOD = 7 * 24 * 3600 * 1000;
const PROPOSAL_CHOICES = ["Yes", "No"];

const sanitiseTimestamp = (timestamp: number) => {
  return Math.round(timestamp / 1e3);
};

export default function GrantApplication() {
  const {
    walletAddress,
    connectWallet,
    provider,
    signer,
  } = Connector.useContainer();
  const createProposal = useSignMessage();
  const router = useRouter();

  const snapshotQuery = useSnapshotSpaceQuery();
  const spaceStrategies = snapshotQuery?.data?.strategies ?? null;
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [block, setBlock] = useState<number | null>(null);

  const validSubmission = useMemo(() => {
    if (title.length > 0 && description.length > 0 && !!spaceStrategies) {
      return true;
    } else {
      return false;
    }
  }, [title, description, spaceStrategies]);

  useEffect(() => {
    const getCurrentBlock = async () => {
      if (provider) {
        let blockNumber = await provider?.getBlockNumber();
        if (blockNumber) {
          setBlock(blockNumber);
        }
      }
    };

    getCurrentBlock();
  }, [provider]);

  const onSubmit = async () => {
    if (!!walletAddress) {
      if (validSubmission && !!block) {
        try {
          const proposalStartDate = sanitiseTimestamp(new Date().getTime());
          const proposalEndDate =
            proposalStartDate + sanitiseTimestamp(PROPOSAL_PERIOD);
          await createProposal.mutateAsync({
            spaceKey: SNAPSHOT_ENS,
            type: SignatureType.PROPOSAL,
            payload: {
              name: title,
              body: description,
              choices: PROPOSAL_CHOICES,
              start: proposalStartDate,
              end: proposalEndDate,
              snapshot: block,
              metadata: {
                plugins: {},
                network: "1",
                strategies: spaceStrategies,
              },
              type: "single-choice",
            },
          });
          router.push("/grants/grant-application-thank-you", undefined, {
            scroll: false,
          });
        } catch (e) {
          console.log(e);
        }
        // .then(async (response) => {
        //   setSignModalOpen(false);

        //   let ipfsHash = response?.data.ipfsHash;

        //   setHash(ipfsHash);

        //   if (activeTab === SPACE_KEY.PROPOSAL) {
        //     try {
        //       setSignTransactionState(Transaction.PRESUBMIT);
        //       setTxTransactionState(Transaction.PRESUBMIT);
        //       setTxModalOpen(true);

        //       const gasLimit = await synthetix.getGasEstimateForTransaction({
        //         txArgs: [ipfsHash],
        //         method: contract.estimateGas.logProposal,
        //       });

        //       const transaction = await contract.logProposal(ipfsHash, {
        //         gasLimit,
        //       });

        //       if (transaction) {
        //         setTxHash(transaction.hash);
        //         setTxTransactionState(Transaction.WAITING);
        //         monitorTransaction({
        //           txHash: transaction.hash,
        //           onTxConfirmed: () =>
        //             setTxTransactionState(Transaction.SUCCESS),
        //         });
        //         setTxModalOpen(false);
        //       }
        //     } catch (error) {
        //       console.log(error);
        //       setTxTransactionState(Transaction.PRESUBMIT);
        //       setTxError(error);
        //     }
        //   } else {
        //     setSignTransactionState(Transaction.SUCCESS);
        //   }
        // })
        // .catch((error) => {
        //   console.log(error);
        //   setSignTransactionState(Transaction.PRESUBMIT);
        //   setSignError(error.message);
        // });
      }
    } else {
      connectWallet();
    }
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
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="form-control"
                            id="title"
                            placeholder="Enter your title"
                            rows={4}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h4-grants-dao-descr">DESCRIPTION</div>
                <p className="ga">
                  Version 1 of this site will require the full Grant application
                  to be submitted in this one text field. Please ensure that you
                  cover the following sections for the Grant Application in as
                  much detail as possible:
                </p>
                <br />
                <ul>
                  <li>- Overview</li>
                  <li>- Value to the Synthetix Protocol or Community</li>
                  <li>- Applicant Background</li>
                  <li>- Implementation Plan</li>
                  <li>- Additional Information</li>
                  <li>- Funding Required ($ Value)</li>
                </ul>
                <p>
                  By the end, the reader should be fully understand what the
                  project will produce, as well as enough background context to
                  understand it’s place within the broader Synthetix/crypto
                  ecosystem.
                </p>
                <div className="row">
                  <div className="col-md-12">
                    <div className="sga-wrapper">
                      <div className="form-group">
                        <div className="col-sm-12">
                          <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="form-control"
                            id="overview"
                            placeholder="Add your description"
                            rows={12}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vertical-align align-center col-md-2 col-sm-12">
                  <div className="utility-btn">
                    <button
                      onClick={onSubmit}
                      className="vertical-align grants-apply-btn wow fadeInUp"
                      style={{
                        whiteSpace: "nowrap",
                        visibility: "visible",
                        animationDelay: "0.6s",
                        animationName: "fadeInUp",
                      }}
                      data-wow-delay=".6s"
                    >
                      {!!walletAddress ? "SUBMIT" : "CONNECT"}
                    </button>
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
}
