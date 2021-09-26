import React from 'react';

const Details = (props) => {
    console.log(props.data);
    const { imdbID, Title, Budget, Country, Poster, Rating, Year, time } = props.data || {}
    return (
        <div className='col-md-4 mb-2'>
            <div class="card mb-3">
                <img src={Poster} class="card-img-top" alt="..." />
                <div class="card-body text-white bg-dark">
                    <h5 class="card-title">{Title}</h5>
                    <p class="card-text">Countries: {Country} </p>
                    <p class="card-text">Year: {Year} </p>
                    <p class="card-text">Budget: $ {Budget} million</p>
                    <p class="card-text"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>{Rating}</p>
                    <p class="card-text">Running time: {time}</p>
                    <button
                        onClick={() => props.addMovie(props.data)}
                        className="btn btn-primary">Added</button>
                </div>
            </div>
        </div>


    );
};

export default Details;