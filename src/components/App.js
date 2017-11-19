import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Home } from './Home';
import PageNotFound from './PageNotFound';
import s from '../styles/app.style';
import Projects from './Projects';
import Team from './Team';
import About from './About';

export class App extends Component {
  static PropTypes = {
    background: PropTypes.array.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { background } = this.props;
    return (
      <div style={s.root}>
        <h1 style={s.title}>QTech Osijek</h1>
        <ul
          style={{
            listStyleType: 'none',
            width: window.innerWidth,
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            backgroundColor: '#675682',
            alignItems: 'center',
          }}
        >
          <li style={{ float: 'left' }}>
            <a style={{ color: 'white', display: 'block', textDecoration: 'none', textAlign: 'center', padding: '14px 16px', backgroundColor: background[0] }} href="/">Home</a>
          </li>
          <li style={{ float: 'left' }}>
            <a style={{ color: 'white', display: 'block', textDecoration: 'none', textAlign: 'center', padding: '14px 16px', backgroundColor: background[1] }} href="/projects">Projects</a>
          </li>
          <li style={{ float: 'left' }}>
            <a style={{ color: 'white', display: 'block', textDecoration: 'none', textAlign: 'center', padding: '14px 16px', backgroundColor: background[2] }} href="/team">Team</a>
          </li>
          <li style={{ float: 'left' }}>
            <a style={{ color: 'white', display: 'block', textDecoration: 'none', textAlign: 'center', padding: '14px 16px', backgroundColor: background[3] }} href="/about">About</a>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/team" component={Team} />
          <Route path="/about" component={About} />
          <Route component={PageNotFound} />
        </Switch>
        <footer style={{ color: 'white', textAlign: 'center', backgroundColor: '#675682', width: window.innerWidth, height: '100px', position: 'absolute', bottom: '1px' }}>
          <p style={{ fontSize: '20px', paddingTop: '25px' }}>Our contact: <a href="mailto:qtyos@oulook.com" target="_top">qtyos@oulook.com</a></p>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(App);
