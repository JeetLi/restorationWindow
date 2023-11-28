import Lottie from "lottie-react";
import done from "../../content/doneAnimation.json";

const DoneAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: done,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const style = {
    height: 100,
    weight: 100,
  };

  return <Lottie loop={false} style={style} animationData={done} />;
};

export default DoneAnimation;
