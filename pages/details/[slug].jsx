import Head from 'next/head'
import Header from '../../components/Header'
import RegNewsItem from '../../components/RegNewsItem'
import React, {useState} from 'react';
import APIConfig from "../../utils/api";
import moment from "moment";
import 'moment/locale/ru'
import CustomAd from "../../components/CustomAd";


const NewsDetails = ({newsData, lastNews}) => {
    const [showFullStory, setShowFullStory] = useState(false)
    const [newsLimit, setNewsLimit] = useState(10)
    const readMoreHandler = (() => {
        setShowFullStory(true)
        const pageEvent = {
            event: 'read_more',
            source: newsData.source.title
        };
        window && window.dataLayer && window.dataLayer.push(pageEvent);
    })

    const onScroll = (event) => {
        const target = event.target
        if (target.scrollHeight.toFixed() - target.scrollTop.toFixed() === target.clientHeight) {
            // window.location.replace(`/1`)
            console.log('SCRL...')

            const pageEvent = {
                event: 'load_more_from_details_page',
            };
            window && window.dataLayer && window.dataLayer.push(pageEvent);
            setNewsLimit(newsLimit + 5)
        }
    };

    return (
        <>
            <Head>
                {newsData ?
                    <>
                        <meta name="viewport" content="width=device-width, initial-scale=1"/>
                        <meta charSet="utf-8"/>
                        <meta name="og:type" content="website"/>
                        <meta property="og:url" content="https://hotbuzz.ru"/>
                        <meta property="og:image" content={newsData.image}/>
                        <meta property="og:title" content={`${newsData.title} | HotBuzz – свежие новости для вас`}/>
                        <meta property="og:description" content={newsData.text}/>
                        <title>{newsData.title} | HotBuzz – свежие новости для вас</title>
                        <meta name="description" content={newsData.text}/>
                    </>
                    :
                    <>
                        <meta name="viewport" content="width=device-width, initial-scale=1"/>
                        <meta charSet="utf-8"/>
                        <meta name="og:type" content="website"/>
                        <meta property="og:url" content="https://hotbuzz.ru"/>
                        <meta property="og:title" content="HotBuzz – свежие новости для вас"/>
                        <meta property="og:description" content="HotBuzz – свежие новости для вас"/>
                        <title>HotBuzz – свежие новости для вас</title>
                        <meta name="description" content="HotBuzz – свежие новости для вас"/>
                    </>
                }
            </Head>


            <div className={'container news__wrapper news-details__item scroller__wrapper'} onScroll={onScroll}
                 id={'page-wrap'}>
                <Header/>

                <div className={'row mt-3'}>
                    <div className={'col-md-8'}>
                        {
                            newsData
                                ? <div className={'single-news__wrapper'}>
                                    <div className={'single-news__meta mb-2'}>
                                        <span>{moment(newsData.publication_date * 1000).fromNow()} / </span>
                                        <div className={'single-news__source-item'}>
                                            {newsData.source.logo.length > 0
                                                ? <img className={'img-fluid'} src={newsData.source.logo}/>
                                                : <img className={'img-fluid'}
                                                       src={'https://news.rambler.ru/static/mobile/i/favicon-news/apple-icon-144x144.png'}/>
                                            }
                                            <a href={newsData.source.link} rel={'noreferrer'} target={'_blank'}>
                                                {newsData.source.title}
                                            </a>
                                        </div>
                                    </div>
                                    <h1 className={'single-news__headline'}>{newsData.title}</h1>
                                    <div className={'single-news__image mt-3'}>
                                        <img className={'w-100'} src={newsData.image} alt={newsData.title}
                                             title={newsData.title}/>
                                    </div>
                                    <div className={'single-news__text mt-3'}>
                                        {newsData.full_story
                                            ? <div className={'mb-3'}>
                                                {!showFullStory
                                                    ? <div>
                                                        <div dangerouslySetInnerHTML={{__html: newsData.text}}/>
                                                        <span className={'read-more-btn'} onClick={readMoreHandler}>читать подробности</span>
                                                    </div>
                                                    : <div dangerouslySetInnerHTML={{__html: newsData.full_story}}/>
                                                }
                                            </div>
                                            : <div dangerouslySetInnerHTML={{__html: newsData.text}}/>
                                        }
                                    </div>

                                    <div className={'row mt-5'}>
                                        <div className={'col-md-12'}>
                                            {lastNews
                                                ? <>
                                                    <h4>Читать еще</h4>
                                                    {lastNews.slice(3, newsLimit).map((item, index) => {
                                                        if (index % 2 === 0) {
                                                            return (
                                                                <div className={'row'}>
                                                                    {Array(2).fill().map((el, i) => {
                                                                        return (
                                                                            <div className={'col-md-6'} key={item.id}>
                                                                                <RegNewsItem
                                                                                    key={lastNews[index + i].id}
                                                                                    mainImage={lastNews[index + i].image}
                                                                                    newsTitle={lastNews[index + i].title}
                                                                                    newsSourceImage={lastNews[index + i].source.logo}
                                                                                    newsSourceName={lastNews[index + i].source.title}
                                                                                    newsPubDate={lastNews[index + i].publication_date}
                                                                                    newsSlug={lastNews[index + i].slug}
                                                                                />
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </>
                                                : null
                                            }

                                        </div>
                                    </div>

                                </div>
                                : null
                        }
                    </div>

                    <div className={'col-md-4 mt-3 mt-md-0 d-none d-md-block'}>
                        <div className={'sticky__sidebar'}>
                            {lastNews
                                ? <>
                                    <CustomAd
                                        url={'https://yandex.ru'}
                                        image={'https://storage.yandexcloud.net/ezflow-bucket/mig-credit.png'}
                                        title={'Вам одобрили займ до 30 000 рублей! Получите деньги сейчас'}
                                        text={'Займы онлайн под 0%. До 30 000 ₽. Одобрение 99%. Заберите деньги на карту за ' +
                                            '3 мин! · Конфиденциально. Зачислим деньги за 30 сек.'}
                                        btnText={'Взять деньги'}
                                    />
                                    <h4 className={'mt-4'}>Похожие новости</h4>
                                    {lastNews.slice(0, 3).map(item => {
                                        return (

                                            <RegNewsItem
                                                key={item.id}
                                                mainImage={item.image}
                                                newsTitle={item.title}
                                                newsSourceImage={item.source.logo}
                                                newsSourceName={item.source.title}
                                                newsPubDate={item.publication_date}
                                                newsSlug={item.slug}
                                            />
                                        )
                                    })}


                                </>
                                : null
                            }
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
};


export async function getStaticPaths() {
    const res = await APIConfig.get(`get_slugs_list?limit=1000`);
    const slugs = res.data.slugs;
    const slugsList = [];
    slugs.forEach(i => {
        slugsList.push({
            params: {slug: i.slug}
        })
    })
    return {
        paths: slugsList,
        fallback: true
    };
}


export async function getStaticProps({params}) {
    const res = await APIConfig.get(`get_news_item?slug=${params.slug}`);
    const detailsData = res.data;
    return {
        props: {newsData: detailsData.news, lastNews: res.data.last_news},

    }
}

export default NewsDetails
