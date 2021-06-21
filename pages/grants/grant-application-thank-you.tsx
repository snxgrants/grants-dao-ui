import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {Header} from "../../components/Header";
import {Navbar} from "../../components/Navbar";
import {Footer} from "../../components/Footer";

export default function GrantApplicationThankYou() {
    return (
        <>
            <Head>
                <title>Grants Submission | Synthetix grantsDAO</title>
            </Head>

            <Header />

            <main>

                <Navbar />

                {/* ========================= Synthetix Grants Individual hero-section Start ========================= */}
                <section className="synth-grant-application-thank-you" id="grants">
                    <div className="container padding-bottom-100">
                        <div className="row align-items-center position-relative">
                            <div className="col-md-12">
                                <div className="hero-content grants-thank-you-vh">
                                    <div className="synth-gdao-grants-mini-logo"><img alt="Logo" className="gdao-mini-logo" src="/img/logo/synthetix_gdao_logo_mini.svg" /></div>
                                    <h1 className="synth-grants-h wow fadeInUp" data-wow-delay=".2s">GRANT APPLICATION</h1>
                                    <p className="wow fadeInUp synth-p-opti align-center" data-wow-delay=".6s">Thank you for submitting your application.<br />
                                        Follow the link below to view the status of your application.</p>
                                    <div className="vertical-align align-center col-md-2 col-sm-12 margin-auto">
                                        <div className="utility-btn">
                                            <a href="grants.html"><button className="vertical-align back-to-grants-btn wow fadeInUp" data-wow-delay=".6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp'}}>BACK TO GRANTS</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========================= Synthetix Grants Individual hero-section Start End ========================= */}


                <Footer />

            </main>
        </>
    )

}