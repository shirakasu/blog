import Link from "next/link";
import { SiTypescript, SiNextdotjs, SiReact, SiTailwindcss, SiPython, SiDocker, SiAmazonwebservices, SiGo, SiGithub, SiX } from "react-icons/si";

export default function Home() {
  const tech_stack = [
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
    { name: "React", icon: SiReact, color: "text-cyan-500" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-500" },
    { name: "Python", icon: SiPython, color: "text-yellow-600" },
    { name: "Go", icon: SiGo, color: "text-cyan-600" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "AWS", icon: SiAmazonwebservices, color: "text-orange-500" },
  ]

  const github_url = "https://github.com/shirakasu";
  const x_url = "https://twitter.com/shirakasu3004";
  
  return (
      <main className="px-4 max-w-4xl mx-auto py-20">
        <section className="mb-16">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
            Shirakasu Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Web開発とサイバーセキュリティに情熱を持つITエンジニアです。<br />
            社会課題を技術で解決することをミッションとしています。
          </p>
          <div className="flex gap-4">
            <Link href="/projects" className="bg-purple-300 text-gray-700 font-bold px-6 py-3 rounded-md hover:bg-purple-400 transition">
              実績を見る
            </Link>
            <Link href={github_url} target="_blank" className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              <SiGithub className="inline-block mr-2 text-xl -mt-1" />
            </Link>
            <Link href={x_url} target="_blank" className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              <SiX className="inline-block mr-2 text-xl -mt-1" />
            </Link>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tech_stack.map((skill) => (
              <div 
                key={skill.name} 
                className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 cursor-default"
              >
                <skill.icon className={`text-4xl mb-3 text-gray-400 group-hover:${skill.color} transition-colors duration-300`} />
                <span className="font-medium text-gray-600 group-hover:text-gray-900">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
}
