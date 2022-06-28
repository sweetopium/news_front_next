import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from 'react';
import TagManager from 'react-gtm-module';

function MyApp({Component, pageProps}) {
    useEffect(() => {
        TagManager.initialize({gtmId: 'GTM-TQC9N4D'});
    }, []);
    return <Component {...pageProps} />
}

export default MyApp
