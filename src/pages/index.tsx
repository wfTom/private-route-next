import React from 'react'
import Head from 'next/head'
import Logo from '../assets/vercel.svg'
import { Container } from '../styles'
import Cookie from 'js-cookie'
import { addDays } from 'date-fns'

export default function Home() {
  function signIn() {
    Cookie.set('token', 'custom-token-here', {
      expires: addDays(new Date(), 1)
    })
  }

  function signOut() {
    Cookie.remove('token')
  }

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <Logo />
        <h1>Hello World</h1>
        <h1>Public Page</h1>
        <div>
          <button type="button" onClick={signIn}>
            Sign In
          </button>
          <button type="button" onClick={signOut}>
            Sign Out
          </button>
        </div>
      </main>
    </Container>
  )
}
