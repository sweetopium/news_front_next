import React, {useState, useEffect} from "react";
import CustomAd from "./CustomAd";
import APIConfig from "../utils/api";
import Link from 'next/link'

function Sidebar() {
    const [newsSources, setNewsSources] = useState([])
    useEffect(() => {
        APIConfig.get('get_news_sources').then(res => {
            setNewsSources(res.data.sources_list)
        })
    }, [])
    return (
        <div className={'col-md-4 sidebar__wrapper'}>
            <CustomAd
                url={'https://liky.cc/R5wW'}
                image={'https://storage.yandexcloud.net/ezflow-bucket/mig-credit.png'}
                title={'Вам одобрили займ до 30 000 рублей! Получите деньги сейчас'}
                text={'Займы онлайн под 0%. До 30 000 ₽. Одобрение 99%. Заберите деньги на карту за ' +
                    '3 мин! · Конфиденциально. Зачислим деньги за 30 сек.'}
                btnText={'Взять деньги'}
            />

            <div className={'row d-none d-md-block'}>
                <div className={'col-md-12 px-4'}>
                    <h3>Источники новостей</h3>
                    <ul className={'sources-list'}>
                        {newsSources.map(source => {
                            return <li key={source._id}>
                                <Link href={{pathname: '/source/[source]', query: {source: source.slug}}}>
                                    <a className={'source-item__link'}> {source.name} </a>
                                </Link>
                                <span className={'source-item__count'}>({source.count})</span>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
