import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail';
import  {getFirestore, doc, getDoc} from 'firebase/firestore';
import  {useParams} from 'react-router-dom';




export const ItemDetailContainer  = () => {

    const [data, setData] = useState({});
    const {detailId} = useParams();
    
    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "prodcuts", detailId);
        getDoc(queryDoc)
        .then(res => setData({id:res.id, ...res.data()}))
    }, [detailId])

    return (
        < ItemDetail data={data} />
        
    );
};


export default ItemDetailContainer;