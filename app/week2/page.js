import Image from 'next/image'
import MyComp from '../mycomp'
import Link from 'next/link'
import StudentInfo from '../studentinfo'
import ItemList from '../week3/item-list'


export default function Week2_page() {
  return (
    
    <main>
      <h1 style={{ fontSize: 50,textAlign: "center",lineHeight:3 }}>My Shopping list</h1>
      <StudentInfo />
      <Link href="../" style={{ fontSize: 30,display:'flex',alignItems:'center',justifyContent:'center' }}>Main Page</Link>
      
    </main>
  )
}