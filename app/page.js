import Image from 'next/image'
import MyComp from './mycomp'
import StudentInfo from './studentinfo'
import Root from './root'
import Week2_page from './week2/page'
import Link from 'next/link'
import ItemList from './week3/item-list'
import NewItemSS from './week4/new-item'

export default function Home() {
  return (
    <main>
      <MyComp />
      <StudentInfo />
      <Root />
      <Link href="/week2/" style={{ fontSize: 30,display:'flex',alignItems:'center',justifyContent:'center' }}>Week 2 Page</Link>
      
      <Link href="/week3/" style={{ fontSize: 30,display:'flex',alignItems:'center',justifyContent:'center' }}>Shopping List</Link>
      <Link href="/week4/" style={{ fontSize: 30,display:'flex',alignItems:'center',justifyContent:'center' }}>Week 4</Link>
      <Link href="/week5/" style={{ fontSize: 30,display:'flex',alignItems:'center',justifyContent:'center' }}>Week 5</Link>
    </main>
  )
}
