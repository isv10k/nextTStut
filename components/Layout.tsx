import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

type Props = {
    children?: ReactNode
    home?: boolean
}
const name: string = 'Sergey';
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home=false }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/profile.jpg"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                        <>
                            <Link href="/">
                                <a>
                                    <img
                                        src="/images/profile.jpg"
                                        className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                        alt={name}
                                    />
                                </a>
                            </Link>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{name}</a>
                                </Link>
                            </h2>
                        </>
                    )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}


// const Layout = ({ children, title = 'This is the default title' }: Props) => (
//     <div>
//         <Head>
//             <title>{title}</title>
//         </Head>
//         <header>
//             <nav>
//                 <Link href="/">
//                     <a>Home</a>
//                 </Link>{' '} |{' '}
//                 <Link href="/about">
//                     <a>About</a>
//                 </Link>{' '} |{' '}
//                 <Link href="/users">
//                     <a>Users List</a>
//                 </Link>{' '} |
//                 <a href="/api/users">Users API</a>
//             </nav>
//         </header>
//         {children}
//         <footer>
//             <hr />
//             <span>I'm here to stay (Footer)</span>
//             <img src="/vercel.png" alt="Vercel Logo" width='200' height='100' className="logo" />
//         </footer>
//     </div>
// )

//export default Layout
