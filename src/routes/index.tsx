import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "~/components/landing/Hero";
import Img33443311 from '~/media/33443311.jpeg?jsx';
export default component$(() => {

  return (
    <div>
      <Hero />
      <section class="container mx-auto flex justify-center">
        <div class="w-full h-56 text-center grid grid-cols-2 sm:grid-cols-4 -mt-12 max-w-6xl">
          <div class="flex flex-col justify-center hover:animate-bounce hover:bg-gray-900 hover:text-white bg-red-300 rounded-xl p-6 m-2">
            <div class="text-2xl mb-2 font-semibold">509</div>
            <div class="text-sm">Pengunjung</div>
          </div>
          <div class="flex flex-col justify-center hover:animate-bounce hover:bg-gray-900 hover:text-white bg-green-300 rounded-xl p-6 m-2">
            <div class="text-2xl mb-2 font-semibold">800</div>
            <div class="text-sm">Buku Dipinjam</div>
          </div>
          <div class="flex flex-col justify-center hover:animate-bounce hover:bg-gray-900 hover:text-white bg-blue-300 rounded-xl p-6 m-2">
            <div class="text-2xl mb-2 font-semibold">76%</div>
            <div class="text-sm">Minat Baca</div>
          </div>
          <div class="flex flex-col justify-center hover:animate-bounce hover:bg-gray-900 hover:text-white bg-yellow-300 rounded-xl p-6 m-2">
            <div class="text-2xl mb-2 font-semibold">2.4K</div>
            <div class="text-sm">Total Kunjungan</div>
          </div>
        </div>
      </section>
      <section class="my-10 container mx-auto">
        <div id="title" class="text-center mb-6">
          <h1 class="font-semibold text-gray-800 text-xl">Indeks</h1>
          <p class="font-bold text-3xl">Pekan Pembaca</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 place-content-center max-w-6xl mx-auto">
          <div id="card" class="mx-auto group p-4 hover:bg-gray-300/80 rounded-full w-64 relative">
            <div class="rounded-full sm:top-6 sm:right-6 bg-red-400 absolute h-6 w-6 sm:h-12 sm:w-12 md:h-14 md:w-14 text-lg sm:text-4xl text-white text-center group-hover:translate-y-0.5 group-hover:translate-x-0.5">1</div>
            <Img33443311 class="rounded-full w-60 mx-auto" id="photo" />
            <div class="text-center mt-4">
              <h2 class="font-semibold">R. Sandiko</h2>
              <p class="text-gray-800">Kelas 7E</p>
            </div>
          </div>
          <div id="card" class="mx-auto group p-4 hover:bg-gray-300/80 rounded-full w-64 relative">
            <div class="rounded-full sm:top-6 sm:right-6 bg-green-400 absolute h-6 w-6 sm:h-12 sm:w-12 md:h-14 md:w-14 text-lg sm:text-4xl text-white text-center group-hover:translate-y-0.5 group-hover:translate-x-0.5">1</div>
            <Img33443311 class="rounded-full w-60 mx-auto" id="photo" />
            <div class="text-center mt-4">
              <h2 class="font-semibold">R. Sandiko</h2>
              <p class="text-gray-800">Kelas 8B</p>
            </div>
          </div>
          <div id="card" class="mx-auto group p-4 hover:bg-gray-300/80 rounded-full w-64 relative">
            <div class="rounded-full sm:top-6 sm:right-6 bg-blue-400 absolute h-6 w-6 sm:h-12 sm:w-12 md:h-14 md:w-14 text-lg sm:text-4xl text-white text-center group-hover:translate-y-0.5 group-hover:translate-x-0.5">1</div>
            <Img33443311 class="rounded-full w-60 mx-auto" id="photo" />
            <div class="text-center mt-4">
              <h2 class="font-semibold">R. Sandiko</h2>
              <p class="text-gray-800">Kelas 9D</p>
            </div>
          </div>
          <div id="card" class="mx-auto group p-4 hover:bg-gray-300/80 rounded-full w-64 relative">
            <div class="rounded-full sm:top-6 sm:right-6 bg-yellow-400 absolute h-6 w-6 sm:h-12 sm:w-12 md:h-14 md:w-14 text-lg sm:text-4xl text-white text-center group-hover:translate-y-0.5 group-hover:translate-x-0.5">1</div>
            <Img33443311 class="rounded-full w-60 mx-auto" id="photo" />
            <div class="text-center mt-4">
              <h2 class="font-semibold">Sandikodev</h2>
              <p class="text-gray-800">Office Boy</p>
            </div>
          </div>
        </div>
      </section>
      <div class="container my-24 mx-auto md:px-6">
        <section class="mb-32">
          <h2 class="mb-12 text-center text-3xl font-bold">Pojok Berita</h2>

          <div class="grid gap-6 lg:grid-cols-3">
            <div
              class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light">
              <img width="780" height="520"
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/051.jpg"
                class="w-full align-middle transition duration-300 ease-linear" />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                  <div class="flex h-full items-end justify-start">
                    <div class="m-6 text-white">
                      <h5 class="mb-3 text-lg font-bold">I miss the sun</h5>
                      <p>
                        <small
                        >Published <u>13.01.2022</u> by Anna Maria Doe</small
                        >
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
              </a>
            </div>

            <div
              class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light">
              <img width="780" height="520"
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/044.jpg"
                class="w-full align-middle transition duration-300 ease-linear" />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                  <div class="flex h-full items-end justify-start">
                    <div class="m-6 text-white">
                      <h5 class="mb-3 text-lg font-bold">
                        Adventure in the desert
                      </h5>
                      <p>
                        <small>Published <u>12.01.2022</u> by Mark Equel</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
              </a>
            </div>

            <div
              class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light">
              <img width="780" height="520"
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/045.jpg"
                class="w-full align-middle transition duration-300 ease-linear" />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                  <div class="flex h-full items-end justify-start">
                    <div class="m-6 text-white">
                      <h5 class="mb-3 text-lg font-bold">Lonely mountain</h5>
                      <p>
                        <small
                        >Published <u>10.01.2022</u> by Bilbo baggins</small
                        >
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
              </a>
            </div>

            <div
              class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light">
              <img width="780" height="520"
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/047.jpg"
                class="w-full align-middle transition duration-300 ease-linear" />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                  <div class="flex h-full items-end justify-start">
                    <div class="m-6 text-white">
                      <h5 class="mb-3 text-lg font-bold">Let's go!</h5>
                      <p>
                        <small>Published <u>09.01.2022</u> by Halley Frank</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
              </a>
            </div>

            <div
              class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light">
              <img width="780" height="520"
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/028.jpg"
                class="w-full align-middle transition duration-300 ease-linear" />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                  <div class="flex h-full items-end justify-start">
                    <div class="m-6 text-white">
                      <h5 class="mb-3 text-lg font-bold">
                        A hut in the mountains
                      </h5>
                      <p>
                        <small>Published <u>07.01.2022</u> by David Beak</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
              </a>
            </div>

            <div
              class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light">
              <img width="780" height="520"
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/049.jpg"
                class="w-full align-middle transition duration-300 ease-linear" />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                  <div class="flex h-full items-end justify-start">
                    <div class="m-6 text-white">
                      <h5 class="mb-3 text-lg font-bold">Beautiful waterfall</h5>
                      <p>
                        <small>Published <u>04.01.2022</u> by Joe Svan</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
              </a>
            </div>
          </div>
        </section>
      </div>
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
      <div class="container mx-auto p-4">
        <div id="title" class="text-left mb-6">
          <h1 class="font-semibold text-gray-800 text-xl">Galeri</h1>
          <p class="font-bold text-3xl">Pustaka</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://upload.wikimedia.org/wikipedia/commons/0/03/Kashi_Vishwanath_Temple_Banaras.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://pbs.twimg.com/media/FGRnUzPVEAAbqM8?format=jpg&name=large"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://pbs.twimg.com/media/FGRnNpAVUAYqRYv?format=jpg&name=large"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://pbs.twimg.com/media/FGRnP_TUUAAttG3?format=jpg&name=large"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://i.pinimg.com/originals/c0/7d/17/c07d17d7ca0b9f39f5aded4b6dca8f02.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg/1280px-Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://www.jagranimages.com/images/newimg/27072020/27_07_2020-shri-kashi-vishwanath-temple_20557350.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://www.jansatta.com/wp-content/uploads/2021/12/Kashi-Vishwanath-Mandir.png?w=1024"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://staticimg.amarujala.com/assets/images/2021/11/07/750x506/kashi-vishwanath-dham_1636258507.jpeg?w=674&dpr=1.0"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://staticimg.amarujala.com/assets/images/2020/01/13/750x506/kashi-vishwanath-mandir-varanasi_1578924152.png?w=700&dpr=2.0"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/800px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://upload.wikimedia.org/wikipedia/commons/2/25/Chet_Singh_Ghat_in_Varanasi.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
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
