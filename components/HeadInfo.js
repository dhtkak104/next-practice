import Head from "next/head";

export default function HeadInfo({title, keyword, contents}) {
    return  (
        <Head>
            <title>{title}</title>
            <meta keyword={keyword}/>
            <meta contents={contents}/>
        </Head>
    )
}

HeadInfo.defaultProps = {
    title: 'My Blog',
    keyword: 'Blog powerd by Next js',
    contents: 'practice next js'
}