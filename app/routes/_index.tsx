import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Benjie Ben Garcia" },
    { name: "description", content: "Welcome to my portfolio." },
  ];
};

export default function Index() {
  return (
    <main className="h-[100svh]">
      <section id="#" className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center gap-10">
          <h1 className="text-[120px] leading-none">Welcome.</h1>
          <p className="font-light text-2xl tracking-wider leading-8">I am Benjie Ben Garcia, a Junior front-end developer based in Philippines, a Front-End Developer with experience in developing and maintaining websites. I am enthusiastic about tackling challenges, constantly seeking opportunities to enhance programming expertise and apply technology for innovative problem-solving.
          </p>
          <p className="font-thin font-space-grotesk text-4xl tracking-wider max-w-lg">WANT TO KNOW MORE ABOUT ME? DOWNLOAD MY RESUME.</p>
        </div>
      </section>
    </main>
  );
}
