import React from 'react'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

import Navbar from '../components/Navbar'
import Header from '../components/Header'

// eslint-disable-next-line @typescript-eslint/naming-convention
const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <Navbar />
    <Component {...pageProps} />
  </>
)
export default MyApp
