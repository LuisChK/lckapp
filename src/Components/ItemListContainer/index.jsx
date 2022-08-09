import React, {useEffect, useState} from 'react';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import Title from '../Title';

const bikes = [
{id: 1, image: "https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2021/11/Yamaha-Ténéré-700-2022-47-1200x675.jpg", 
title: " Tenere 700 "},
{ id: 2, image:"https://acnews.blob.core.windows.net/imggallery/1920x1440/GAZ_b4dab6ebe4e04615b6d63c91452607af.jpg",
title: "African Twin"},
{ id: 3, image: "https://www.motofichas.com/images/phocagallery/BMW_Motorrad/F_800_GS_Adventure_2013/1_2013-bmw-f800gs-adventure-studio-still-08-635x476.jpg",
title: "BMW GS "},

];

export const ItemListContainer = ({texto}) => {
    
const [data, setData] =useState([]);
useEffect(() => {
    const getData = new Promise(resolve => {
setTimeout (() => {
resolve(bikes);
}, 3000);
    });
    getData.then(res => setData(res));

},
 [])

    const onAdd = (quantity) => {
        console.log("compraste ${quantity} unidades");
            
    }
    return (
    
        <>
    < Title greeting={texto} />
    < ItemCount initial={1} stock={5} onAdd={onAdd} />
    < ItemList data={data} />

        </>
        

    );
}

export default ItemListContainer;