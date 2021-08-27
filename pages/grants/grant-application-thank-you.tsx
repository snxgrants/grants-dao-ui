import Link from "next/link";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";

const ThankYou = () => {
  return (
    <>
      <Header />

      <main>
        <Navbar />

        {/* ========================= Synthetix Grants Individual hero-section Start ========================= */}
        <section className="synth-grant-application-thank-you" id="grants">
          <div className="container padding-bottom-100">
            <div className="row align-items-center position-relative">
              <div className="col-md-12">
                <div className="hero-content grants-individual-vh">
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
                    Thank you for submitting your application.
                    <br />
                    Follow the link below to view the status of your
                    application.
                  </p>
                  <div className="vertical-align align-center col-md-2 col-sm-12 margin-auto">
                    <div className="utility-btn">
                      <Link href="/grants" passHref scroll={false}>
                        <button
                          className="vertical-align back-to-grants-btn wow fadeInUp"
                          data-wow-delay=".6s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.6s",
                            animationName: "fadeInUp",
                          }}
                        >
                          BACK TO GRANTS
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ThankYou;
