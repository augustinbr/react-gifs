import React, { Component } from 'react';

import Search from './form-search';
import Gif from './gif';
import GifList from './gif-list';

class App extends Component {
  // constructor(props){
  //   super(props);

  // this.state = {
  //   gifs: [],
  //   gif: ""
  // }
  // }
  render() {
    const gifs = [
      { id: "keUm5tRMxoniSyYWan" },
      { id: "lOlsBBNTeLuIXt1CHP" }
    ];

    return (
      <div>
        <div className="left-scene">
          <Search />
          <div className="selected-gif">
            <Gif id="xT9IgDEI1iZyb2wqo8" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
