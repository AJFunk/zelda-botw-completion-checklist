import React from 'react';
import _ from 'lodash';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const RenderShrines = ({ shrines, progress, updater, setActiveShrine }) => {
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.checked;
    const name = target.name;
    updater(name, { completed: value });
  }

  return (
    <div>
      <ul className="list-unstyled">
        {shrines.map((shrine, idx) => {
          const isChecked = !!(progress[shrine.name] && progress[shrine.name].completed);
          return (
            <li key={idx}>
              <input type='checkbox' id={shrine.name} name={shrine.name} checked={isChecked} onChange={handleInputChange}/>
              <label htmlFor={shrine.name}>{shrine.name}</label>
              <Glyphicon glyph="info-sign" onClick={() => setActiveShrine(shrine)}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const ShrineDetail = ({ shrine }) => {
  return (
    <div>
      <div>Trial: {shrine.trial}</div>
      <div>Shrine Quest: {shrine.quest || 'n/a'}</div>
      <div>Treasure: {shrine.treasure.join(', ')}</div>
    </div>
  );
}

// type Props = {
//   data
//   progress
// updater,
// }

class Shrines extends React.Component {
  constructor() {
    super();
    this.setActiveShrine = this.setActiveShrine.bind(this);
  }

  state = {
    activeShrine: null
  }

  setActiveShrine = (shrine) => {
    this.setState({ activeShrine: shrine });
  }

  render() {
    const { setActiveShrine } = this;
    const { data, progress, updater } = this.props;
    const { activeShrine } = this.state;
    console.log(activeShrine);
    const shrines = _.groupBy(data.shrines, 'region');
    return (
      <Grid>
        <h3>Shrine Progress</h3>
        <Row className="show-grid">
          <Col md={3}>
            <ProgressBar bsStyle="success" now={progress.percentages.shrines} label={`${progress.percentages.shrines}%`} />
            {Object.keys(shrines).map((region, idx) => {
              return (
                <div key={idx}>
                  <h3>{region}</h3>
                  <RenderShrines shrines={shrines[region]} progress={progress.shrines} updater={updater} setActiveShrine={setActiveShrine}/>
                </div>
              )
            })}
          </Col>
          <Col md={9}>
            {activeShrine ? <ShrineDetail shrine={activeShrine} />
              : <div>select a shrine to view detailed information</div>
            }
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Shrines;
