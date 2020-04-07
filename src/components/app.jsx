import React, { Component } from 'react';

import Search from './form-search';
import Gif from './gif';
import GifList from './gif-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    };

    this.search("homer thinking");
  }

  search = (query) => {
    const giphy = require('giphy-api')('n8TFX7JjvgYecV3pP7iNoRO5JatPQeJ5');
    giphy.search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, result) => {
    // Res contains gif data!
      this.setState ({
        gifs: result.data,
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id,
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Search searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
