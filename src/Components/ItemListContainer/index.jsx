import React, {useEffect, useState} from 'react';

import ItemList from '../ItemList';
import Title from '../Title';
import  {useParams} from 'react-router-dom';

const bikes = [
    
{id: 1, price: 8000, image:"https://i.postimg.cc/xdYkdntq/tenere.jpg", category: "adv",
title: " Tenere 700 "},
{ id: 2, price: 10000, image:"https://i.postimg.cc/Nf39W1X6/african.jpg", category: "adv",
title: "African Twin"},
{ id: 3, price: 16000, image:"https://i.postimg.cc/g23Xdnyf/bmw.jpg", category: "adv",
title: "BMW GS "},
{id: 4, price: 15000, image: "https://i.postimg.cc/Y9HTVyr5/suzuki1.jpg", category: "sport",
title: " Suzuki GSXR 600 "},
{id: 5, price: 14300, image: "https://i.postimg.cc/BvDdmG05/r61.jpg", category: "sport",
title: " Yamaha R6 "},
{id: 6, price: 13400, image: "https://i.postimg.cc/Cx93CxWL/cbr6001.jpg", category: "sport",
title: " Honda CBR 600 "},

];

export const ItemListContainer = ({texto}) => {
    
const [data, setData] =useState([]);

const {categoriesId} = useParams();

useEffect(() => {
    const getData = new Promise(resolve => {
setTimeout (() => {
resolve(bikes);
}, 3000);
    });
    if (categoriesId) {
        getData.then(res => setData(res.filter(bike => bike.category === categoriesId )));
    }
    else {getData.then(res => setData(res));
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