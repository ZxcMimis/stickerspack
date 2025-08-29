import { Component } from 'react';
import './App.css';

import { Choice } from './components/Choice/Choice';
import { StickerList } from './components/StickerList/StickerList';

class App extends Component {

  state = {
    selectedSticker: '',
    selectedStickerImg: ''
  }

  chooseSticker = (stickerName, stickerImg) => {
    this.setState({ selectedSticker: stickerName, selectedStickerImg: stickerImg })
  }

  render() {

    return (
      <div className="App">
        <StickerList selectedSticker={this.chooseSticker} />
        <Choice selectedSticker={this.state.selectedSticker} selectedStickerImg={this.state.selectedStickerImg} />
      </div>
    );
  }
}

export default App;