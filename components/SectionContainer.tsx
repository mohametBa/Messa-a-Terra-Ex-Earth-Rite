"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type BackgroundVariant =
  | "white"
  | "gray-50"
  | "primary-50"
  | "dark"
  | "transparent";

interface SectionContainerProps {
  background?: BackgroundVariant;
  maxWidth?:
    | "screen-sm"
    | "screen-md"
    | "screen-lg"
    | "screen-xl"
    | "screen-2xl"
    | "full";
  padding?: "small" | "medium" | "large" | "xlarge";
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Background variants
 */
const backgroundStyles: Record<BackgroundVariant, string> = {
  white: "bg-white",
  "gray-50": "bg-ate-neutral-50",
  "primary-50": "bg-ate-primary-50",
  dark: "bg-ate-neutral-900",
  transparent: "bg-transparent",
};

/**
 * Max width styles
 */
const maxWidthStyles: Record<string, string> = {
  "screen-sm": "max-w-screen-sm",
  "screen-md": "max-w-screen-md",
  "screen-lg": "max-w-screen-lg",
  "screen-xl": "max-w-screen-xl",
  "screen-2xl": "max-w-screen-2xl",
  full: "max-w-full",
};

/**
 * Reduced vertical spacing (more compact industrial layout)
 */
const paddingStyles: Record<string, string> = {
  small: "py-6 md:py-8",
  medium: "py-8 md:py-12",
  large: "py-12 md:py-16",
  xlarge: "py-16 md:py-20",
};

export const SectionContainer = ({
  background = "white",
  maxWidth = "screen-xl",
  padding = "medium",
  children,
  className = "",
  id,
}: SectionContainerProps) => {
  return (
    <section
      id={id}
      className={`
        relative w-full
        scroll-mt-24
        ${backgroundStyles[background]}
        ${paddingStyles[padding]}
      `}
    >
      {/* Subtle grid pattern for dark sections */}
      {background === "dark" && (
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      )}

      <div
        className={`
          relative mx-auto
          px-4 sm:px-6 lg:px-8
          ${maxWidthStyles[maxWidth]}
          ${className}
        `}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
