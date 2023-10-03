import ItemList from "./item-list";
import Link from 'next/link'
export default function Page(){
    return(
        <main>
            
            <Link href="../" style={{ fontSize: 30,display:'flex',alignItems:'center',justifyContent:'right' }}>Back to Main Page</Link>
            <ItemList />
            
        </main>
    )
};