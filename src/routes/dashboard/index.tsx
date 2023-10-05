import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (<div>
        <h1 class="font-bold text-3xl text-center mt-10">Selamat Datang di Dashboard Center</h1>
        <div class="container mx-auto">
            <div class="flex justify-evenly mt-10">
                <a class="p-2 bg-red-200 hover:bg-red-300 rounded-lg" href="/admin">Pengelola Perpus</a>
                <a class="p-2 bg-red-200 hover:bg-red-300 rounded-lg" href="/kunjungan">Laporan Pengunjung</a>
                <a class="p-2 bg-red-200 hover:bg-red-300 rounded-lg" href="/angkringan">Menu Angkringan</a>
                <a class="p-2 bg-red-200 hover:bg-red-300 rounded-lg" href="https://drive.smpsransa.sch.id">Google Drive</a>
                <a class="p-2 bg-red-200 hover:bg-red-300 rounded-lg" href="https://cms.smpsransa.sch.id">CMS Perpus</a>
            </div>
        </div>
    </div>)
});