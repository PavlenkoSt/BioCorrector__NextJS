import React, {FC, useEffect, useState} from 'react'
import {AppProps} from 'next/app'
import {wrapper} from '../store'
import '../styles/globals.scss'
import { useRouter } from 'next/dist/client/router'
import Loading from '../components/common/Loading'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter()

    const [state, setState] = useState({
        isRouteChanging: false,
        loadingKey: 0,
    })

    useEffect(() => {
        const handleRouteChangeStart = () => {
            setState((prevState) => ({
                ...prevState,
                isRouteChanging: true,
                loadingKey: prevState.loadingKey ^ 1,
            }))
        }

        const handleRouteChangeEnd = () => {
            setState((prevState) => ({
                ...prevState,
                isRouteChanging: false,
            }))
        }

        router.events.on('routeChangeStart', handleRouteChangeStart)
        router.events.on('routeChangeComplete', handleRouteChangeEnd)
        router.events.on('routeChangeError', handleRouteChangeEnd)

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart)
            router.events.off('routeChangeComplete', handleRouteChangeEnd)
            router.events.off('routeChangeError', handleRouteChangeEnd)
        }
    }, [router.events])

    return (
        <>
            <Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
            <Component {...pageProps} />
        </>
    )
}

export default wrapper.withRedux(WrappedApp)