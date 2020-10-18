import { Fragment } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../lib/gtag'

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
            
      {/* We only want to add the scripts if in production */}
      {isProduction && (
       <Fragment>
         {/* Global Site Tag (gtag.js) - Google Analytics */}
         <script
           async
           src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
         />
         <script
           dangerouslySetInnerHTML={{
             __html: `
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());

               gtag('config', '${GA_TRACKING_ID}', {
                 page_path: window.location.pathname,
               });
             `,
           }}
         />
       </Fragment>
      )}
     </Head>
     <body>
      <Main />
      <NextScript />
     </body>
    </Html>
  )
 }
}