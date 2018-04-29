import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactTransitionGroup from 'react-addons-transition-group';
import {  slideInRight, slideInLeft  } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { changeNavColor } from '../redux/actions';
import Particles from 'react-particles-js';
import member1 from '../images/member1.png';
import member2 from '../images/member2.png';
import member3 from '../images/member3.png';
import member4 from '../images/member4.png';
const styles = {
  memberBox: {

    textAlign: 'center',
    backgroundColor: '#67AECA',
    width: window.innerWidth * 0.31,
    padding: '25px 0 25px 0',
    color: 'white',
    zoom: 0.70

  },
  tdpadLeft: {
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft'),
    animationDuration: '2s',
    padding: "55px"
  },
  tdpadRight: {
    animationName: Radium.keyframes(slideInRight, 'slideInRight'),
    animationDuration: '2s',
    padding: "55px"
  }

}


class Team extends Component {
  static propTypes = {
    changeNavColor: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      variable: 0,

    };
  }


  componentWillMount() {
    this.props.changeNavColor(2);
  }
  render() {
    const { memberBox, tdpadLeft, tdpadRight } = styles;
    return (

      <div style={{ overflow: 'hidden', minHeight: window.innerHeight * 0.8 }}>
        <StyleRoot>
          <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '30px', justifyContent: 'space-around', paddingBottom: '30px', minHeight: window.innerHeight * 0.63 }}>
            <table>
              <tr>
                <td style={tdpadLeft}>
                  <div style={memberBox}>
                    <img src={member1} alt="Matej Eršetić" width={window.innerWidth * 0.3} />
                    <p style={{ fontSize: '40px', paddingTop: '10px' }}>Matej Eršetić</p>
                    <p style={{ fontSize: '40px', paddingTop: '5px' }}>PR manager</p>
                  </div>
                </td>
                <td style={tdpadRight}>
                  <div style={memberBox}>
                    <img src={member2} alt="Petar Sušac" width={window.innerWidth * 0.3} />
                    <p style={{ fontSize: '40px', paddingTop: '10px' }}>Petar Sušac</p>
                    <p style={{ fontSize: '40px', paddingTop: '5px' }}>Backend developer</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={tdpadLeft}>
                  <div style={memberBox}>
                    <img src={member3} alt="Dominik Putarić" width={window.innerWidth * 0.3} />
                    <p style={{ fontSize: '40px', paddingTop: '10px' }}>Dominik Putarić</p>
                    <p style={{ fontSize: '40px', paddingTop: '5px' }}>Full stack developer</p>
                  </div>
                </td>
                <td style={tdpadRight}>
                  <div style={memberBox}>
                    <img src={member4} alt="Filip Bilandžija" width={window.innerWidth * 0.3} />
                    <p style={{ fontSize: '40px', paddingTop: '10px' }}>Filip Bilandžija</p>
                    <p style={{ fontSize: '40px', paddingTop: '5px' }}>CTO and mobile developer</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </StyleRoot>
      </div>

    );
  }
}

const mapDispatchToProps = {
  changeNavColor,
};

export default connect(null, mapDispatchToProps)(Team);
