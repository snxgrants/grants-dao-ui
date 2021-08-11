
import Head from "next/head";
import Button from "./Button";

export const Header = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta content="ie=edge" httpEquiv="x-ua-compatible" />
                <title>
                    Home | Synthetix grantsDAO
                </title>
                <meta content="" name="description" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <link href="/img/favicon.svg" rel="shortcut icon" type="image/x-icon" />
                <link crossOrigin="anonymous" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" rel="stylesheet" />
                {/* ========================= Google Fonts ========================= */}
                <link href="https://fonts.gstatic.com" rel="preconnect" />
                <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
                <link href="https://fonts.gstatic.com" rel="preconnect" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap" rel="stylesheet" />{/* ========================= CSS ========================= */}
                <link href="/css/LineIcons.2.0.css" rel="stylesheet" />
                <link href="/css/animate.css" rel="stylesheet" />
                <link href="/css/main.css" rel="stylesheet" />
            </Head>
        </>
    )
};
