import Image from 'next/image'
import Head from 'next/head';
import Link from 'next/link';



export default function Home() {
 
 

 

  return (
  
    <>
    <Head>
    <title>Briding the Gap to Academic Excellence | Greixed Consult</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/greixed logo (4).png"/>
    </Head>
    <main className={styles.container}>
     <div className={styles.image}>
     <div className='flex justify-center items-center gap-5 '>
      <Image height={950} width={900} src='/reading.png' alt='reading'/>
        

      </div>
     </div>
      <div className={styles.body}>
            <ul className={styles.header}>
                <h1 className='lg:mt-20 sm/md:mt-20'>Studying abroad is made easy</h1>
                <p className={styles.type}>With much teaching from our tutors,
                IELTS TOFEFL and many more are much easier to pass.
                From the comfort of your home, we teach you various topics needed 
                for the exams you are partaking in and can help you
                apply for various eligible schorlaships to any country of your choice.</p>
                <h2 className={styles.topic}>Pass WAEC,NECO and JAMB in flying colours</h2>
                <p className={styles.texts}>A detailed lesson plan is being made for you in a
                simple and easy way for you to understand. Our tutors also try their 
                very best to teach in an understanding manner and over the years,
                we have lost count of many who performed excellently in WAEC, NECO and JAMB.
                Below are some of our students who passed the exams in flying colours.</p>
                <h3 className={styles.topics}>How to Apply</h3>
                <p className={styles.type}>Make a determination in your mind on what exam course you would love to be taught about.
                You can scale through the related exams <Link href='/courses'><u>courses we teach</u></Link> ,
                click the apply button there. Also, you can click on the button below and you will be redirected to our Whatsapp
                account where you will be referred to one of our tutors who will give you more details and payments  of the services we render.</p>
                <p  className={styles.type}>To apply for the obtainable valid schorlaship application, follow this link <Link href='/readMore'><u>schorlaships</u></Link> and 
                  click the apply button below.
                  You will also be redirected to our Whatsapp account where you can reach out to our agents, discuss
                and guide you through every procedure to be taken for your desired schorlaship</p>
                <p className={styles.Apply}>To apply for exams tutoring ,click the link button below </p>
          </ul>
      <div className={styles.linkButton}>
          <Link className={styles.link}  href='https://wa.me/+2347019860086'>Apply Now</Link>
      </div>
        </div>
  
    </main>
    </>
       
  )}
  

  const styles = {
   container:'lg:px-0 sm:px-5 text-center',
   image:'bg-gradient-to-r from-yellow-300 to-green-500/50 ',
   button:' h-[40px] w-[170px] flex flex-col text border bg-blue-800 lg: px-3 mt-3 rounded-lg text-center text-white',
   body:'flex flex-col justify-center  lg:text-right  md:text-center md/sm:mt-5 text-bold text-6xl text-yellow-500 ',
   type:'text-2xl  text-black mt-5 lg:text-right sm:text-center',
   texts:'text-2xl leading-relaxed text-black mt-5 lg:text-justify sm:text-center',
   topic:' mt-24 lg:text-justify sm:text-center',
   topics:' mt-24 lg:text-right sm:text-center',
   Apply:' text-2xl mt-24 gap-3 flex justify-center ',
   linkButton:'flex justify-center py-5',
   link:'h-[40px] w-[400px] mt-5 bg-blue-800 hover:bg-yellow-500 lg:px-3 rounded-lg text-center text-2xl text-white',
  }



