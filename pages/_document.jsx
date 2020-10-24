import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../library/gtag'

export default class CustomDocument extends Document {
 static async getInitialProps(ctx) {
  const originalRenderPage = ctx.renderPage

  const initialProps = await Document.getInitialProps(ctx)

  // Check if in production
  const isProduction = process.env.NODE_ENV === 'production'

  return {
   ...initialProps,
   isProduction,
  }
 }

 render() {
   const { isProduction } = this.props

   return (
    <Html>
     <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    
      <link rel="icon" href="/favicon.jpg" sizes="20x20" type="image/png" />
     </Head>
     <body>
      <Main />
      <NextScript />
     </body>
    </Html>
  )
 }
}