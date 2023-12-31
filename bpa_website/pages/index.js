// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// const inter = Inter({ subsets: ['latin'] })

import Image from "next/image";
import { Inter } from "@next/font/google";
import Hero from "./components/home/Hero";
import Slider from "./components/home/slider";
import Features from "./components/home/Features";
import Testimonials from "./components/home/Testimonials";
import Contacts from "./components/home/contact";
import dynamic from 'next/dynamic';
import Products from "./components/home/product";

const _Layout = dynamic(() => import('./components/layout/_layout'))
const _Title = dynamic(() => import('./components/layout/_title'))

export default function Home() {
  return (
    <>
      <_Title title="Business Process Automation" />
      <_Layout>
        {<Hero 
        title="Discover and get new ways to automate your Business!" 
        description="Welcome to our online haven for book enthusiasts! Whether you're an
            avid reader, a passionate book collector, or a literary explorer,
            our platform is your gateway to a vast universe of knowledge,
            imagination, and storytelling"/>}
        {/*<Slider />*/}
        <Products />
        <Features />
        <Testimonials />
        <Contacts />
      </_Layout>
    </>
  );
}