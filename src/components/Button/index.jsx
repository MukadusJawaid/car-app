import classes from "./Button.module.css";

export default function Button({ label, className, onClick, variant }) {
  return (
    <div className={classes.buttonContainer}>
      <button
        onClick={onClick}
        className={`${classes.button} ${classes[variant]} ${className}`}
      >
        {label}
      </button>
    </div>
  );
}
