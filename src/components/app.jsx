import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      gifs: [],
      selectedGifId: null
    }
  }


  search = (query) => {
    giphy('XnbD8UutHD4G5e70UyHXG3t9JuXobKt6').search({
      q: query,
      rating: 'r',
      limit: 30
    }, (error, result) => {
        // Res contains gif data!
          console.log(result)
        this.setState({
          gifs: result.data
        });
    });
  }

  selectAGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }


  render() {

    return (
    <div>
      <div className="left-scene">
        <SearchBar searchFunction={this.search} />
        <div className="selected-gif">
          <Gif id={this.state.selectedGifId} />
        </div>
      </div>
        <div className="right-scene">
          <GifList
          gifs={this.state.gifs}
          selectAGif={this.selectAGif}
          />
        </div>
    </div>
    );
  }

}

export default App;
