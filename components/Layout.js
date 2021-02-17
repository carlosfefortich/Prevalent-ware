import Head from 'next/head'
import Nav from './Nav'

function Layout({children}) {
    return (
        <>
            <Nav />
            
            <div>
                <Head>
                    <title>Gente PreValente</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            
                <main className="bg-gray-200">
                    {children}
                </main>
                
            </div>
        </>
    )
}

export default Layout
