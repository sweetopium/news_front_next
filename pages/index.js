import React, {useState} from 'react'
import FirstNewsItem from '../components/FirstNewsItem'
import RegNewsList from '../components/RegNewsList'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import APIConfig from "../utils/api";
import Head from 'next/head'

const HomePage = ({newsList, rowsList}) => {
     const onScroll = (event) => {
        const target = event.target
        if (target.scrollHeight.toFixed() - target.scrollTop.toFixed() === target.clientHeight) {
            window.location.replace(`/1`)
        }
    };
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
                <meta name="og:type" content="website"/>
                <meta property="og:url" content="https://hotbuzz.ru"/>
                <meta property="og:image"
                      content="https://storage.yandexcloud.net/ezflow-bucket/hb-og.png"/>
                <meta property="og:title"
                      content="HotBuzz – свежие новости со всего интернета. Персональная подборка новостей"/>
                <meta property="og:description"
                      content="HotBuzz - это твоя персональная подборка новостей. Скандальные новости шоу-бизнеса, общества и политики только для тебя!"/>
                <title>HotBuzz – свежие новости со всего интернета. Персональная подборка новостей</title>
                <meta name="description"
                      content="HotBuzz - это твоя персональная подборка новостей. Скандальные новости шоу-бизнеса, общества и политики только для тебя!"/>
            </Head>


            <div className={'container news__wrapper scroller__wrapper'} onScroll={onScroll} id={'page-wrap'}>
                <Header/>

                <div className={'row'}>
                    <div className={'col-md-8'}>
                        {newsList ?
                            <>
                                <FirstNewsItem
                                    mainImage={newsList[0].image}
                                    newsTitle={newsList[0].title}
                                    newsSourceImage={newsList[0].source.logo}
                                    newsSourceName={newsList[0].source.title}
                                    newsPubDate={newsList[0].publication_date}
                                    newsSlug={newsList[0].slug}
                                />
                                <RegNewsList rowsList={rowsList} />
                            </>
                            : null
                        }
                    </div>
                    <Sidebar />
                </div>


            </div>
        </>
    )
}

export async function getStaticProps() {
    const res = await APIConfig.get(`get_last_news?offset=0&limit=26`);
    const news = res.data;
    const rows = [...Array(Math.ceil((res.data.news.length / 2)))]
    const newsRows = rows.map((row, idx) => res.data.news.slice(idx * 2, idx * 2 + 2))
    return {
        props: {newsList: news.news, rowsList: newsRows},
        revalidate: 10,
    }
}

export default HomePage;
