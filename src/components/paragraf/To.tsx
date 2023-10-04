import { Slot, component$ } from "@builder.io/qwik";
type Props = {
    visit: string,
    alter: string,
    custom?: {
        main: string,
        sub: string
    }
}
export const To = component$<Props>(({ visit, alter, custom }) => {
    return (
        <a class={`group ${custom?.main}`} href={visit}>
            <span class={`inline-block px-1 bg-red-200 rounded group-hover:hidden ${custom?.sub}`}><Slot /></span>
            <span class={`transition ease-in-out delay-150 text-white bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hidden px-1 rounded group-hover:inline-block ${custom?.sub}`}>{alter}</span>
        </a>
    )
});