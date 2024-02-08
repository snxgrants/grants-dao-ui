export const Footer = () => {
  return (
    <>
      {/* ========================= Footer Start ========================= */}
      <footer className="synth-footer-section">
        <div className="container">
          <div className="synth-footer-blurb-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-sm-12">
                <div className="synth-proto-footer">
                  <img
                    alt="Synthetix Protocol"
                    className="synth-proto-footer wow fadeInUp"
                    data-wow-delay=".2s"
                    src="/img/home/synth-protocol.svg"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <p className="wow fadeInUp synth-proto-p" data-wow-delay=".2s">
                  The grantsDAO consists of five community and team members who
                  will review proposals for SNX grants that contribute to the
                  project. This is a huge milestone for the project as it marks
                  the first phase of the transition to decentralised governance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="synth-footer-wrapper">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="footer-text-wrapper">
                  <div className="footer-menu">
                    <a href="privacy-policy.html">Privacy Policy</a> |{" "}
                    <a href="privacy-policy.html">Contact Us</a> |{" "}
                    <a href="privacy-policy.html">Blog</a>
                  </div>
                  <div className="synth-copyright">
                    © 2021 Synthetix. All rights reserved.
                  </div>
                  <div className="synth-slogan">
                    Decentralised Autonomous Organisation
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="synth-footer-logo-wrapper">
                  <a href="index.html">
                    <img
                      alt="synthetix_grantsDAO_logo"
                      className="synth-social-img"
                      src="/img/logo/synthetix_grantsDAO_logo.svg"
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="connect-follow" />
                <div className="social-icons-wrapper">
                  <div className="synth-social">
                    <a
                      href="https://discord.com/invite/KVeCZe6ahW"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt="Discord"
                        className="synth-social-icons"
                        src="/img/footer/synth-discord-icon.png"
                      />
                    </a>
                    <a
                      href="https://github.com/snxgrants"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt="Discord"
                        className="synth-social-icons"
                        src="/img/footer/synth-github-icon.png"
                      />
                    </a>
                    <a
                      href="https://twitter.com/snxgrants"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt="Discord"
                        className="synth-social-icons"
                        src="/img/footer/synth-twitter-icon.png"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ======================= Footer End ========================= */}
      {/* ======================= scroll-top ========================= */}
      <a className="scroll-top btn-hover" href="#">
        <i className="lni lni-chevron-up" />
      </a>
    </>
  );
};
