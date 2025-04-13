import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./Input.module.css";

import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import { uniqueInputId } from "../../data/helper";
import clsx from "clsx";

export default function Input({
  setter,
  value,
  label,
  type,
  disabled,
  className,
  placeholder,
  error,
  labelClass,
}) {
  const inputId = uniqueInputId(label);

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={classes.inputContainer}>
      <label htmlFor={inputId} className={clsx(labelClass, classes.label)}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        id={inputId}
        className={`${classes.input} ${className}`}
        type={showPassword && type === "password" ? "text" : type}
        value={value}
        onChange={(e) => setter?.(e.target.value)}
        disabled={disabled}
      />
      {error && <span className={classes.errorText}>{error}</span>}
      {type === "password" && (
        <div
          className={classes.passwordTypeIcon}
          onClick={handlePasswordVisibility}
        >
          {showPassword ? (
            <FaLockOpen color="var(--primary-color)" />
          ) : (
            <FaLock color="var(--primary-color)" />
          )}
        </div>
      )}
    </div>
  );
}

// PropTypes for type checking
Input.propTypes = {
  error: PropTypes?.string,
  setter: PropTypes.func.isRequired,
  value: PropTypes.oneOfType,
  placeholder: PropTypes?.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
