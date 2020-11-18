// list pattern example
import React, { Component } from 'react';
import Gif from './gif';

const GifList = ({ gifs, selectAGif }) => {
// Destrucuring
// -two props in this component
// - by destructoring, we replace the props with the two keys of this component contained in "props"
// - replacing gif with {id} inside of map allows us to just iterate over the id key
  return (
    <div className="gif-list">
      {gifs.map(( {id} ) => {
        return <Gif id={id} key={id} selectAGif={selectAGif} />
        })}
    </div>
  );
};


export default GifList;
