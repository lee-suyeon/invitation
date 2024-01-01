import classes from "./button.module.css";
import classNames from "classnames/bind";

interface ButtonProps {
  children: React.ReactNode;
  color: "primary" | "secondary";
  onClick: () => void;
}

const cx = classNames.bind(classes);

const Button: React.FC<ButtonProps> = ({
  children,
  color = "secondary",
  onClick,
}) => {
  return (
    <button className={cx("button", color)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
