"use client";

import Image from "next/image";
import mainImage from "../../public/photos/main.png";
import styled from "@emotion/styled";

function MainSection() {
  return (
    <SectionLayout>
      <div className="main-content">
        <Image
          src={mainImage}
          alt="main-image"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <div className="main-text">다운, 수연 결혼해요!!!</div>
      </div>
    </SectionLayout>
  );
}

const SectionLayout = styled.section`
  .main-content {
    position: relative;
  }

  img {
    display: block;
  }

  .main-text {
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    z-index: 999;
    color: #fff;
    font-weight: 300;
    text-align: center;
    width: 100%;
  }
`;

export default MainSection;
