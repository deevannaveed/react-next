import React from 'react'
import Head from 'next/head'
import Main from '../layouts/main'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Main>
        <h3 className='h1 text-center mt-5'>Welcome to home page</h3>
    </Main>
    <style jsx>{`
    `}</style>
  </div>
)

export default Home
