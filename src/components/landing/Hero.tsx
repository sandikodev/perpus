import { component$ } from "@builder.io/qwik";
import LogoSMPN1Srandakan from '~/media/LogoSMPN1Srandakan.png?jsx'
// import { Background } from './Hero.css'
export const Hero = component$(() => {
    // const bgImageArray = [
    //     "lonely.jpg",
    //     "uluwatu.jpg",
    //     "carezza-lake.jpg",
    //     "batu-bolong-temple.jpg",
    // ],
    //     base = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/full-",
    //     secs = 4;

    // bgImageArray.forEach((img) => {
    //         new Image().src = base + img;
    //     // caches images, avoiding white flash between background replacements
    // });
    //     const el = document.querySelector(".bg");
    //     function backgroundSequence() {
    //         window.clearTimeout();
    //     var k = 0;
    //     for (i = 0; i < bgImageArray.length; i++) {
    //         console.log(i);
    //     setTimeout(
    //     function () {
    //         el.style.background =
    //         "url(" +
    //         base +
    //         bgImageArray[k] +
    //         ") no-repeat center center";
    //     // ") no-repeat center center fixed";
    //     el.style.backgroundSize = "cover";
    //     if (k + 1 === bgImageArray.length) {
    //         setTimeout(function () {
    //             backgroundSequence();
    //         }, secs * 1000);
    //                 } else {
    //         k++;
    //                 }
    //             },
    //     secs * 1000 * i,
    //     );
    //     }
    // }

    // backgroundSequence();

    return (
        <section>
            {/* <Background> */}
            <div id="hero" class=" h-[80vh] sm:h-[576px] sm:p-5 lg:p-10 container mx-auto">
                <div class="h-full flex flex-col justify-center items-center sm:justify-end sm:items-start sm:pb-12">
                    <div class='mx-auto mb-8 sm:mb-14'>
                        <LogoSMPN1Srandakan class="w-14 sm:w-40" />
                    </div>
                    <div class="text-center sm:text-left leading-6 w-full mb-4">
                        <h1 class="text-2xl sm:text-5xl font-bold mb-2">Perpustakaan</h1>
                        <p class="text-sm sm:text-2xl font-semibold">SMP Negeri 1 Srandakan</p>
                    </div>
                    <a class="bg-blue-300 hover:bg-blue-400 rounded-lg p-2 text-sm sm:text-lg" href="/profile">Kunjungi Profil Perpustakaan</a>
                </div>
            </div>
            {/* </Background> */}
        </section>
    )
});
