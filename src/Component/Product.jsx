import React, { useState } from 'react';
import productdata from "./productdetails";

export const Product = ({ array, setarray }) => {
    
    const [product, setproduct] = useState('men');

    
    const addtocart = (det) => {
        setarray([...array, det]);
    }


    
    return (
        <div>
            <div className="buttons">
                <button onClick={() => setproduct('men')}>Men</button>
                <button onClick={() => setproduct('women')}>Women</button>
            </div>
            <div className="container">
                {product === 'men' && (
                    <div className="row">
                        {productdata.filter(details => details.category === product ).map(details => (
                            <div className='col-lg-4 d-flex justify-content-center' key={details.id}>
                                <div className='card'>
                                    <h1>{details.name}</h1>
                                    <img src={details.Imageurl} alt={details.name} width="300px" />
                                    <p>{details.price}</p>
                                    <button onClick={() => addtocart(details)}>Add to cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {product === 'women' && (
                    <div className="row">
                        {productdata.filter(details => details.category === 'women').map(details => (
                            <div className='col-lg-4 d-flex justify-content-center' key={details.id}>
                                <div className='card'>
                                    <h1>{details.name}</h1>
                                    <img src={details.Imageurl} alt={details.name} width="300px" />
                                    <p>{details.price}</p>
                                    <button onClick={() => addtocart(details)}>Add to cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
