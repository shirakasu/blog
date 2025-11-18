import React from "react";
import "@/app/globals.css";
import Image from "next/image";

interface CardProps {
  /** カードのタイトル */
  title: string;
  /** カードの内容 */
  content: React.ReactNode;
  /** カードの画像URL */
  imageUrl?: string;
  /** カードのクリックイベントハンドラ */
  onClick?: () => void;
  /** カードを無効化するかどうか */
  disabled?: boolean;
};

export const Card: React.FC<CardProps> = ({
  title,
  content,
  imageUrl,
  onClick,
  disabled = false
}) => {
  const classNames = [
    "bg-white shadow-md rounded-lg p-4 transition-transform duration-200",
    disabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg cursor-pointer"
  ].join(" ");

  return (
    <div
      className={classNames}
      onClick={!disabled ? onClick : undefined}
    >
      {imageUrl && <Image src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" width={18} height={18}/>}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="text-gray-700">{content}</div>
    </div>
  );
};



