import React from "react";
import "@/app/globals.css";

export interface TextProps {
  /** テキストの内容 */
  children: React.ReactNode;
  /** テキストのサイズ */
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "xl2" | "xl3" | "xl4";
  /** テキストの色 */
  color?: "title" | "primary" | "secondary" | "tertiary";
}

const sizeClassMap = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  xl2: "text-2xl",
  xl3: "text-3xl",
  xl4: "text-4xl",
};

const colorClassMap = {
  title: "text-purple-300",
  primary: "text-black",
  secondary: "text-gray-600",
  tertiary: "text-gray-400",
};

export const Text: React.FC<TextProps> = ({
  children,
  size = "base",
  color = "primary",
}: TextProps) => {
  const classNames = [
    sizeClassMap[size],
    colorClassMap[color],
  ].join(" ");
  
  return <p className={classNames}>{children}</p>;
};