import Nav from "./Nav";
import Head from "next/head";

export default function Layout({children}) {
    return  (
        <>
            <Head>
                <title>NextJS</title>
                <meta keyword="nextjs keyword"/>
                <meta content="nextjs content"/>
            </Head>
            <Nav />
            <div>
                {children}
            </div>
        </>
    )
}