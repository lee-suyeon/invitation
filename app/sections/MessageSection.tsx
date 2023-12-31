"use client";

import { useState } from "react";
import Image from "next/image";
import classes from "./message-section.module.css";
import { couple } from "../assets/images";
import Messages from "../components/Messages";
import MessageForm from "../components/MessageForm";
import Title from "../components/Title/Title";

const sampleMessages = [
  { id: 1, name: "제우스", text: "오케오케 형이야~" },
  { id: 2, name: "오너", text: "결혼 축하해요!! " },
  { id: 3, name: "페이커", text: "골든로드 제가 막겠습니다" },
  { id: 4, name: "구마유시", text: "결혼 축하해요!! " },
  { id: 5, name: "케리아", text: "축하해요!!" },
];

function MessageSection() {
  return (
    <section className={classes.message}>
      <Title>
        <h3>축하메세지</h3>
        <p>
          여러분의 따뜻한 축하가 저희의 새로운 시작을 <br />
          더욱 의미 있게 만들어 줄거에요!
        </p>
      </Title>
      <div className={classes.to}>
        <div className={classes.photo}>photo</div>
      </div>
      <Messages messages={sampleMessages} />
      <MessageForm />
    </section>
  );
}

export default MessageSection;
