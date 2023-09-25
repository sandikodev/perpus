import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {

  return (
    <div>
      <section id="hero" class="bg-red-200 h-[80vh] sm:h-[576px] sm:p-5 lg:p-10">
        <div class="h-full flex flex-col justify-center items-center sm:justify-end sm:items-start">
          <div class="text-center sm:text-left leading-6 w-full mb-4">
            <h1 class="text-xl sm:text-2xl">Perpustakaan</h1>
            <p class="text-2xl sm:text-5xl">SMP Negeri 1 Srandakan</p>
          </div>
          <a class="bg-blue-300 hover:bg-blue-400 rounded-lg p-2 text-sm sm:text-lg" href="/profile">Kunjungi Profil Perpustakaan</a>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Perpustakaan SMP N 1 Srandakan",
  meta: [
    {
      name: "Graha Waskita Kencana",
      content: "Aplikasi Perpustakaan Sekolah",
    },
  ],
};
