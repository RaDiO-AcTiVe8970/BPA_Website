// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// const inter = Inter({ subsets: ['latin'] })

import Image from "next/image";
import { Inter } from "@next/font/google";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import Testimonials from "./components/home/Testimonials";
import Contacts from "./components/home/contact";
import dynamic from 'next/dynamic';

const _Layout = dynamic(() => import('./components/layout/_layout'))
const _Title = dynamic(() => import('./components/layout/_title'))

export default function Home() {
  return (
    <>
      <_Title title="Interstellar Library" />
      <_Layout>
        <Hero />
        <Features />
        <Testimonials />
        <Contacts />
      </_Layout>
    </>
  );
}