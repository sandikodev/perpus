import { component$ } from "@builder.io/qwik";
import { Pages } from "~/components/layouts/Pages";
import "../../applyFont.css"

export default component$(() => {
  return (
    <Pages
      isContainer={false}
    // imageHead="https://republiclaptop.id/wp-content/uploads/2023/04/Bisnis-angkringan.png"
    >
      <div class="h-full" style={{
        background: 'url("https://asset.kompas.com/crops/YVTT-4vH9sj8ABky3isIE-VZbp8=/0x0:1000x667/750x500/data/photo/2022/01/21/61eab5f30ff0f.jpg")',
        backgroundSize: "cover",
        backgroundClip: "border-box",
        backgroundRepeat: "no-repeat"
      }}>
        <div class="h-full flex flex-col justify-center items-center" style={{ background: "rgba(57, 57, 57, 0.5)" }}>
          <div class="relative h-full my-10 container mx-auto max-w-xl flex shrink-0 overflow-x-scroll">
            <section class="relative shrink-0 w-full max-w-xl rounded-lg leading-8" style={{
              background: 'url("https://republiclaptop.id/wp-content/uploads/2023/04/Bisnis-angkringan.png")',
              backgroundSize: "cover",
              backgroundClip: "border-box",
              backgroundRepeat: "no-repeat"
            }}>
              <div class="bg-black/60 inset-0 absolute rounded-lg"></div>
              <div class="absolute select-none pointer-events-none right-2 top-2">
                <p class="bg-red-200 w-fit px-2 text-black rounded-lg">Minggu Pertama</p>
              </div>
              <div class="relative text-white text-center font-semibold p-4">
                <h1 class="text-2xl font-kaushan">Menu</h1>
                <p class="text-xl font-kaushan">Angkringan Literasi</p>
              </div>
            </section>
            <section class="relative shrink-0 w-full max-w-xl rounded-lg leading-8" style={{
              background: 'url("https://republiclaptop.id/wp-content/uploads/2023/04/Bisnis-angkringan.png")',
              backgroundSize: "cover",
              backgroundClip: "border-box",
              backgroundRepeat: "no-repeat"
            }}>
              <div class="bg-black/60 inset-0 absolute rounded-lg"></div>
              <div class="fixed select-none pointer-events-none right-2 top-2">
                <p class="bg-red-200 w-fit px-2 text-black rounded-lg">Minggu kedua</p>
              </div>
              <div class="relative text-white text-center font-semibold p-4">
                <h1 class="text-2xl font-kaushan">Menu</h1>
                <p class="text-xl font-kaushan">Angkringan Literasi</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Pages>
  )
});