import Image from 'next/image'
import MyComp from './mycomp'
import Link from 'next/link'


export default function Root() {
  return (
    
    <main>
      <h1 style={{ fontSize: 50,textAlign: "center",lineHeight:3 }}>CPRG 306 F:Web Development 2-Assignments</h1>
      <Link href="https://webdev2-derek-sait.vercel.app/week2" style={{ fontSize: 30,display:'flex',alignItems:'center',justifyContent:'center' }}>Week 2</Link>
    </main>
  )
}