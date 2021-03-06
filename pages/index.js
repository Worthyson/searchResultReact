import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { useRouter } from "next/dist/client/router";
import { useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import Login from '../components/Login';
import Content from '../components/Content';
import Header from '../components/Header';

export default function Home() {
  const router = useRouter()
  const[user,loading] = useAuthState(auth)
  return (
    <div className="max-w-screen-2xl">
      <Head>
        <title>ECom</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
   <main className='bg-red-400 h-[100vh]'>
   <Header/>
    { user ? (
         <Content/>
    ) :(
     <Login/>
    )}
   </main>
  
      
    </div>
  )
}
