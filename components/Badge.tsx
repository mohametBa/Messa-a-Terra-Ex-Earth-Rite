"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type BadgeVariant = "success" | "info" | "warning" | "danger" | "accent";
type BadgeSize = "sm" | "md";

interface BadgeProps {
  /**
   * Variante du badge
   * @default "info"
   */
  variant?: BadgeVariant;
  /**
   * Taille du badge
   * @default "md"
   */
  size?: BadgeSize;
  /**
   * Contenu du badge
   */
  children: ReactNode;
  /**
   * Classe CSS additionnelle
   */
  className?: string;
  /**
   * Icône optionnelle (positionnée à gauche)
   */
  icon?: ReactNode;
  /**
   * Style plein ou contour
   * @default "filled"
   */
  styleType?: "filled" | "outline";
}

/**
 * Configuration des variantes de couleurs
 */
const variantStyles: Record<BadgeVariant, { filled: string; outline: string }> = {
  success: {
    filled: "bg-ate-success-100 text-ate-success-700 border-transparent",
    outline: "bg-transparent text-ate-success-700 border-ate-success-300",
  },
  info: {
    filled: "bg-ate-primary-100 text-ate-primary-700 border-transparent",
    outline: "bg-transparent text-ate-primary-700 border-ate-primary-300",
  },
  warning: {
    filled: "bg-ate-warning-100 text-ate-warning-700 border-transparent",
    outline: "bg-transparent text-ate-warning-700 border-ate-warning-300",
  },
  danger: {
    filled: "bg-ate-danger-100 text-ate-danger-700 border-transparent",
    outline: "bg-transparent text-ate-danger-700 border-ate-danger-300",
  },
  accent: {
    filled: "bg-ate-accent-100 text-ate-accent-700 border-transparent",
    outline: "bg-transparent text-ate-accent-700 border-ate-accent-300",
  },
};

/**
 * Configuration des tailles
 */
const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2.5 py-1 text-body-xs",
  md: "px-3 py-1.5 text-body-sm",
};

/**
 * Composant Badge pour les certifications ATEX
 * Avec variantes success (green), info (blue) et tailles small/medium
 */
export const Badge = ({
  variant = "info",
  size = "md",
  children,
  className = "",
  icon,
  styleType = "filled",
}: BadgeProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`
        inline-flex items-center font-semibold uppercase tracking-wide
        rounded-full border transition-all duration-200
        ${sizeStyles[size]}
        ${variantStyles[variant][styleType]}
        ${className}
      `}
    >
      {icon && (
        <span className="mr-1.5 flex-shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </motion.span>
  );
};

Badge.displayName = "Badge";

/**
 * Badge de certification ATEX spécialisé
 */
export const CertificationBadge = ({
  certification,
  size = "md",
  className = "",
}: {
  certification: string;
  size?: BadgeSize;
  className?: string;
}) => {
  return (
    <Badge variant="success" size={size} className={className}>
      <span className="mr-1">✓</span>
      {certification}
    </Badge>
  );
};

/**
 * Badge d'information spécialisé pour la conformité
 */
export const ComplianceBadge = ({
  text,
  size = "md",
  className = "",
}: {
  text: string;
  size?: BadgeSize;
  className?: string;
}) => {
  return (
    <Badge variant="info" size={size} className={className}>
      <span className="mr-1">ℹ</span>
      {text}
    </Badge>
  );
};

export default Badge;
