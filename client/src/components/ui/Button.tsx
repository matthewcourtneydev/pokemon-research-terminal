import type {
    ButtonHTMLAttributes,
    ReactNode,
  } from "react";
  
  type ButtonVariant = "primary" | "secondary" | "ghost";
  type ButtonSize = "small" | "medium" | "large";
  
  type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    isFullWidth?: boolean;
  };
  
  export function Button({
    children,
    variant = "primary",
    size = "medium",
    isFullWidth = false,
    className = "",
    type = "button",
    ...props
  }: ButtonProps) {
    const classes = [
      "ui-button",
      `ui-button--${variant}`,
      `ui-button--${size}`,
      isFullWidth ? "ui-button--full-width" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");
  
    return (
      <button
        className={classes}
        type={type}
        {...props}
      >
        {children}
      </button>
    );
  }