import { useState } from "react";

import classes from "./message-form.module.css";

const MessageForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    message: "",
  });
  const { name, message } = inputs;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 이름, 메세지 저장

    // 초기화
  };

  return (
    <form onSubmit={submitHandler} className={classes["message-form"]}>
      <div>
        <input
          type="text"
          id="name"
          name="name"
          className={classes.name}
          placeholder="이름"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="message"
          name="message"
          className={classes.message}
          placeholder="축하메세지를 남겨주세요."
          value={message}
          onChange={handleInputChange}
        />
      </div>
      <button>메세지 보내기</button>
    </form>
  );
};

export default MessageForm;
