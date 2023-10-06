import { component$ } from "@builder.io/qwik";

export const CardAngkring = component$(() => {
    return (
        <div>
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
    )
});