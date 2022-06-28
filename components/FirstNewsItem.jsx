import moment from "moment";
import 'moment/locale/ru'
import react, {useEffect} from "react";
import Link from 'next/link'

function FirstNewsItem(props) {
    useEffect(() => {
        moment.locale('ru')
    }, [])
    return (
        <div className={'first-news-item mb-4'}>
            <Link href={{pathname: '/details/[slug]', query: {slug: props.newsSlug}}}>
            <a target="_blank">
                <div className={'first-news-item__image'}>
                    <img className={'w-100'} src={props.mainImage}/>

                    <div className={'first-news-item__overlay'}/>

                    <div className={'first-news-item__content'}>
                        <div className={'first-news-item__content--headline'}>
                            <h3>{props.newsTitle}</h3>
                        </div>

                        <div className={'first-news-item__content--meta'}>
                            <div className={'source-item'}>
                                {props.newsSourceImage.length > 0
                                    ? <img className={'img-fluid'} src={props.newsSourceImage}/>
                                    : <img className={'img-fluid'}
                                           src={'https://news.rambler.ru/static/mobile/i/favicon-news/apple-icon-144x144.png'}/>
                                }
                                <span>{props.newsSourceName}</span>
                            </div>
                            <div className={'date-item'}>
                                <span>{moment(props.newsPubDate * 1000).fromNow()}</span>
                            </div>
                        </div>

                    </div>

                </div>
            </a>
            </Link>
        </div>
    )
}

export default FirstNewsItem;