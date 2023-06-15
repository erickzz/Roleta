import React from 'react';
import WheelComponent from '../components/wheel';
import '../index.css';
import LogoVarejo from '../assets/Logo_Varejo.png';
import LogoFocus from '../assets/Logo_Focus.png';
import ClickIcon from '../assets/Click_Icon.jpeg';
import MarcaSebrae from '../assets/marca-sebrae.png';

import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const segments = ['Varejo', 'Logística', 'Operacional'];
  const segColors = ['#faa230', '#055cba', '#bb1625'];
  const onFinished = (winner) => {
    //console.log(winner);
    setTimeout(() => {
      navigate(`/${winner}`);
    }, 600);
  };

  let rotacao = Math.floor(Math.random() * 400);

  if (rotacao < 150) {
    rotacao = 150;
  }

  console.log(rotacao);

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
        upDuration={rotacao}
        downDuration={600}
        fontFamily="Arial"
      />
      <div className="left_img">
        <img src={LogoVarejo} alt="Logo Parque Científico Tecnológico" />
      </div>
      <div className="right_img">
        <img src={LogoFocus} alt="Logo Sebrae" />
      </div>
    </>
  );
};

export default App;
