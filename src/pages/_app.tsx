import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Loader = dynamic(() => import('@/components/Loader'), { ssr: false })

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
      <meta name='mobile-web-app-capable' content='yes'/>
      <meta name='apple-mobile-web-app-capable' content='yes' />
    </Head>

    <Loader />

    <Component {...pageProps} />
  </>
}
