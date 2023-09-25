import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

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
  return (
    <div class="min-h-full">
      <div class="container mx-auto">
        <header class="flex items-center justify-between p-2">
          <div id="header-logo">Graha Waskita Kencana</div>
          <div id="header-menu" class="space-x-2">
            <a class="hover:bg-blue-300 p-2 rounded-lg" href="https://lms.smpsransa.sch.id">LMS</a>
            <a href="https://portal.smpsransa.sch.id/ebook">Ebook</a>
            <a href="https://lms.smpsransa.sch.id/index.php?p=visitor">Pengunjung</a>
            <a href="/dashboard">Dashboard</a>
          </div>
        </header>
        <main>
          <Slot />
        </main>
        <footer>

        </footer>
      </div>
    </div>
  );
});
