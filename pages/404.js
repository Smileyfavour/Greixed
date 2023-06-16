import { useState,useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";




export default function PageNotFound() {
    const [screenHeight,setScreenHeight] = useState(0);


    useEffect(()=>{
        setScreenHeight(window.innerHeight - 60)
    },[])



    return(
        <>
        <Head>
          <title>Page Not Found | Greixed</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/greixed logo (2).png"/>
        </Head>
        <main className={styles.container} style={{height:`${screenHeight}px`}}>
            <Image width={400} height={400} src='/broken_plug (2).png' alt="page not found"/>
            <h3 className={styles.message}>oops! Page not Found</h3>
            <p className={styles.action}> Return to <Link className={styles.link} href='/'>Home</Link> </p>
          </main>

        </>
    )
}

const styles={
    container:'w-full flex flex-col justify-center items-center px-16 ',
    message:'text-lg my-3',
    action:'text-md',
    link:'text-indigo-600',
}