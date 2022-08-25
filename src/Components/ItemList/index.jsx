
import Item from '../Item';
import React from 'react';


const ItemList = ({data=[]}) => {
    return (
        data.map(bikes => < Item key={bikes.id} info={bikes} />)
    );
    
    
    }
    
    export default ItemList;