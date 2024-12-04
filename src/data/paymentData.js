import basicIm from "../assets/basic.svg";
import premiumIm from "../assets/premium.svg";
import proIm from "../assets/pro.svg";
export const paymentData = [
  {
    icon: <img width="15" height="13" src={basicIm} alt="basic icon" />,
    name: "BASIC PLAN",
    price: "85",
    features: [
      "2 hours of excercises",
      "Free consultaion to coaches",
      "Access to The Community",
    ],
  },
  {
    icon: <img width="28" height="24" src={premiumIm} alt="premium icon" />,
    name: "PREMIUM PLAN",
    price: "120",
    features: [
      "5 hour of excercises",
      "Free consultaion of Coaches",
      "Access to minibar",
    ],
  },
  {
    icon: <img width="16" height="15" src={proIm} alt="pro icon" />,
    name: "PRO PLAN",
    price: "155",
    features: [
      "8 hours of excercises",
      "Consultation of Private Coach",
      "Free Fitness Merchandises",
    ],
  },
];
