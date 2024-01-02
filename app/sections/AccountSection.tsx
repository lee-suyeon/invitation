"use client";
import { useState, useRef } from "react";
import classes from "./account-section.module.css";

import classNames from "classnames/bind";
import Button from "../components/Button/Button";
import Title from "../components/Title/Title";
const cx = classNames.bind(classes);

function AccountSection() {
  const [showGroomAccount, setShowGroomAccount] = useState(false);
  const [showBrideAccount, setShowBrideAccount] = useState(false);

  const brideAccountRef = useRef(null);

  const groomAccountClickHandler = () => {
    setShowGroomAccount((prev) => !prev);
  };

  const brideAccountClickHandler = () => {
    setShowBrideAccount((prev) => !prev);
  };

  const copyClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  return (
    <section className={classes.account}>
      <Title>
        <h3>마음 전하실 곳</h3>
        <p>
          참석이 어려우신 분들을 위해 <br />
          계좌번호를 기재하였습니다. <br />
          너그러운 마음으로 양해부탁드립니다.
        </p>
      </Title>
      <div>
        <div className={cx("account-btn")} onClick={groomAccountClickHandler}>
          신랑측 계좌번호 보기
          {showGroomAccount && (
            <div>
              <div className={classes.bar} />
              <div className={classes.panel}>
                <span>국민은행 123-456-789 김다운</span>
                <Button color="primary" onClick={copyClickHandler}>
                  복사
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className={cx("account-btn")} onClick={brideAccountClickHandler}>
          신부측 계좌번호 보기
          {showBrideAccount && (
            <div>
              <div className={classes.bar} />
              <div className={classes.panel}>
                <div>
                  <span>우리은행</span>
                  <span ref={brideAccountRef}>123-456-789</span>
                  <span>이수연</span>
                </div>
                <Button color="primary" onClick={copyClickHandler}>
                  복사
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AccountSection;
