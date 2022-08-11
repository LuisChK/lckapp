import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail';

const bikes = 
    {id: 1, image: "https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2021/11/Yamaha-Ténéré-700-2022-47-1200x675.jpg", 
    title: " Yamaha Tenere 700 "};

export const ItemDetailContainer  = () => {

    const [data, setData] = useState({});
    
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(bikes);
            }, 3000);
        });
        getData.then(res => setData(res));
    }, [])

    return (
        < ItemDetail data={data} />
        
    );
};


export default ItemDetailContainer;