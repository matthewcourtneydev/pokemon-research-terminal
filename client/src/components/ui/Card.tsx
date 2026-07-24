import type {
    HTMLAttributes,
    ReactNode,
  } from "react";
  
  type CardVariant = "default" | "raised" | "interactive";
  
  type CardProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
    variant?: CardVariant;
  };
  
  export function Card({
    children,
    variant = "default",
    className = "",
    ...props
  }: CardProps) {
    const classes = [
      "ui-card",
      `ui-card--${variant}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");
  
    return (
      <div className={classes} {...props}>
        {children}
      </div>
    );
  }
  
  type CardSectionProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
  };
  
  export function CardHeader({
    children,
    className = "",
    ...props
  }: CardSectionProps) {
    return (
      <div
        className={`ui-card__header ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
  
  export function CardContent({
    children,
    className = "",
    ...props
  }: CardSectionProps) {
    return (
      <div
        className={`ui-card__content ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
  
  export function CardFooter({
    children,
    className = "",
    ...props
  }: CardSectionProps) {
    return (
      <div
        className={`ui-card__footer ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }