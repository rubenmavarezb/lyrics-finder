import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Song from './components/Song';
import Info from './components/Info';
import Error from './components/Error';
import axios from 'axios';


function App() {

  const [searchLyrics, setSearchLyrics] = useState({});
  const [lyrics, saveLyrics] = useState('');
  const [artistInfo, saveArtistInfo] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(searchLyrics).length === 0) return;

    const APIget = async () => {
      const { artist, song } = searchLyrics;
      const urlLyrics = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const urlArtist = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      axios.all([
        axios(urlLyrics),
        axios(urlArtist)
      ]).then(axios.spread((lyric, info) => {
        saveLyrics(lyric.data.lyrics);
        saveArtistInfo(info.data.artists[0]);
      })).catch(err => {
        setError(true);
      });
      setError(false)

    }
    APIget();
  }, [searchLyrics]);

  return (
    <Fragment>
      <Form
        setSearchLyrics={setSearchLyrics}
      />
      {error ? <Error msg='Oops! Are you sure that song or artist exists?'/> : null}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info
              artistInfo={artistInfo}
            />
          </div>
          <div className="col-md-6">
            <Song
              lyrics={lyrics}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
