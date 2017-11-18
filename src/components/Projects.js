import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeNavColor } from '../redux/actions';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';

class Projects extends Component {
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
    this.props.changeNavColor(1);
  }
  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '40px', justifyContent: 'space-around' }}>
          <div style={{ textAlign: 'center', backgroundColor: '#4CAF50', width: window.innerWidth * 0.31, padding: '25px 0 25px 0', color: 'white' }}>
            <img src={project1} alt="Low-cost smart house" width={window.innerWidth * 0.3} />
            <p style={{ fontSize: '20px', paddingTop: '10px' }}>Low-cost smart house</p>
          </div>
          <div style={{ textAlign: 'center', backgroundColor: '#4CAF50', width: window.innerWidth * 0.31, padding: '25px 0 25px 0', color: 'white' }}>
            <img src={project2} alt="AI controlled SH" width={window.innerWidth * 0.3} style={{ filter: 'blur(4px)' }} />
            <p style={{ fontSize: '20px', paddingTop: '10px' }}>AI controlled smart house</p>
          </div>
        </div>
      
      </div>
    );
  }
}

const mapDispatchToProps = {
  changeNavColor,
};

export default connect(null, mapDispatchToProps)(Projects);
