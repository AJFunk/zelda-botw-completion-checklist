import React from 'react';
import _ from 'lodash';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

const RenderRegion = ({ regions, progress, updater }) => {
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.checked;
    const name = target.name;
    updater(name, { completed: value });
  }

  return (
    <div>
      <ul>
        {regions.map((region, idx) => {
          const isChecked = !!(progress[region.name] && progress[region.name].completed);
          const regionDetail = (
            <Popover title={region.name} id={`${region.name}`}>
              <span>Placeholder</span>
            </Popover>
          )
          return (
            <li key={idx}>
              <input type='checkbox' id={region.name} name={region.name} checked={isChecked} onChange={handleInputChange}/>
              <label htmlFor={region.name}>{region.name}</label>
              <OverlayTrigger trigger="click" placement="right" overlay={regionDetail}>
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

class Towers extends React.Component {
  render() {
    const { handleInputChange } = this;
    const { data, progress, updater } = this.props;
    const regions = data.regions;
    return (
      <div>
        <h2>Tower Progress</h2>
        <ProgressBar bsStyle="success" now={progress.percentages.towers}  label={`${progress.percentages.towers}%`} />
        <RenderRegion regions={regions} progress={progress.towers} updater={updater}/>
      </div>
    )
  }
}

export default Towers;
