import Image from "next/image";
import { SNAPS } from "../assets/images";

import classes from "./gallery-section.module.css";
import Title from "../components/Title/Title";

function GallerySection() {
  return (
    <section className={classes.gallery}>
      <Title>
        <h3>사진 구경하기</h3>
        <p>
          오키나와에서 직접 촬영한 셀프 웨딩 기록을 공유합니다. <br />
          여름 햇살이 반짝이는 모래 위에서 자연스럽게 웃고, <br />
          떠들면서 인생에서 가장 소중한 순간을 담아냈어요.{" "}
        </p>
      </Title>
      <div className={classes.container}>
        {SNAPS.map((image, idx) => (
          <Image
            key={`snap${idx}`}
            src={image}
            alt={"image"}
            style={{
              width: "100%",
              height: "350px",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
