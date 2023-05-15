import React, { useState } from 'react';
import WheelComponent from '../components/wheel';
import '../index.css';
import coin_left from '../assets/coins.png';
import right_coins from '../assets/right_coins.png';
import Winned from '../components/winned-sum/winned';

import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [winnedSum, setWinnedSum] = useState(0);
  const segments = ['Varejo', 'Logística', 'Operacional'];
  const segColors = ['#faa230', '#055cba', '#bb1625'];
  const onFinished = (winner) => {
    console.log(winner);
    setTimeout(() => {
      navigate(`/${winner}`);
    }, 600);
  };

  return (
    <>
      <div className="main_text">
        <b>
          S<span>pin</span> wh<span>ee</span>l
        </b>
      </div>

      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText=""
        isOnlyOnce={false}
        size={260}
        upDuration={100}
        downDuration={1000}
        fontFamily="Arial"
      />
      <div className="right_text">
        <b>
          W<span>in</span> mo<span>ne</span>y
        </b>
      </div>
      <div className="coin_left_img">
        <img src={coin_left} alt="coin_left" />
      </div>
      <div className="coin_right_img">
        <img src={right_coins} alt="coin_right" />
      </div>

      {!modal || <Winned winnedSum={winnedSum} setModal={setModal} />}
    </>
  );
};

export default App;
