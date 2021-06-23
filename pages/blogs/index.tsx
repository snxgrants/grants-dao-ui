import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {Header} from "../../components/Header";
import {Navbar} from "../../components/Navbar";
import {Footer} from "../../components/Footer";
import {blogsData} from "../../domainData/BlogsData";

export default function Blogs() {

    let blogRender = [] ;

    Object.entries(blogsData).forEach(([key, blog]) => blogRender.push (
        <div className="col-md-4">
            <Link href={'/blogs/'+key}>
                <a className="synth-blog-post-hover" >
                    <div className="synth-blog-post-wrapper">
                        <div className="synth-blog-post-img">
                            <img className="synth-post-img" src={blog.imageUrl} alt={blog.title} />
                            <h3 className="synth-blog-post-h">
                                {blog.title}
                            </h3>
                            <p className="synth-post-excerpt">
                                {blog.body}
                            </p>
                            <p className="synth-blog-post-date">
                                {blog.date}
                            </p>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    ));

    return (
        <>
            <Head>
                <title>Blog | Synthetix grantsDAO</title>
            </Head>

            <Header />

            <main>

                <Navbar />

                {/* ========================= Synthetix Blog Heading Start ========================= */}
                <div id="gradient_overlay">
                    <section id="blog-new" className="synth-blog-section">
                        <div className="container">
                            <div className="row align-items-center position-relative">
                                <div className="col-md-12">
                                    <div className="hero-content blog-individual-vh">
                                        <div className="synth-gdao-grants-mini-logo">
                                            <img alt="Logo" className="gdao-mini-logo" src="/img/logo/synthetix_gdao_logo_mini.svg" />
                                        </div>
                                        <h1 className="synth-grants-h wow fadeInUp animated" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>
                                            Blog
                                        </h1>
                                        <p className="wow fadeInUp synth-p-opti align-center animated" data-wow-delay=".6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp'}}>
                                            Decentralised Synthetic Assets<br />News, Updates and Industry Insights
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* ========================= Synthetix Blog Heading End ========================= */}
                <div className="container">
                </div>
                <div className="blog-bg">
                    <div className="container">
                        <div className="synth-blog-wrapper">
                            <div className="row padding-bottom">
                                <div className="col-md-12">
                                    <div className="row">

                                        {blogRender}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </main>
        </>
    )

}