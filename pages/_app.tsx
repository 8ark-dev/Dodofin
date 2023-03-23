import '../styles/globals.css'
import { CssBaseline, GeistProvider } from '@geist-ui/core'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='charset' content='UTF-8' />
        <meta name='viewport' content='width = device-width, initial-scale = 1.0' />

        <title>두두핀 - 쿨핀 투두리스트</title>
        <link rel="icon" href="/images/logo.png" />

        <meta name='author' content='박 상우' />
        <meta name='title' content='dodofin' />
        <meta name='og:title' content='dodofin' />
        <meta name='description' content='dodofin:todolist' />
        <meta name='og:description' content='todolist pages' />

        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />

      </Head>
      <GeistProvider themeType={'dark'} >
        <CssBaseline />

        <Component {...pageProps} />
      </GeistProvider>

    </>
  )
}
