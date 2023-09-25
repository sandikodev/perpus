import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/Button";

export default component$(() => {
  const isOpen = useSignal(false);

  return (
    <div class="min-h-full">
      <div class="container mx-auto">
        <header class={`flex ${isOpen.value ? 'items-start' : 'items-center'} justify-center md:justify-between sm:p-2 my-2`}>
          {/* baru muncul ketika medium keatas */}
          <div id="header-logo" class="font-semibold hidden md:block">Graha Waskita Kencana</div>
          <div id="header-menu" class={`flex flex-wrap space-x-2 md:space-x-0 ${!isOpen.value && 'mr-2'}`}>
            {/* baru muncul ketika small keatas */}
            <div class={`${isOpen.value ? 'flex flex-col md:flex-row' : 'hidden'} md:flex items-center justify-center`}>
              <a class="hover:bg-blue-200 p-2 rounded-lg" href="/profile">Profile</a>
              <a class="hover:bg-blue-200 p-2 rounded-lg" href="https://portal.smpsransa.sch.id/ebook">Ebook</a>
              <a class="hover:bg-blue-200 p-2 rounded-lg" href="https://drive.smpsransa.sch.id">Drive Sransa</a>
            </div>
            <div class={`${isOpen.value ? 'hidden md:flex' : 'flex'} items-center space-x-1 md:space-x-2`}>
              <a class="bg-blue-200 md:bg-inherit hover:bg-blue-300 p-2 rounded-lg" href="https://lms.smpsransa.sch.id/index.php?p=visitor">Pengunjung</a>
              <a class="bg-yellow-300 hover:bg-yellow-400 p-2 rounded-lg" href="/dashboard">Dashboard</a>
            </div>
            <Button class="md:hidden" isOpen={isOpen} />
          </div>
        </header>
        <main>
          <h1>Hi 👋</h1>
          <p>
            Can't wait to see what you build with qwik!
            <br />
            Happy coding.
          </p>
        </main>
        <footer>

        </footer>
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
