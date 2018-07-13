import React from 'react';
import _ from 'lodash';

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
          return (
            <li key={idx}>
              <input type='checkbox' id={shrine.name} name={shrine.name} checked={isChecked} onChange={handleInputChange}/>
              <label htmlFor={shrine.name}>{shrine.name}</label>
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
    const shrines = _.groupBy(data, 'region');
    return (
      <div>
        {Object.keys(shrines).map((region, idx) => {
          return (
            <div key={idx}>
              <h3>{region}</h3>
              <RenderShrines shrines={shrines[region]} progress={progress} updater={updater}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Shrines;
