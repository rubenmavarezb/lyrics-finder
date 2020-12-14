import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Form = ({ setSearchLyrics }) => {

    const [search, setSearch] = useState({
        artist: '',
        song: ''
    });
    const [error, setError] = useState(false);

    const { artist, song } = search;

    const actState = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    };

    const searchInfo = e => {
        e.preventDefault();

        if(artist.trim() === '' || song.trim() === ''){
            setError(true);
            return;
        }
        
        setError(false);
        setSearchLyrics(search)
    }

    return ( 
            <div className='bg-info'>
            {error ? <Error msg='all fields are required'/>: null}
                <div className="container">
                    <div className="row">
                        <form 
                            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                            onSubmit={searchInfo}
                        >
                            <fieldset>
                                <legend className="text-center">Find lyrics of your favorites songs...</legend>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Artist</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                name="artist" 
                                                placeholder="Name of artist"
                                                onChange={actState}
                                                value={artist}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                            <label>Song</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                name="song" 
                                                placeholder="Name of the song"
                                                onChange={actState}
                                                value={song}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    className="btn btn-primary float-right" 
                                    type="submit"
                                >Search...</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
                
            </div>
     );
}

Form.propTypes = {
    setSearchLyrics: PropTypes.func.isRequired
}
 
export default Form;