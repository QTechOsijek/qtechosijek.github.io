import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeNavColor } from '../redux/actions';

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
      <p>Under construction</p>
    );
  }
}

const mapDispatchToProps = {
  changeNavColor,
};

export default connect(null, mapDispatchToProps)(Projects);
