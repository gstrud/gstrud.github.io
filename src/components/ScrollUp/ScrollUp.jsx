import React, { useState } from 'react';
import './ScrollUp.css';

const ScrollUp = () => {
  const MoveUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  window.onscroll = () => {
    const scrollBtn = document.querySelector('.isShowBtn');
    if (window.scrollY > 700) {
      scrollBtn.classList.remove('hide');
    } else if (window.scrollY < 700) {
      scrollBtn.classList.add('hide');
    }
  };
  return (
    <div id='scrollUp' className='isShowBtn' onClick={MoveUp}>
      <i className='bi bi-arrow-up-circle-fill'></i>
    </div>
  );
};

export default ScrollUp;
