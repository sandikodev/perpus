import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Img33443311 from '~/media/33443311.jpeg?jsx';

export default component$(() => {

  return (
    <div>
      <section id="hero" class="bg-red-200 h-[80vh] sm:h-[576px] sm:p-5 lg:p-10">
        <div class="h-full flex flex-col justify-center items-center sm:justify-end sm:items-start sm:pb-12">
          <div class="text-center sm:text-left leading-6 w-full mb-4">
            <h1 class="text-xl sm:text-2xl">Perpustakaan</h1>
            <p class="text-2xl sm:text-5xl">SMP Negeri 1 Srandakan</p>
          </div>
          <a class="bg-blue-300 hover:bg-blue-400 rounded-lg p-2 text-sm sm:text-lg" href="/profile">Kunjungi Profil Perpustakaan</a>
        </div>
      </section>
      <section class="container mx-auto flex justify-center">
        <div class="w-full text-center grid grid-cols-2 sm:grid-cols-4 -mt-12 max-w-6xl">
          <div class="flex flex-col justify-between bg-red-300 rounded-xl p-10 m-2">
            <div class="text-2xl">509</div>
            <div class="text-sm">Pengunjung</div>
          </div>
          <div class="flex flex-col justify-between bg-green-300 rounded-xl p-10 m-2">
            <div class="text-2xl">800</div>
            <div class="text-sm">Buku Dipinjam</div>
          </div>
          <div class="flex flex-col justify-between bg-blue-300 rounded-xl p-10 m-2">
            <div class="text-2xl">76%</div>
            <div class="text-sm">Siswa Gemar Membaca</div>
          </div>
          <div class="flex flex-col justify-between bg-yellow-300 rounded-xl p-10 m-2">
            <div class="text-2xl">2.4K</div>
            <div class="text-sm">Total Kunjungan</div>
          </div>
        </div>
      </section>
      <section class="my-10 container mx-auto">
        <div id="title" class="text-center mb-6">
          <h1 class="font-semibold text-gray-800 text-xl">Pustakawan</h1>
          <p class="font-bold text-3xl">Graha Waskita Kencana</p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4">
          <div id="card" class="p-4 hover:bg-slate-300/50 rounded-xl">
            <Img33443311 class="rounded-xl" id="photo" />
            <div class="text-center mt-4">
              <h2 class="font-semibold">Sandikodev</h2>
              <p class="text-gray-800">Office Boy</p>
            </div>
          </div>
          <div id="card" class="p-4 hover:bg-slate-300/50 rounded-xl">
            <Img33443311 class="rounded-xl" id="photo" />
            <div class="text-center mt-4">
              <h2 class="font-semibold">Sandikodev</h2>
              <p class="text-gray-800">Office Boy</p>
            </div>
          </div>
          <div id="card" class="p-4 hover:bg-slate-300/50 rounded-xl">
            <Img33443311 class="rounded-xl" id="photo" />
            <div class="text-center mt-4">
              <h2 class="font-semibold">Sandikodev</h2>
              <p class="text-gray-800">Office Boy</p>
            </div>
          </div>
          <div id="card" class="p-4 hover:bg-slate-300/50 rounded-xl">
            <Img33443311 class="rounded-xl" id="photo" />
            <div class="text-center mt-4">
              <h2 class="font-semibold">Sandikodev</h2>
              <p class="text-gray-800">Office Boy</p>
            </div>
          </div>
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
