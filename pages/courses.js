import Head from "next/head";
import Image from 'next/image';
import { useState,useEffect } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';






export default function Home() {
    const [screenHeight,setScreenHeight] = useState(0);
  
  
    useEffect(()=>{
      setScreenHeight(window.innerHeight - 40)
    },[]);
   
  
   
  
    return (
    
      <>
      <Head>
      <title>Learn more about our courses today | Greixed Consult</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/greixed logo (4).png"/>
      </Head>
      <main style={{height:`${screenHeight}px`}}>
        <h1 className="text-2xl font-bold text-justify mt-5">
          We teach courses related to the bodies Below;
        </h1>
        <div className={styles.templates}>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/waec.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='text-3xl text-bold text-right'>
                WAEC
              </Typography>
              <Typography variant="body2" color="text.secondary" className='text-right'>
                  The West African Examnination Council
              </Typography>
            </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/jamb.png"
            />
             <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='text-3xl text-bold text-right'>
                JAMB
              </Typography>
              <Typography variant="body2" color="text.secondary" className='text-right'>
                  Joint Admissions and Matriculation Board
              </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/TOEFL.png"
            />
             <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='text-3xl text-bold text-right'>
                TOEFL
              </Typography>
              <Typography variant="body2" color="text.secondary" className='text-right'>
                  Text of English As A Foreign Language
              </Typography>
            </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/ielts.png"
            />
           
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='text-3xl text-bold text-right'>
                IELTS
              </Typography>
              <Typography variant="body2" color="text.secondary" className='text-right'>
                 International English Language Testing System
              </Typography>
            </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/neco.png"
            />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='text-3xl text-bold text-right'>
                NECO
              </Typography>
              <Typography variant="body2" color="text.secondary" className='text-right'>
                  Nigerian Examnination Council
              </Typography>
            </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/sat.png"
            />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='text-3xl text-bold text-right'>
                 SAT
              </Typography>
              <Typography variant="body2" color="text.secondary" className='text-right'>
                Scholastic Aptitude Test
              </Typography>
            </CardContent>
            </Card>
        </div>
          <div className={styles.explain}>
          <p>In Nigeria today,the exams needed to gain admission or to be qualified for
             the university are WAEC,NECO,GCE,NABTEB and most especially JAMB but
            the major exams are WAEC,NECO and JAMB.
            You need these 3 exams to be able to be qualified to enter the university.
            That is why we established this company to help students pass these exams in flying colours.
            </p>
          </div>
      </main>
      </>
         
    )}

    const styles={
      templates:'mt-20 flex flex-wrap gap-4 lg:flex-row sm:flex-wrap  order-2',
      Text:'text-6xl mt-5 text-left',
      explain:'text-2xl px-3',
    }