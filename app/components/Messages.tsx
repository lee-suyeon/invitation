import classes from "./messages.module.css";

interface Message {
  id: number;
  name: string;
  text: string;
}

interface MessagesProps {
  messages: Message[];
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  if (!messages.length) {
    <div>축하메세지를 입력해주세요!</div>;
  }

  return (
    <div className={classes.messages}>
      {messages.map((message) => (
        <div key={message.id} className={classes.message}>
          <p>{message.text}</p>
          <span>{`- ${message.name} -`}</span>
        </div>
      ))}
    </div>
  );
};

export default Messages;
