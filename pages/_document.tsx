import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel='icon' href='/public/images/favicon-2.ico' sizes='any' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
