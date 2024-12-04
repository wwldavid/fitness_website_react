import Dumbbell from "../assets/dumbbell.svg";
import Health from "../assets/health.svg";
import Fat from "../assets/fat.svg";
import Run from "../assets/run.svg";

export const programsData = [
  {
    image: <img width="16" height="15" src={Dumbbell} alt="Dumbbell icon" />,
    heading: "Muscle Boost",
    details:
      "Build and tone your muscles with expertly designed exercises aimed at maximizing your physical strength.",
  },
  {
    image: <img width="16" height="17" src={Run} alt="Running icon" />,
    heading: "Endurance Training",
    details:
      "This program focuses on improving your stamina with continuous movements for 20 to 30 minutes.",
  },
  {
    image: <img width="12" height="16" src={Fat} alt="Fat burning icon" />,
    heading: "Achieve Your Fat-Burning Goals",
    details:
      "A tailored program for those determined to burn fat and achieve their fitness goals.",
  },
  {
    image: <img width="20" height="16" src={Health} alt="Fitness icon" />,
    heading: "Healthy Fitness Lifestyle",
    details:
      "A program aimed at people who exercise to stay fit, not to build muscle.",
  },
];
