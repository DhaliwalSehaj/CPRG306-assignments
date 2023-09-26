import Image from 'next/image'
import MyComp from './mycomp'
import StudentInfo from './studentinfo'
import Root from './root'
import Week2_page from './week2/page'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <MyComp />
      <StudentInfo />
      <Root />
      <Link href="/week2/" style={{ fontSize: 30,display:'flex',alignItems:'center',justifyContent:'center' }}>Week 2 Page</Link>
    </main>
  )
}
