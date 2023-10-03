import { component$, Slot, useSignal } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Button } from "~/components/Button";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  const isOpen = useSignal(false);

  return (
    <div class="min-h-screen">
      <div class="container mx-auto">
        <header class={`flex ${isOpen.value ? 'items-start' : 'items-center'} justify-center md:justify-between sm:p-2 my-2`}>
          {/* baru muncul ketika medium keatas */}
          <div id="header-logo" class="font-semibold hidden md:block">
            <a href="/">Graha Waskita Kencana</a>
          </div>
          <div id="header-menu" class={`flex flex-wrap space-x-2 md:space-x-0 ${!isOpen.value && 'mr-2'}`}>
            {/* baru muncul ketika small keatas */}
            <div class={`${isOpen.value ? 'flex flex-col md:flex-row' : 'hidden'} md:flex items-center justify-center`}>
              <a class="hover:bg-blue-200 p-2 rounded-lg" href="/kunjungan">Laporan</a>
              <a class="hover:bg-blue-200 p-2 rounded-lg" href="/profile">Profile</a>
              <a class="hover:bg-blue-200 p-2 rounded-lg" href="/artikel">Artikel</a>
              <a class="hover:bg-blue-200 p-2 rounded-lg" href="https://portal.smpsransa.sch.id/ebook">Ebook</a>
              <a class="hover:bg-blue-200 p-2 rounded-lg" href="https://drive.smpsransa.sch.id">Drive Sransa</a>
            </div>
            <div class={`${isOpen.value ? 'hidden md:flex' : 'flex'} items-center space-x-1 md:space-x-2`}>
              <a class="bg-blue-200 md:bg-inherit hover:bg-blue-300 p-2 rounded-lg" href="https://lib.smpsransa.sch.id/index.php?p=visitor">Pengunjung</a>
              <a class="bg-orange-300 hover:bg-yellow-400 p-2 rounded-lg" href="/dashboard">Dashboard</a>
            </div>
            <Button class="md:hidden" isOpen={isOpen} />
          </div>
        </header>
      </div>
      <div>
        <main>
          <Slot />
        </main>
        <footer>

        </footer>
      </div>
    </div>
  );
});
