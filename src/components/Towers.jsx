import React from 'react';
import _ from 'lodash';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const RenderRegion = ({ regions, progress, updater, setActiveTower }) => {
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
          return (
            <li key={idx}>
              <input type='checkbox' id={region.name} name={region.name} checked={isChecked} onChange={handleInputChange}/>
              <label htmlFor={region.name}>{region.name}</label>
              <Glyphicon glyph="info-sign"  onClick={() => setActiveTower(region)} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const TowerDetail = ({ tower }) => {
  return (
    <div>
      <div>placeholder</div>
    </div>
  );
}

// type Props = {
//   data
//   progress
// updater,
// }

class Towers extends React.Component {
  constructor() {
    super();
    this.setActiveTower = this.setActiveTower.bind(this);
  }

  state = {
    activeTower: null
  }

  setActiveTower = (tower) => {
    this.setState({ activeTower: tower });
  }

  render() {
    const { setActiveTower } = this;
    const { activeTower } = this.state;
    const { data, progress, updater } = this.props;
    const regions = data.regions;
    return (
      <Grid>
        <h3>Tower Progress</h3>
        <Row className="show-grid">
          <Col md={3}>
            <ProgressBar bsStyle="success" now={progress.percentages.towers}  label={`${progress.percentages.towers}%`} />
            <RenderRegion regions={regions} progress={progress.towers} updater={updater} setActiveTower={setActiveTower} />
          </Col>
          <Col md={9}>
            {activeTower ? <TowerDetail tower={activeTower} />
              : <div>select a tower to view detailed information</div>
            }
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Towers;
