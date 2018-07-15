import React from 'react';
import _ from 'lodash';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const RenderKoroks = ({ koroks, progress, updater, setActiveKorok }) => {
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
          return (
            <li key={idx}>
              <input type='checkbox' id={name} name={name} checked={isChecked} onChange={handleInputChange}/>
              <label htmlFor={name}>#{korok.ord} {korok.type}</label>
              <Glyphicon glyph="info-sign" onClick={() => setActiveKorok(korok)}/>
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

const KorokDetail = ({ korok, regions }) => {
  console.log('here', korok);
  const img = regions.find(r => r.name === korok.region).korokImage;
  return (
    <div>
      <img src={img} style={{ width: '800px', height: 'auto' }}/>
    </div>
  );
}

class Shrines extends React.Component {
  constructor() {
    super();
    this.setActiveKorok = this.setActiveKorok.bind(this);
  }

  state = {
    activeKorok: null
  }

  setActiveKorok = (korok) => {
    this.setState({ activeKorok: korok });
  }

  render() {
    const { setActiveKorok } = this;
    const { activeKorok } = this.state;
    const { data, progress, updater } = this.props;
    const koroks = _.groupBy(data.koroks, 'region');
    const regions = data.regions;
    return (
      <Grid>
        <h3>Korok Seed Progress</h3>
        <Row className="show-grid">
          <Col md={3}>
            <ProgressBar bsStyle="success" now={progress.percentages.koroks} label={`${progress.percentages.koroks}%`} />
            {Object.keys(koroks).map((region, idx) => {
              return (
                <div key={idx}>
                  <h3>{region}</h3>
                  <RenderKoroks koroks={koroks[region]} progress={progress.koroks} updater={updater} setActiveKorok={setActiveKorok} />
                </div>
              )
            })}
          </Col>
          <Col md={9}>
            {activeKorok ? <KorokDetail korok={activeKorok} regions={regions}/>
              : <div>select a korok to view detailed information</div>
            }
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Shrines;
