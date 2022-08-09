
import Item from '../Item';
import React from 'react';


const ItemList = ({data=[]}) => {
    return (
        data.map(bike => < Item key={bike.id} info={bike} />)
    );
    
    
    }
    
    export default ItemList;