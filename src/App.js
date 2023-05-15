import classes from "./App.module.css";
//import WheelComponent from "react-wheel-of-prizes";
import WheelComponent from "./WheelComponent";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  const segments = ["Varejo", "Logística", "Operacional"];
  const segColors = ["#faa230", "#055cba", "#bb1625"];
  const onFinished = (winner) => {
    console.log(winner);
    setTimeout(() => {
      navigate(`/${winner}`);
    }, 600);
  };
  return (
    <div className={classes.App}>
      {/*<img src="https://www.freeiconspng.com/thumbs/click-png/hands-click-png-icon-5.png" />*/}
      <div>
        <div className={classes.container}>
          <WheelComponent
            segments={segments}
            segColors={segColors}
            onFinished={(winner) => onFinished(winner)}
            primaryColor="#4E4F50"
            contrastColor="white"
            buttonText="Girar"
            isOnlyOnce={false}
            size={170}
            upDuration={50}
            downDuration={600}
            fontFamily="Arial"
          />
        </div>
      </div>
    </div>
  );
}
