import classes from "./title.module.css";

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <div className={classes.title}>{children}</div>;
};

export default Title;
