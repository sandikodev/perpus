import { component$, useSignal } from "@builder.io/qwik";
import { Button } from "./Button";
import { Menu } from "~/utils/Data";

export const Header = component$(() => {
    const isOpen = useSignal(false);

    return (
        <header class={`flex ${isOpen.value ? 'items-start' : 'items-center'} justify-center md:justify-between sm:p-2 my-2`}>
            {/* baru muncul ketika medium keatas */}
            <div id="header-logo" class="font-semibold hidden md:block">
                <a href="/">Graha Waskita Kencana</a>
            </div>
            <div id="header-menu" class={`flex flex-wrap space-x-2 md:space-x-0 ${!isOpen.value && 'mr-2'}`}>
                {/* baru muncul ketika small keatas */}
                <div class={`${isOpen.value ? 'flex flex-col md:flex-row' : 'hidden'} md:flex items-center justify-center`}>
                    {Menu.map((menu, id) => <a key={id} class="hover:bg-blue-200 p-2 rounded-lg" href={menu.to}>{menu.title}</a>)}
                </div>
                <div class={`${isOpen.value ? 'hidden md:flex' : 'flex'} items-center space-x-1 md:space-x-2`}>
                    <a class="bg-blue-200 md:bg-inherit hover:bg-blue-300 p-2 rounded-lg" href="https://lib.smpsransa.sch.id/index.php?p=visitor">Pengunjung</a>
                    <a class="bg-orange-300 hover:bg-yellow-400 p-2 rounded-lg" href="/dashboard">Dashboard</a>
                </div>
                <Button class="md:hidden" isOpen={isOpen} />
            </div>
        </header>
    )
});