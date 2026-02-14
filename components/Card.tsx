"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type CardVariant = "premium" | "feature" | "glass";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Variante du card
   * @default "premium"
   */
  variant?: CardVariant;
  /**
   * Contenu du card
   */
  children: ReactNode;
  /**
   * Classe CSS additionnelle
   */
  className?: string;
  /**
   * Effet hover activé
   * @default true
   */
  hoverEffect?: boolean;
}

/**
 * Composant Card premium pour la landing page ATEX
 * Avec premium shadow, hover lift effect et glassmorphism variant
 */
const CardComponent = ({
  variant = "premium",
  children,
  className = "",
  hoverEffect = true,
  ...props
}: CardProps) => {
  // Configuration des variantes
  const variantStyles: Record<CardVariant, string> = {
    premium: `
      bg-white border border-ate-neutral-200 shadow-premium-md
      hover:shadow-premium-xl hover:-translate-y-1 hover:border-ate-primary-200
    `,
    feature: `
      bg-gradient-to-br from-ate-neutral-50 to-white
      border border-ate-neutral-200 shadow-premium-md
      hover:shadow-premium-xl hover:-translate-y-2 hover:border-ate-accent-200
    `,
    glass: `
      bg-white/80 backdrop-blur-16 border border-white/20 shadow-premium-lg
      hover:shadow-premium-xl hover:-translate-y-1
    `,
  };

  // Classes de base
  const baseStyles = `
    relative overflow-hidden rounded-xl transition-all duration-500 ease-premium
    ${variantStyles[variant]}
    ${className}
  `;

  const MotionCard = motion.div;

  return (
    <MotionCard
      className={baseStyles}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hoverEffect ? { y: -4 } : undefined}
      transition={{ duration: 0.4, ease: "easeOut" }}
      {...(props as React.ComponentProps<typeof MotionCard>)}
    >
      {/* Effet de gradient au hover pour la variante feature */}
      {variant === "feature" && (
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-ate-accent-500/5 to-ate-primary-500/5" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </MotionCard>
  );
};

CardComponent.displayName = "Card";

export interface CardHeaderProps {
  /**
   * Titre du card
   */
  title?: string;
  /**
   * Sous-titre ou description
   */
  subtitle?: string;
  /**
   * Classe CSS additionnelle
   */
  className?: string;
  children?: ReactNode;
}

/**
 * En-tête de card avec titre et sous-titre stylisés
 */
export const CardHeader = ({
  title,
  subtitle,
  className = "",
  children,
}: CardHeaderProps) => {
  return (
    <div className={`p-6 pb-0 ${className}`}>
      {title && (
        <h3 className="text-h3 font-semibold text-ate-neutral-900">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="mt-2 text-body-md text-ate-neutral-600">{subtitle}</p>
      )}
      {children}
    </div>
  );
};

/**
 * Corps de card avec padding standard
 */
export const CardBody = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

/**
 * Pied de card avec padding standard
 */
export const CardFooter = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`p-6 pt-0 mt-auto border-t border-ate-neutral-100 ${className}`}>
      {children}
    </div>
  );
};

export const Card = Object.assign(CardComponent, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});

export default Card;
