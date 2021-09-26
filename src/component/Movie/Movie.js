import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import './Movie.css'

import Details from '../Details/Details';
import './Movie.css'

const Movie = (props) => {
    const [deta, setDeta] = useState([]);

    const [cart, setCart] = useState([]);

    const addMovie = (data) => {
        const newCart = [...cart, data]
        // console.log(newCart);
        setCart(newCart)

    }



    useEffect(() => {
        fetch('./movies.JSON')
            .then(res => res.json())
            .then(data => setDeta(data))

        // .then(data => console.log(data))
    }, [])
    return (

        <div className="row">
            <div className="col-md-9">
                <div className="row">
                    {
                        deta.map(data => <Details
                            key={data.imdbID}
                            data={data}
                            addMovie={addMovie}

                        >
                        </Details>)
                    }
                </div>
            </div>


            <div className="col-md-3">

                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Movie;