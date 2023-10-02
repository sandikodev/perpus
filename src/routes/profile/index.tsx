import { component$ } from "@builder.io/qwik";
import AdminGwk from '~/media/admin-graha-waskita-kencana.jpg';

export default component$(() => {
    return (
        <div class="container mx-auto">
            <div class="max-w-2xl mx-auto">
                <h1 class="sm:text-2xl text-center mt-10 mb-5 font-semibold">Graha Waskita Kencana</h1>
                <div class="grid grid-cols-5 gap-4">
                    <div class="col-span-5">
                        <img class="object-cover w-full rounded-lg" src={AdminGwk} width={1600} height={1196} />
                        <p class="text-justify">
                            Perpustakaan SMP Negeri 1 Srandakan merupakan bagian dari instansi pendidikan Sekolah Menengah Pertama di Kapanewon Srandakan. Perpustakaan ini lahir bersamaan dengan lahirnya instansi pendidikan SMP Negeri 1 Srandakan yaitu pada tanggal 1 April 1979. Perpustakaa ini juga lahir bersamaan dengan berdirinya SMP Negeri 1 Srandakan.
                            Seiring berjalannya waktu, perpustakaan SMP Negeri 1 Srandakan diberi nama “Perpustakaan Graha Waskita Kencana”. Makna kata graha adalah rumah, sedangkan waskita memiliki makna orang yang pandai di berbagai segi  baik pengetahuan, keterampilan. Selain itu pemustaka diharapkan pandai secara spiritual (SQ), intelektual (IQ) dan perasaan (EQ). Sdeangkan kata kencana adalah emas yang dapat diartikan sesuatu yang berharga an bernilai tinggi
                            Jika dimaknai secara keseluruhan nama Graha Waskita Kencana adalah rumah yang digunakan untuk membentuk insan yang cerdas baik intelengensi, emosi, dan spiritual, sehingga menjadi insan yang memiliki rasa, cipta dan karsa yang bernilai tinggi.
                            Perpustakaan Graha Waskita Kencana berdiri di lahan seluas ..........., melayani keluarga SMP Negeri 1 Srandakan yang terdiri dari peserta didik, guru, karyawan serta anggota masyarakat sebagai anggota perpustakaan, sesuai MOU, pelayanan dilaksanakan pada jam 06.30 sampai dengan 15.00 WIB. Koleksi yang tersedia  di perpustakaan Graha Waskita Kencana antara lain 000 karya umum, 100 untuk buku-buku filsafat, 200 untuk buku yang berisi tentang agama, 300 adalah buku-buku yang berisi tentang ..., ilmu yang berhubunngan dengan bahasa disediakan diangka 400, ilmu murni di angka 500, ilmu terapan ada pada kasifikasi 600, seni dan budaya berada di klasifikasi 700, kesusastraan ada di klasifikasi 800 serta sejarah geografi ada pada klasifikasi 900, selain itu Perpustakaan Graha waskita Kencana juga menyediakan buku-buku referensi, karya siswa dan guru, majalah serta Alat Permainan Edukatif atau APE antara lain disediakan dakon, yoyo, bola bekel, ular tangga, alat peraga bangun ruang dan sebagainya.
                            Bahan-bahan pustaka dikemas dalam berbagai bentuk yang mampu membangkitkan minat senang para pemustaka sehingga ada keinginan untuk selalu berkunjung di perpustakaan. Dengan pustakawan yang ramah menjadikan perpustakaan sebagai jembatan untuk saling mendekatkan antara pemustaka dan pustakawan sebagai  seasama anggota keluarga SMP 1 Srandakan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
})