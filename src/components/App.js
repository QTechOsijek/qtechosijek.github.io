import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import PageNotFound from './PageNotFound';
import s from '../styles/app.style';
import { Projects } from './Projects';
import { Team } from './Team';
import { About } from './About';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: ['#4CAF50', '#333', '#333', '#333'],
    };
  }
  render() {
    const { background } = this.state;
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
            backgroundColor: '#333' }}
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
      </div>
    );
  }
}
