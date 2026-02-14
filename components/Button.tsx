"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  /**
   * Variante du bouton
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "outline" | "ghost";
  /**
   * Taille du bouton
   * @default "md"
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * État désactivé
   * @default false
   */
  disabled?: boolean;
  /**
   * Largeur complète
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Contenu du bouton
   */
  children: React.ReactNode;
  /**
   * Classe CSS additionnelle
   */
  className?: string;
}

/**
 * Composant Button premium pour la landing page ATEX
 * Avec variantes, états hover/active/disabled et animations Framer Motion
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      disabled = false,
      fullWidth = false,
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    // Configuration des variantes
    const variantStyles = {
      primary: `
        bg-ate-primary-700 text-white border-2 border-transparent
        shadow-premium-md hover:bg-ate-primary-600 hover:shadow-premium-lg
        focus:shadow-[0_0_0_3px_rgba(30,136,244,0.3)]
      `,
      secondary: `
        bg-white text-ate-primary-700 border-2 border-ate-primary-700
        shadow-premium-sm hover:bg-ate-primary-700 hover:text-white hover:shadow-premium-md
        focus:shadow-[0_0_0_3px_rgba(10,46,79,0.3)]
      `,
      outline: `
        bg-transparent text-ate-neutral-600 border-2 border-ate-neutral-300
        hover:border-ate-accent-500 hover:text-ate-accent-500
        focus:shadow-[0_0_0_3px_rgba(255,107,53,0.3)]
      `,
      ghost: `
        bg-transparent text-ate-neutral-600 border border-transparent
        hover:bg-ate-neutral-100 hover:text-ate-primary-700
        focus:shadow-[0_0_0_3px_rgba(10,46,79,0.2)]
      `,
    };

    // Configuration des tailles
    const sizeStyles = {
      sm: "px-4 py-2 text-body-sm",
      md: "px-6 py-3 text-body-md",
      lg: "px-8 py-4 text-body-lg",
      xl: "px-10 py-5 text-body-xl",
    };

    // Classes de base
    const baseStyles = `
      inline-flex items-center justify-center font-semibold
      rounded-lg transition-all duration-300 ease-premium
      disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
      ${fullWidth ? "w-full" : ""}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${className}
    `;

    return (
      <motion.button
        ref={ref}
        disabled={disabled}
        className={baseStyles}
        whileHover={!disabled ? { y: -2 } : undefined}
        whileTap={!disabled ? { y: 0, scale: 0.98 } : undefined}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
