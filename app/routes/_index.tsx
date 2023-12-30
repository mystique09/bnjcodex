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
      <section id="#" className="">
        <h1 className="text-6xl">Welcome.</h1>
      </section>
    </main>
  );
}
