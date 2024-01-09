import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="text-center mx-auto p-4">
      <h1 class="max-6-xs text-6xl sm:text-[120px] font-thin uppercase my-16">
        Not Found
      </h1>
      <p class="my-4">
        <A href="/" class="text-primary hover:underline">
          Go Home
        </A>
      </p>
    </main>
  );
}
