import type {
    HTMLAttributes,
    ReactNode,
  } from "react";
  
  export type PokemonType =
    | "normal"
    | "fire"
    | "water"
    | "electric"
    | "grass"
    | "ice"
    | "fighting"
    | "poison"
    | "ground"
    | "flying"
    | "psychic"
    | "bug"
    | "rock"
    | "ghost"
    | "dragon"
    | "dark"
    | "steel"
    | "fairy";
  
  type BadgeVariant = "neutral" | "accent" | PokemonType;
  
  type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
    children: ReactNode;
    variant?: BadgeVariant;
  };
  
  export function Badge({
    children,
    variant = "neutral",
    className = "",
    ...props
  }: BadgeProps) {
    const classes = [
      "ui-badge",
      `ui-badge--${variant}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");
  
    return (
      <span className={classes} {...props}>
        {children}
      </span>
    );
  }