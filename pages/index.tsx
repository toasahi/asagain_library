import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../components/layouts/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
    <Header></Header>
      <main className="container mx-auto">
        <div className="">
          <h1 className="text-3xl">Asagain Library</h1>
        </div>
      </main>
    </>
  );
}


