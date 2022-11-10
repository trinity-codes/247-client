import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button className='bg-rose-200 font-bold hover:bg-blue-100 focus:ring focus:bg-blue-100 py-2 px-4 rounded'>ClickMe</button>

      <p>Home - index.js</p>
    </div>
  )
}
