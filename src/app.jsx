import React from 'react';
import data from './data';
import Navigation from './components/Navigation';
import Shrines from './components/Shrines';
import Towers from './components/Towers';
import Koroks from './components/Koroks';
import 'normalize.css';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import styles from "./app.sass"  // Css-module styles

class App extends React.Component {
  constructor() {
    super();
    this.handleComponentChange = this.handleComponentChange.bind(this);
    this.shrinesUpdater = this.shrinesUpdater.bind(this);
    this.towersUpdater = this.towersUpdater.bind(this);
    this.koroksUpdater = this.koroksUpdater.bind(this);
    // this.updateStorage = this.updateStorage.bind(this);
  }

  state = {
    progress: {
      shrines: {},
      towers: {},
      koroks: {},
      percentages: {
        shrines: 0,
        towers: 0,
        koroks: 0,
      },
      meta: {
        shrines: {},
        towers: {},
        koroks: {}
      }
    },
    comp: 'shrines'
  }

  components = {
    'shrines': Shrines,
    'towers': Towers,
    'koroks': Koroks
  }

  // componentDidMount() {
  //   this.hydrateStateWithLocalStorage();
  //
  //   window.addEventListener(
  //     "beforeunload",
  //     this.saveStateToLocalStorage.bind(this)
  //   );
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener(
  //     "beforeunload",
  //     this.saveStateToLocalStorage.bind(this)
  //   );
  //
  //   this.saveStateToLocalStorage();
  // }
  //
  // hydrateStateWithLocalStorage() {
  //   try {
  //     const progress = JSON.parse(localStorage.getItem('progress'));
  //     this.setState({ progress });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  //
  // saveStateToLocalStorage() {
  //   localStorage.setItem('progress', JSON.stringify(this.state.progress));
  // }

  handleComponentChange(comp) {
    this.setState({ comp });
  }

  shrinesUpdater(shrineName, updates) {
    const { progress } = this.state;
    this.setState({
      progress: {
        ...progress,
        shrines: {
          ...progress.shrines,
          [shrineName]: {
            ...progress.shrines[shrineName],
            ...updates,
          }
        }
      }
    }, () => {
      const shrines = this.state.progress.shrines;
      console.log(shrines);
      let completed = 0;
      for (var shrine in shrines) {
        if (shrines.hasOwnProperty(shrine)) {
          if (shrines[shrine].completed) completed++;
        }
      }
      this.setState({
        progress: {
          ...this.state.progress,
          percentages: {
            ...progress.percentages,
            shrines: (parseFloat(completed/data.shrines.length) * 100).toFixed(2)
          }
        }
      });
    });
  }

  towersUpdater(regionName, updates) {
    const { progress } = this.state;
    this.setState({
      progress: {
        ...progress,
        towers: {
          ...progress.towers,
          [regionName]: {
            ...progress.towers[regionName],
            ...updates,
          }
        }
      }
    }, () => {
      const towers = this.state.progress.towers;
      let completed = 0;
      for (var tower in towers) {
        if (towers.hasOwnProperty(tower)) {
          if (towers[tower].completed) completed++;
        }
      }
      this.setState({
        progress: {
          ...this.state.progress,
          percentages: {
            ...progress.percentages,
            towers: (parseFloat(completed/data.regions.length) * 100).toFixed(2)
          }
        }
      });
    });
  }

  koroksUpdater(korokName, updates) {
    const { progress } = this.state;
    this.setState({
      progress: {
        ...progress,
        koroks: {
          ...progress.koroks,
          [korokName]: {
            ...progress.koroks[korokName],
            ...updates,
          }
        }
      }
    }, () => {
      const koroks = this.state.progress.koroks;
      let completed = 0;
      for (var tower in koroks) {
        if (koroks.hasOwnProperty(tower)) {
          if (koroks[tower].completed) completed++;
        }
      }
      this.setState({
        progress: {
          ...this.state.progress,
          percentages: {
            ...progress.percentages,
            koroks: (parseFloat(completed/data.regions.length) * 100).toFixed(2)
          }
        }
      });
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

    return (
      <div className='App'>
        <Navigation changeComp={handleComponentChange}/>
        <div>
          <Comp data={data} progress={progress} updater={this[`${comp}Updater`]}/>
        </div>
      </div>
    );
  }
}

export default App;
