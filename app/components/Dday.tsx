import classes from "./dday.module.css";

function calculateDaysUntilDday(dday: string): number {
  const ddayDate = new Date(dday);
  const currentDate = new Date();

  let timeDifference = ddayDate.getTime() - currentDate.getTime();

  let days = Math.ceil(timeDifference / (1000 * 3600 * 24));

  return days;
}

function Dday() {
  const dday = calculateDaysUntilDday("2024-04-20");

  return (
    <div className={classes.dday}>
      <span>{`D-${dday}`}</span>
    </div>
  );
}

export default Dday;
