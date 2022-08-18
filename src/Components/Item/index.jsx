import React from 'react';
import './item.css'
import  { Link } from 'react-router-dom';


const Item = ({info}) => {
return (
    <Link to={`/details/${info.id}`} className= "bike">
        
    <img src= {info.image} alt="" />
        <p> {info.title} </p>
    </Link>
);


}

export default Item;