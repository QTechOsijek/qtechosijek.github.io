import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeNavColor } from '../redux/actions';

class About extends Component {
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
    this.props.changeNavColor(3);
  }
  render() {
    return (
      <div style={{ color: 'white', flex: 1 }}>
        <div style={{ width: window.innerWidth, backgroundColor: '#67AECA', padding: '25px 15px' }}>
          <h1 style={{ fontSize: '38px', padding: '10px', fontWeight: 'bold' }}>What is this actually?</h1>
          <ul style={{ fontSize: '28px', marginLeft: '50px' }}>
            <li style={{ margin: '35px' }}>This is an organization consisting of young people with different backgrounds but with same passion</li>
            <li style={{ margin: '35px' }}>Our passion is to make great projects and present them on upcoming Maker Faire</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  changeNavColor,
};

export default connect(null, mapDispatchToProps)(About);
