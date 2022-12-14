import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { MoralisProvider } from 'react-moralis';
import { CoinMarketProvider } from '../contexts/context'
import { GunProvider } from "../contexts/gunContext"

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER!}
      appId={process.env.NEXT_PUBLIC_APP_ID!}
    >
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
    </MoralisProvider>

  )
}

export default MyApp
