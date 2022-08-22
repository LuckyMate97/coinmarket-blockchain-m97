import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import  Header from '../components/Header';

const Home: NextPage = () => {
  return (   
   <div className='min-h-screen'>
    {/** header */}
    <Header/>
    <div className='mt-10' />
    { /**  trendings */}
    <div className='mt-20' />
   </div>
  )
}

export default Home
