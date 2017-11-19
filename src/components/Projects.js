import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactTransitionGroup from 'react-addons-transition-group';
import { bounceInUp } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { changeNavColor } from '../redux/actions';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';

const styles = {
  everythingElse: {
    animationName: Radium.keyframes(bounceInUp, 'bounceInUp'),
    animationDuration: '3s',
    textAlign: 'center',
    backgroundColor: '#67AECA',
    width: window.innerWidth * 0.31,
    padding: '25px 0 25px 0',
    color: 'white',
  },
};

class Projects extends Component {
  static propTypes = {
    changeNavColor: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      variable: 0,
      hidden: true,
    };
  }
  componentWillMount() {
    this.props.changeNavColor(1);
  }
  componentDidMount() {
    setTimeout(() => this.setState({ hidden: false }), 500);
  }
  render() {
    const { everythingElse } = styles;
    return (
      <div style={{ overflow: 'hidden', height: '80%' }}>
        <StyleRoot>
          <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '30px', justifyContent: 'space-around', paddingBottom: '30px' }}>
            <a href="https://github.com/QTechOsijek/Low-cost_Smart-house">
              <div style={everythingElse}>
                <img src={project1} alt="Low-cost smart house" width={window.innerWidth * 0.3} />
                <p style={{ fontSize: '20px', paddingTop: '10px' }}>Low-cost smart house</p>
              </div>
            </a>
            {
              !this.state.hidden &&
              <div style={everythingElse}>
                <img src={project2} alt="AI controlled SH" width={window.innerWidth * 0.3} style={{ filter: 'blur(4px)' }} />
                <p style={{ fontSize: '20px', paddingTop: '10px' }}>AI controlled smart house</p>
              </div>
            }
          </div>
          <div style={{ position: 'relative', color: 'white', backgroundColor: '#67AECA', width: window.innerWidth, padding: '15px 0 15px 0' }}>
            <h2 style={{ fontSize: '35px', paddingLeft: '25px' }}>Our smart house projects</h2>
            <h4 style={{ fontSize: '25px', paddingLeft: '25px' }}>Designed to change every house to smart house</h4>
          </div>
        </StyleRoot>
      </div>
    );
  }
}

const mapDispatchToProps = {
  changeNavColor,
};

export default connect(null, mapDispatchToProps)(Projects);
