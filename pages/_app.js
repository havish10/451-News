import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import NProgress from 'next-nprogress/component'

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Slab"
            rel="stylesheet"
          />
          <link href="/static/garamond.css" rel="stylesheet" />
          <title>News 451</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} /> <NProgress spinner={false} />
      </Container>
    )
  }
}
