import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1 className="title">Top Rated English Movies</h1>
            <h4><small>Top 250 English-language movies as rated by IMDb Users</small></h4>
            <h4 className='movie-info'><small>Showing 9 Movies info</small></h4>
            <br />
            <form action="/action_page.php">
                <label for="movie"> Sort by : </label>
                <select name="movie" id="movie">
                    <option value="volvo">Ranking</option>
                    <option value="saab">IMDb Rating</option>
                    <option value="opel">Release Date</option>
                    <option value="audi">Number of Ratings</option>
                    <option value="audi">Your Ratings</option>
                </select>
                <input className="input" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Header;