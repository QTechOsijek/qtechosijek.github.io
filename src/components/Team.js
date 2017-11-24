import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeNavColor } from '../redux/actions';
import Particles from 'react-particles-js';

class Team extends Component {
  static propTypes = {
    changeNavColor: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      variable: 0,
    };
  }
  componentWillMount() {
    this.props.changeNavColor(2);
  }
  render() {
    return (
      <div style={{ }}>
        <Particles
          params={{
            particles: {
              number: {
                value: 150,
              },
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#F45",
                  blur: 1,
                },
              },
              move: {
                speed: 11,
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
                onclick: {
                  enable: true,
                  mode: 'push',
                },
                resize: true,
              },
            },
          }}
          style={{
            width: '100%',
            position: 'fixed',
            height: window.innerHeight * 0.8,
          }}
        />
        <h2 style={{ textAlign: 'center', position: 'relative' }}>Under construction</h2>
      </div>
    );
  }
}

const mapDispatchToProps = {
  changeNavColor,
};

export default connect(null, mapDispatchToProps)(Team);
