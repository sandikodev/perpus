import { component$, useSignal } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

type Props = {
    class?: string
    isOpen: Signal<boolean>
}

export const Button = component$<Props>((props) => {
    const { isOpen } = props
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

    return (
        <button
            class={`${props.class} flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group`}
            onClick$={() => isOpen.value = !isOpen.value}
        >
            <div
                class={`${genericHamburgerLine} ${isOpen.value
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                    }`}
            />
            <div class={`${genericHamburgerLine} ${isOpen.value ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
            <div
                class={`${genericHamburgerLine} ${isOpen.value
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                    }`}
            />
        </button>
    )
})