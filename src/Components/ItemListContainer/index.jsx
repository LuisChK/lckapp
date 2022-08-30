import React, {useEffect, useState} from 'react';
import  {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import ItemList from '../ItemList';
import Title from '../Title';
import  {useParams} from 'react-router-dom';


export const ItemListContainer = ({texto}) => {
    
const [data, setData] =useState([]);

const {categoriesId} = useParams();

useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "prodcuts"); 
    if (categoriesId) {
    const queryFilter = query(queryCollection, where("category", "==", categoriesId))
    getDocs(queryFilter)
    .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
    }
    else {
        getDocs(queryCollection)
    .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
    }
},
 [categoriesId])

    
    return (
    
        <>
    < Title greeting={texto} />
   
    < ItemList data={data} />

        </>
        

    );
}

export default ItemListContainer;