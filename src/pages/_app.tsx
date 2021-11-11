import React from 'react'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import './../css/index.css'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { NotificationProvider } from '../providers/NotificationProvider'
import { Footer } from '../components/Footer'

// eslint-disable-next-line @typescript-eslint/naming-convention
const MyApp = ({ Component, pageProps }: AppProps) => (
  <NotificationProvider>
    <Header />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </NotificationProvider>
)
export default MyApp
