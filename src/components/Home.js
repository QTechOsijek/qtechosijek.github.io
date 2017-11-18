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
      <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <div style={{ paddingVertical: '30px', display: 'block', width: window.innerWidth * 0.5 }}>
          <Slider draggable={false} dots centerMode infinite speed={500} slidesToShow={1} slidesToScroll={1} fade lazyLoad autoplay autoplaySpeed={4500}>
            <div style={{ maxWidth: '848px', height: '479px', position: 'relative', textAlign: 'center', alignSelf: 'center', margin: 'auto' }}>
              <img src={pic1} alt="" style={{ filter: 'blur(15px)', width: '100%' }} />
              <div style={{ position: 'absolute', top: '45%', left: '30%', fontSize: '40px', color: 'white', fontFamily: 'Anton' }}>Inspiring innovation</div>
            </div>
            <div style={{ maxWidth: '848px', height: '479px', position: 'relative', textAlign: 'center', alignSelf: 'center', margin: 'auto' }}>
              <img src={pic2} alt="" style={{ filter: 'blur(15px)', width: '100%' }} />
              <div style={{ position: 'absolute', top: '45%', left: '35%', fontSize: '40px', color: 'white', fontFamily: 'Anton' }}>Amazing projects</div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
