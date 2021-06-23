import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {Header} from "../../components/Header";
import {Navbar} from "../../components/Navbar";
import {Footer} from "../../components/Footer";
import {blogsData} from "../../domainData/BlogsData";
import {useRouter} from "next/router";
import {initiativesData} from "../../domainData/InitiativesData";

export default function Blog() {

    const { id } = useRouter().query;

    console.log(id);

    const blogValue = blogsData[id] ;

    console.log(blogValue);

    return (
        <>
            <Head>
                <title>Home | Synthetix grantsDAO</title>
            </Head>

            <Header />

            <main>

                <Navbar />

                {/* ========================= Synthetix Blog Heading Start ========================= */}
                <div id="gradient_overlay">
                    <section id="blog" className="synth-blog-post-individual">
                        <div className="container">
                            <div className="row align-items-center position-relative">
                                <div className="col-md-12">
                                    <div className="hero-content blog-individual-vh">
                                        <div className="synth-gdao-grants-mini-logo">
                                            <span><img className="gdao-mini-logo" src="/img/logo/synthetix_gdao_logo_mini.svg" alt="Logo" /></span>
                                            <span>
                                              <h1 className="synth-grants-h wow fadeInUp animated" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>
                                                Blog
                                              </h1>
                                            </span>
                                        </div>
                                        <h4 className="grants-indi-description align-center animated" style={{color: 'rgb(0, 209, 255)'}}>
                                            {blogValue.title}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* ========================= Synthetix Blog Heading End ========================= */}
                <div className="blog-bg">
                    <div className="container">
                        <div className="row grants-pager-wrapper" style={{padding: 0}}>
                            <div className="col-md-12">
                                <ul className="pager">
                                    <li className="previous">
                                        <Link href='/blogs'>
                                            <a className="grants-pager-link">
                                                <span className="synth-up-arrow">
                                                    <img alt="Arrow" className="pager-icons"  src="/img/grants/gdao-previous.svg" />
                                                </span> Back to posts
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="next">
                                        <Link href='/blogs'>
                                            <a className="grants-pager-link" >
                                                Next Post
                                                <span className="synth-up-arrow">
                                                    <img alt="Arrow" className="pager-icons" src="/img/grants/gdao-next.svg" />
                                                </span>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid synth-tab-styling">
                        <div className="indi-grants-h-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="synth-tabs">
                                            <span className="request no-margin bio-info">
                                                <span className="bio-info">Posted by</span>
                                                <span className="bio-info synth-blue">{blogValue.author}</span>
                                                in
                                                <span className="bio-info synth-pink">Synthetix Protocol</span>
                                                <span className="sm-font bio-info">
                                                    on
                                                    <span className="synth-blue">{blogValue.date}</span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container blog-post-content-wrapper">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="blog-img" src={blogValue.imageUrl} alt="post-tb" />
                                {blogValue.body}
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row max-width-grant-divider">
                            <div className="col-md-12">
                                <div className="grants-end" />
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row grants-pager-wrapper" style={{padding: '10px 0 50px 0'}}>
                            <div className="col-md-12">
                                <ul className="pager">
                                    <li className="previous">
                                        <Link href='/blogs'>
                                            <a className="grants-pager-link">
                                                <span className="synth-up-arrow">
                                                    <img alt="Arrow" className="pager-icons" src="/img/grants/gdao-previous.svg" />
                                                </span> Back to posts
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="next">
                                        <Link href='/blogs'>
                                            <a className="grants-pager-link">
                                                Next Post
                                                <span className="synth-up-arrow">
                                                    <img alt="Arrow" className="pager-icons" src="/img/grants/gdao-next.svg" />
                                                </span>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </main>
        </>
    )

}