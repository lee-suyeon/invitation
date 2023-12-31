"use client";

import { useState } from "react";
import Image from "next/image";
import classes from "./message-section.module.css";
import { couple } from "../assets/images";
import Messages from "../components/Messages";
import MessageForm from "../components/MessageForm";

const sampleMessages = [
  { id: 1, name: "제우스", text: "오케오케 형이야~" },
  { id: 2, name: "오너", text: "결혼 축하해요!! " },
  { id: 3, name: "페이커", text: "골든로드 제가 막겠습니다" },
  { id: 4, name: "구마유시", text: "결혼 축하해요!! " },
  { id: 5, name: "케리아", text: "축하해요!!" },
];

const { suyeon, dawoon } = couple;
function MessageSection() {
  const [selectedTo, setSelectedTo] = useState("");

  const clickHandler = (target: string) => {
    setSelectedTo(target);
  };

  const selectedClassName = selectedTo ? classes.selected : "";

  return (
    <section className={classes.message}>
      <div className={classes.title}>
        <h3>축하메세지</h3>
        <p>
          여러분의 따뜻한 축하가 저희의 새로운 시작을 <br />
          더욱 의미 있게 만들어 줄거에요!
        </p>
      </div>
      <div className={classes.to}>
        {(!selectedTo || selectedTo === "dawoon") && (
          <div
            onClick={() => clickHandler("dawoon")}
            className={selectedClassName}
          >
            <Image src={dawoon} alt="다운" width={100} height={100} />
            <p>
              다운에게 <br /> 메세지 남기기
            </p>
          </div>
        )}
        {(!selectedTo || selectedTo === "suyeon") && (
          <div
            onClick={() => clickHandler("suyeon")}
            className={selectedClassName}
          >
            <Image src={suyeon} alt="수연" width={100} height={100} />
            <p>
              수연에게 <br /> 메세지 남기기
            </p>
          </div>
        )}
      </div>
      <Messages messages={sampleMessages} />
      <MessageForm />
    </section>
  );
}

export default MessageSection;
