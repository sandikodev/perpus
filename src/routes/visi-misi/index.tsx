import { component$ } from "@builder.io/qwik";
import AdminGwk from '~/media/admin-graha-waskita-kencana.jpg';
import { Pages } from '~/components/layouts/Pages';

export default component$(() => {
    return (
        <Pages>
            <h1 class="text-center font-bold text-2xl my-10">Visi dan Misi</h1>
            <div class="h-32 md:h-52 sm:h-44 mb-4">
                <img class="h-32 md:h-52 sm:h-44 object-cover w-full" src={AdminGwk} width={1600} height={1196} />
            </div>
            <div class="max-w-2xl mx-auto leading-8">
                <div class="px-4 py-2">
                    <h2 class="font-semibold">Visi</h2>
                    <p class="pl-2">Berjiwa Pancasila, Berprestasi, Berwawasan Global</p>
                </div>
                <div class="px-4 py-2">
                    <h2 class="font-semibold">Misi</h2>
                    <ol class="list-decimal pl-4">
                        <li>Mewujudkan pribadi dan warga sekolah yang beriman dan bertaqwa kepada Tuhan Yang Maha Esa;</li>
                        <li>Mencapai prestasi akademis dan non-akademis di berbagai bidang, cabang dan kegiatan atau event baik bersifat kompetisi maupun non-kompetisi;</li>
                        <li>Mewujudkan pribadi dan warga sekolah yang mandiri dalam melaksanakan tugas dan hidup sehari-hari;</li>
                        <li>Mahir dalam penggunaan dan pemanfaatan IT;</li>
                        <li>Mewujudkan pribadi dan warga sekolah yang memiliki berbagai kemampuan dan keterampilan yang bermafaat dalam kehidupan sehari-hari;</li>
                        <li>Mewujudkan kepedulian terhadap sesama dan lingkungan untuk menciptakan suasana yang harmonis dalam bingkai budaya yang luhur.</li>
                        <li>Mewujudkan keterampilan berkomunikasi dalam Bahasa Inggris</li>
                        <li>Melaksanakan pembelajaran yang kontekstual</li>
                    </ol>
                </div>
            </div>
        </Pages>
    )
})