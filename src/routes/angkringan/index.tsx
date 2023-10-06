import { $, component$, useSignal } from "@builder.io/qwik";
import { Pages } from "~/components/layouts/Pages";
import "../../applyFont.css"
import ImgAngkringanLiterasi1 from '~/media/angkringan-literasi-1.png?jsx';
import ImgAngkringanLiterasi2 from '~/media/angkringan-literasi-2.png?jsx';
import ImgAngkringanLiterasi3 from '~/media/angkringan-literasi-3.png?jsx';
import { Angkring } from "~/components/Angkring";

export default component$(() => {
  const scrollable = useSignal<HTMLDivElement>();
  const items = useSignal<HTMLDivElement>();
  const cardNumber = useSignal({
    now: 1,
    total: items.value?.childNodes.length ?? 4
  })
  const isLast = useSignal(false)

  const onNext = $(
    () => {
      // logic inc till reach last cart
      if (cardNumber.value.now < cardNumber.value.total) {
        cardNumber.value.now += 1
        // items.value.scrollLeft += 622.4
      }

      // logic reach last card
      if (cardNumber.value.now == cardNumber.value.total) {
        isLast.value = true
      }
    })

  const onPrev = $(
    () => {
      // logic inc till reach first cart
      if (cardNumber.value.now > 1) {
        cardNumber.value.now -= 1
        // scrollable.value.scrollLeft -= 622.4
      }

      // logic reach first card
      if (cardNumber.value.now == 1) {
        isLast.value = false
      }
    })

  return (
    <Pages
      isContainer={false} // no-container: h-full is default
    // imageHead="https://republiclaptop.id/wp-content/uploads/2023/04/Bisnis-angkringan.png"
    >
      <div class="w-full relative flex" style={{
        background: 'url("https://asset.kompas.com/crops/YVTT-4vH9sj8ABky3isIE-VZbp8=/0x0:1000x667/750x500/data/photo/2022/01/21/61eab5f30ff0f.jpg")',
        backgroundSize: "cover",
        backgroundClip: "border-box",
        backgroundRepeat: "no-repeat"
      }}>
        {/* <div id="overlay-bg" style={{ position: "absolute", background: "rgba(57, 57, 57, 0.5)", width: "100%", height: "100%" }} /> */}
        <div id="wrapper-card" class="relative w-full container max-w-3xl my-10 mx-auto">
          <div id="scroller" class="h-full overflow-x-scroll flex flex-row gap-2" ref={scrollable}>
            <Angkring id="card-1" title="Minggu Pertama" />
            <Angkring id="card-2" title="Minggu Kedua" />
            <Angkring id="card-3" title="Minggu Ketiga" />
            <Angkring id="card-4" title="Minggu Keempat" />
            {/* <ImgAngkringanLiterasi1 id="card-1" alt="Angkringan Literasi 1" class="w-[80%] rounded-lg object-cover my-2" /> */}
            {/* <ImgAngkringanLiterasi2 id="card-2" alt="Angkringan Literasi 2" class="w-[80%] rounded-lg object-cover my-2" /> */}
            {/* <ImgAngkringanLiterasi3 id="card-3" alt="Angkringan Literasi 3" class="w-[80%] rounded-lg object-cover my-2" /> */}
          </div>
          {/* <div id="button" class={`absolute top-0 bottom-0 my-2 w-full`}>
            {
              isLast.value ?
                <div onClick$={onPrev} class={`h-full bg-gray-900/80 hover:bg-gray-900/90 px-2 py-10 w-[calc(20%-0.5rem)] rounded-r-lg float-left`}><div class="text-white text-4xl text-center -rotate-90 select-none">Prev</div></div> :
                <div onClick$={onNext} class={`h-full bg-gray-900/80 hover:bg-gray-900/90 px-2 py-10 w-[calc(20%-0.5rem)] rounded-l-lg float-right`}><div class="text-white text-4xl text-center -rotate-90 select-none">Next</div></div>
            }
          </div> */}
        </div>
      </div>
    </Pages >
  )
});