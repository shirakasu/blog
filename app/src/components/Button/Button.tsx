import React from "react";
import "@/app/globals.css";

export interface CustomButtonProps {
  /** ボタンがクリックされたときのイベントハンドラ */
  onClick?: () => void;
  /** ボタンを無効化するかどうか */
  disabled?: boolean;
  /** ボタンの見た目のバリエーション */
  variant?: "primary" | "secondary" | "outline";
  /** ボタンのサイズ */
  size?: "sm" | "md" | "lg";
  /** ボタンのテキスト */
  children: React.ReactNode;
};

const sizeClassMap = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
  lg: "text-lg px-5 py-3",
};

const variantClassMap = {
  primary: "bg-purple-300 hover:bg-purple-400 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
  outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
};

export const CustomButton: React.FC<CustomButtonProps> = ({
  disabled = false,
  variant = "primary",
  size = "md",
  children,
  onClick
}: CustomButtonProps) => {
  const classNames = [
    "rounded-2xl font-semibold transition-colors duration-200",
    sizeClassMap[size],
    variantClassMap[variant],
    disabled ? "opacity-50 cursor-not-allowed" : "",
  ].join(" ");

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames}
    >
      {children}
    </button>
  );
};