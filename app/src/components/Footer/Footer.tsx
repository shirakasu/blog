import React from 'react';
import "@/app/globals.css";
import { SiGithub, SiX, SiInstagram } from "react-icons/si";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
    { name: 'Uses', href: '#uses' },
  ];

  const snsLinks = [
    {
      name: 'X',
      href: 'https://x.com/shirakasu3004',
      icon: <SiX className="w-7 h-7" />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/shirakasu',
      icon: <SiGithub className="w-7 h-7" />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/shirakasu3004/',
      icon: <SiInstagram className="w-7 h-7" />,
    }
  ];

  return (
    // 背景を深い紫に、上部に薄い紫の境界線を追加
    <footer className="bg-white text-slate-600 py-12 px-6 border-t border-violet-100">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8">

        <div className="flex items-center w-full my-8">
          <div className="flex-grow h-px bg-violet-300"></div>
          <div className="mx-4 w-1.5 h-1.5 rounded-full bg-violet-400"></div>
          <div className="flex-grow h-px bg-violet-300"></div>
        </div>
        {/* リンク部分：横並びで中央揃え、ホバー時に明るい紫に */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-violet-400 transition-colors duration-200 tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* SNS・コピーライト部分 */}
        <div className="flex flex-col items-center space-y-6">
          {/* SNSアイコン：円形の背景を薄く敷き、ホバーで浮かび上がる演出 */}
          <div className="flex justify-center space-x-6">
            {snsLinks.map((sns) => (
              <a
                key={sns.name}
                href={sns.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sns.name}
                className="p-2 rounded-full hover:bg-violet-400 text-violet-600 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-violet-950/50"
              >
                {sns.icon}
              </a>
            ))}
          </div>

          {/* コピーライト：文字間隔を広げて洗練された印象に */}
          <p className="text-xs text-violet-500 font-light tracking-widest uppercase">
            &copy; {currentYear} Hayata Kawata. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};