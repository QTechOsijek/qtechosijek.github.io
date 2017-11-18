import React, { Component } from 'react';
import Slider from 'react-slick';
import pic1 from '../images/qtech1.png';
import pic2 from '../images/qtech2.png';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
        <div style={{ paddingVertical: '30px', display: 'block', width: window.innerWidth * 0.62, marginTop: '20px', textAlign: 'center' }}>
          <Slider draggable={false} dots centerMode infinite speed={500} slidesToShow={1} slidesToScroll={1} fade lazyLoad autoplay autoplaySpeed={4500}>
            <div style={{ maxWidth: '1132px', height: '632px', position: 'relative', textAlign: 'center', alignSelf: 'center', margin: 'auto' }}>
              <img src={pic1} alt="" style={{ filter: 'blur(15px)', width: '100%' }} />
              <div style={{ position: 'absolute', top: '45%', left: '28%', fontSize: '60px', color: 'white', fontFamily: 'Anton' }}>Inspiring innovation</div>
            </div>
            <div style={{ maxWidth: '1132px', height: '632px', position: 'relative', textAlign: 'center', alignSelf: 'center', margin: 'auto' }}>
              <img src={pic2} alt="" style={{ filter: 'blur(15px)', width: '100%' }} />
              <div style={{ position: 'absolute', top: '45%', left: '31%', fontSize: '60px', color: 'white', fontFamily: 'Anton' }}>Amazing projects</div>
            </div>
          </Slider>
        </div>
        <div style={{ marginTop: '35px', paddingBottom: '25px', width: window.innerWidth, backgroundColor: '#4CAF50', color: 'white' }}>
          <h2 style={{ marginLeft: '40px', fontSize: '50px' }}>What are we doing?</h2>
          <ul style={{ fontSize: '35px', marginLeft: '80px' }}>
            <li style={{ margin: '35px' }}>Merging our individual projects and extending them for wider use</li>
            <li style={{ margin: '35px' }}>Motivating others</li>
            <li style={{ margin: '35px' }}>Learning and having fun</li>
          </ul>
        </div>
      </div>
    );
  }
}
