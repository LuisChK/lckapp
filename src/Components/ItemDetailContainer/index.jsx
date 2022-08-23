import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail';

import  {useParams} from 'react-router-dom';



const bikes = [
    {id: 1, price: 8000, image: "https://i.postimg.cc/xdYkdntq/tenere.jpg", 
    title: " Yamaha Tenere 700 "},
    { id: 2, price: 8000, image:"https://i.postimg.cc/Nf39W1X6/african.jpg", category: "adv",
title: "African Twin"},
{ id: 3, price: 8000, image:"https://i.postimg.cc/g23Xdnyf/bmw.jpg", category: "adv",
title: "BMW GS "},
{id: 4, price: 8000, image: "https://i.postimg.cc/Y9HTVyr5/suzuki1.jpg", category: "sport",
title: " Suzuki GSXR 600 "},
{id: 5, price: 8000, image: "https://i.postimg.cc/BvDdmG05/r61.jpg", category: "sport",
title: " Yamaha R6 "},
{id: 6, price: 8000, image: "https://i.postimg.cc/Cx93CxWL/cbr6001.jpg", category: "sport",
title: " Honda CBR 600 "}
    
];
export const ItemDetailContainer  = () => {

    const [data, setData] = useState({});
    const {detailId} = useParams();
    
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(bikes);
            }, 3000);
        });
        getData.then(res => setData(res.find(bike => bike.id === parseInt(detailId) )));
    }, [detailId])

    return (
        < ItemDetail data={data} />
        
    );
};


export default ItemDetailContainer;