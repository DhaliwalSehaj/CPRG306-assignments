import {db} from"../_utils/firebase";
import {collection,getDocs,addDoc,query} from "firebase/firestore";

export async function getItemList(userId){
    let userItemsCollection=colllection(db,"users",userId,"items");
    let collectionSnapshot = await getDocs(userItemsCollection);
    collectionSnapshot.forEach(doc => {
        let thisItem={
            id:doc.id,
            ...doc.data()
        }
        console.log( doc.id ," - ",doc.data())
    });
}