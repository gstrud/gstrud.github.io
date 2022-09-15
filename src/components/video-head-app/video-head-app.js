import React, { Component } from 'react';
import video from './rain.mp4';
import './video-head-app.css';

export default class VideoHeadApp extends Component {
  render() {
    return (
      <div className='video-head-cont'>
        <video autoPlay muted loop id='myVideo' className='fluid'>
          <source src={video} type='video/mp4' />
          Your browser does not support HTML5 video.
        </video>

        <div className='up-menu'>
          <div className='up-menu-text'>
            <h1>Информационный центр</h1>
            <p>
              Деятельность ИЦ ГСТ направлена в помощь по трудоустройству
              студентов и выпускников.
            </p>
            <div className='up-menu-line'></div>
            <div className='up-menu-button'>
              <div>
                <a href='#cont-app'>
                  <button className='btn  btn-info btn-student'>
                    Студенту
                  </button>
                </a>
              </div>
              <div>
                <a href='#form-send'>
                  <button id='myBtn' className='btn  btn-success btn-worker'>
                    Работодателю
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
