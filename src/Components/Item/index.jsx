import React from 'react';
import './item.css'


const Item = ({info}) => {
return (
    <a className= "bike">
        
    <img src= {info.image} alt="" />
        <p> {info.title} </p>
    </a>
);


}

export default Item;