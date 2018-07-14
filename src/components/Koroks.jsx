import React from 'react';
import _ from 'lodash';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

const RenderShrines = ({ koroks, progress, updater, regions }) => {
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.checked;
    const name = target.name;
    updater(name, { completed: value });
  }

  return (
    <div>
      <ul>
        {koroks.map((korok, idx) => {
          const name = `${korok.region}-${korok.type}-${idx}`;
          const isChecked = !!(progress[name] && progress[name].completed);
          const img = regions.find(r => r.name === korok.region).korokImage;
          const korokDetail = (
            <Popover title={korok.type} id={`${korok.type}`}>
              <img src={img} style={{ width: '800px', height: 'auto' }}/>
            </Popover>
          )
          return (
            <li key={idx}>
              <input type='checkbox' id={name} name={name} checked={isChecked} onChange={handleInputChange}/>
              <label htmlFor={name}>#{korok.ord} {korok.type}</label>
              <OverlayTrigger trigger="click" placement="right" overlay={korokDetail}>
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
    const koroks = _.groupBy(data.koroks, 'region');
    return (
      <div>
        <h3>Korok Seed Progress</h3>
        <ProgressBar bsStyle="success" now={progress.percentages.koroks} label={`${progress.percentages.koroks}%`} />
        {Object.keys(koroks).map((region, idx) => {
          return (
            <div key={idx}>
              <h3>{region}</h3>
              <RenderShrines koroks={koroks[region]} progress={progress.koroks} updater={updater} regions={data.regions} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Shrines;
