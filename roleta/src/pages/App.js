import React, { useState } from 'react';
import WheelComponent from '../components/wheel';
import '../index.css';
import LogoVarejo from '../assets/Logo_Varejo.jpeg';
import LogoFocus from '../assets/Logo_Focus.jpeg';
import ClickIcon from '../assets/Click_Icon.jpeg';

import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

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
        <p>Varejo+ Experience</p>
      </div>

      <img className="icone-click" src={ClickIcon} alt="Ícone de Clique" />

      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="#FCF4F7"
        contrastColor="white"
        buttonText=""
        isOnlyOnce={false}
        size={260}
        upDuration={100}
        downDuration={300}
        fontFamily="Arial"
      />
      <div className="coin_left_img">
        <img src={LogoVarejo} alt="Varejo+ Logo" />
      </div>
      <div className="coin_right_img">
        <img src={LogoFocus} alt="Focus Logo" />
      </div>
    </>
  );
};

export default App;
