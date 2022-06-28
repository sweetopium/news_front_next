import moment from "moment";
import 'moment/locale/ru'
import react, {useEffect} from "react";
import RegNewsItem from '../components/RegNewsItem'

function RegNewsList({rowsList}) {
    useEffect(() => {
        moment.locale('ru')
    }, [])
    return (
        <>
            {
                rowsList
                    ? <>

                        {rowsList.slice(1).map((row, idx) => {
                            return (
                                <div className={'row mt-1'} key={idx}>
                                    {row.map(item => {
                                        return (
                                            <div className={'col-md-6'} key={item.id}>
                                                <RegNewsItem
                                                    key={item.id}
                                                    mainImage={item.image}
                                                    newsTitle={item.title}
                                                    newsSourceImage={item.source.logo}
                                                    newsSourceName={item.source.title}
                                                    newsPubDate={item.publication_date}
                                                    newsSlug={item.slug}
                                                />
                                            </div>
                                        )
                                    })}

                                </div>
                            )
                        })}

                    </>
                    : null
            }
        </>
    )
}

export default RegNewsList;