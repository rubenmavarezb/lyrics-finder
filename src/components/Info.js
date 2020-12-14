import React from 'react';
import PropTypes from 'prop-types';

const Info = ({artistInfo}) => {

    if(Object.keys(artistInfo).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyEN, strFacebook, strTwitter, strLastFMChart, strArtist} = artistInfo;

    const bioComponent = (strBiographyEN.length !== 0) ? (<p className="card-text">{strBiographyEN}</p>) : (<p className='card-text'>{strArtist}'s biography it's not available at the moment</p>)


    return ( 
        <div className='card border-light'>
           <div className="card-header bg-primary text-light font-weight-bold">
               Artist's information
           </div>
           <div className="card-body">
                <img src={strArtistThumb} alt="Artist logo"/>
                <p className="card-text">Genre: {strGenre}</p>
                <h2 className="card-text">Bio:</h2>
                {bioComponent}
                <p className="card-text">
                <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-lastfm"></i>
                </a>
                </p>
           </div>
        </div>
     );
}

Info.propTypes = {
    artistInfo: PropTypes.object.isRequired
}
 
export default Info;