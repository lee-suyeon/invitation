import Image from "next/image";
import mainImage from "../../public/photos/main.png";
import Dday from "../components/Dday";

import classes from "./main-section.module.css";

function MainSection() {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <Image
          src={mainImage}
          alt="main-image"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <div className={classes.text}>다운, 수연 결혼해요!!!</div>
        <Dday />
      </div>
    </div>
  );
}

export default MainSection;
