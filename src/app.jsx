import React from 'react';
import data from './data';
import Navigation from './components/Navigation';
import Shrines from './components/Shrines';
import 'normalize.css';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import styles from "./app.sass"  // Css-module styles

class App extends React.Component {
  constructor() {
    super();
    this.handleComponentChange = this.handleComponentChange.bind(this);
    this.shrinesUpdater = this.shrinesUpdater.bind(this);
    // this.updateStorage = this.updateStorage.bind(this);
  }

  state = {
    progress: {
      shrines: {},
    },
    comp: 'shrines'
  }

  components = {
    'shrines': Shrines
  }

  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {

    console.log('start hydrating');
    // parse the localStorage string and setState
    try {
      const progress = JSON.parse(localStorage.getItem('progress'));
      this.setState({ progress });
    } catch (e) {
      // handle empty string
      // this.setState({ [key]: value });
      console.log('no saved progress');
    }
    // for all items in state
    // for (let key in this.state) {
    //   // if the key exists in localStorage
    //   if (localStorage.hasOwnProperty(key)) {
    //     // get the key's value from localStorage
    //     let value = localStorage.getItem(key);
    //
    //     // parse the localStorage string and setState
    //     try {
    //       value = JSON.parse(value);
    //       this.setState({ [key]: value });
    //     } catch (e) {
    //       // handle empty string
    //       this.setState({ [key]: value });
    //     }
    //   }
    // }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    localStorage.setItem('progress', JSON.stringify(this.state.progress));
    // for (let key in this.state) {
    //   // save to localStorage
    //   localStorage.setItem('progress', JSON.stringify(this.state.progress));
    // }
  }

  // updateStorage(key) {
  //   localStorage.setItem(
  //     key, JSON.stringify(this.state.progress[key]),
  //     console.log("UPDATED STORAGE", JSON.parse(localStorage.getItem(key)))
  //   );
  // }

  handleComponentChange(comp) {
    console.log('change it', comp);
    this.setState({ comp });
  }

  shrinesUpdater(shrineName, updates) {
    // console.log(this);
    const { progress } = this.state;
    this.setState({
      progress: {
        ...progress,
        shrines: {
          ...progress.shrines,
          [shrineName]: {
            ...progress[shrineName],
            ...updates,
          }
        }
      }
    });
  }

  render() {
    const {
      components,
      handleComponentChange,
      updaters,
    } = this;
    const { progress, comp } = this.state;
    const Comp = components[comp];
    console.log(comp);

    return (
      <div className='App'>
        <Navigation changeComp={handleComponentChange}/>
        <div>
          <Comp data={data[comp]} progress={progress[comp]} updater={this[`${comp}Updater`]}/>
        </div>
      </div>
    );
  }
}

export default App;
