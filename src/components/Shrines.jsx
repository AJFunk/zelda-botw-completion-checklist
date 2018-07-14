import React from 'react';
import _ from 'lodash';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

const RenderShrines = ({ shrines, progress, updater }) => {
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.checked;
    const name = target.name;
    updater(name, { completed: value });
  }

  return (
    <div>
      <ul>
        {shrines.map((shrine, idx) => {
          const isChecked = !!(progress[shrine.name] && progress[shrine.name].completed);
          const shrineDetail = (
            <Popover title={shrine.name} id={`${shrine.name}`}>
              <div>Trial: {shrine.trial}</div>
              <div>Shrine Quest: {shrine.quest || 'n/a'}</div>
              <div>Treasure: {shrine.treasure.join(', ')}</div>
            </Popover>
          )
          return (
            <li key={idx}>
              <input type='checkbox' id={shrine.name} name={shrine.name} checked={isChecked} onChange={handleInputChange}/>
              <label htmlFor={shrine.name}>{shrine.name}</label>
              <OverlayTrigger trigger="click" placement="right" overlay={shrineDetail}>
                <Glyphicon glyph="info-sign" />
              </OverlayTrigger>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// type Props = {
//   data
//   progress
// updater,
// }

class Shrines extends React.Component {
  render() {
    const { handleInputChange } = this;
    const { data, progress, updater } = this.props;
    const shrines = _.groupBy(data.shrines, 'region');
    return (
      <div>
        <h3>Shrine Progress</h3>
        <ProgressBar bsStyle="success" now={progress.percentages.shrines} label={`${progress.percentages.shrines}%`} />
        {Object.keys(shrines).map((region, idx) => {
          return (
            <div key={idx}>
              <h3>{region}</h3>
              <RenderShrines shrines={shrines[region]} progress={progress.shrines} updater={updater}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Shrines;
