
import ImgRuangBacaLainGrahaWaskitaKencana from '~/media/ruang-baca-lain-graha-waskita-kencana.jpg?jsx';
import ImgRuangBacaGrahaWaskitaKencana from '~/media/ruang-baca-graha-waskita-kencana.jpg?jsx';

import { component$ } from "@builder.io/qwik";
import AdminGwk from '~/media/admin-graha-waskita-kencana.jpg';
import { CountBook } from '~/components/paragraf/CountBook';
import { To } from '~/components/paragraf/To';
import { Buku, Layanan } from '~/utils/Data';
import { Pages } from '~/components/layouts/Pages';

export default component$(() => {
    return (
        <Pages imageHead={AdminGwk}>
            <div class="max-w-2xl mx-auto">
                <div class="text-center mt-10 mb-5">
                    <h1 class="sm:text-2xl font-semibold mb-2">Graha Waskita Kencana</h1>
                    <p>NPP: 3402011D1000001</p>
                </div>
                <div class="flex">
                    <div class="col-span-5 leading-8 text-justify space-y-2 px-4 md:px-0">
                        <p>Perpustakaan <b class="font-medium">SMP Negeri 1 Srandakan</b> merupakan bagian dari instansi pendidikan Sekolah Menengah Pertama di Kapanewon Srandakan. Perpustakaan ini lahir bersamaan dengan lahirnya instansi pendidikan SMP Negeri 1 Srandakan yaitu pada tanggal 1 April 1979. Perpustakaa ini juga lahir bersamaan dengan berdirinya SMP Negeri 1 Srandakan. </p>
                        <div class="text-center">
                            <ImgRuangBacaGrahaWaskitaKencana alt="Ruang Baca Graha Waskita Kencana" class="rounded-lg h-72 object-cover mb-2 mt-10" />
                            <i class="text-xs">Gambar: GWK-Ruang Baca Potret-1</i>
                        </div>
                        <p>Seiring berjalannya waktu, perpustakaan SMP Negeri 1 Srandakan diberi nama “Perpustakaan Graha Waskita Kencana”. Makna kata graha adalah rumah, sedangkan waskita memiliki makna orang yang pandai di berbagai segi  baik pengetahuan, keterampilan. Selain itu pemustaka diharapkan pandai secara spiritual (SQ), intelektual (IQ) dan perasaan (EQ). Sdeangkan kata kencana adalah emas yang dapat diartikan sesuatu yang berharga an bernilai tinggi</p>
                        <p>Jika dimaknai secara keseluruhan nama Graha Waskita Kencana adalah rumah yang digunakan untuk membentuk insan yang cerdas baik intelengensi, emosi, dan spiritual, sehingga menjadi insan yang memiliki rasa, cipta dan karsa yang bernilai tinggi.</p>
                        <p>Perpustakaan Graha Waskita Kencana berdiri di lahan seluas 545m², melayani keluarga SMP Negeri 1 Srandakan yang terdiri dari peserta didik, guru, karyawan serta anggota masyarakat sebagai anggota perpustakaan, sesuai MOU, pelayanan dilaksanakan pada jam {Layanan.buka} sampai dengan {Layanan.tutup} WIB. <To visit='/kunjungan#jam-kunjung' alter="Lihat Jam Kunjung">Selengkapnya Pelajari Disini</To></p>
                        <div class="text-center">
                            <ImgRuangBacaLainGrahaWaskitaKencana alt="Ruang Baca Graha Waskita Kencana" class="rounded-lg h-72 object-cover mb-2 mt-10" />
                            <i class="text-xs">Gambar: GWK-Ruang Baca Potret-2</i>
                        </div>
                        <p>Koleksi yang tersedia  di perpustakaan Graha Waskita Kencana antara lain <CountBook>{Buku.umum}</CountBook> karya umum, <CountBook color='green'>{Buku.filsafat}</CountBook> untuk buku-buku filsafat, <CountBook color='blue'>{Buku.agama}</CountBook> untuk buku yang berisi tentang agama, <CountBook color='yellow'>{Buku.sosial}</CountBook> adalah buku-buku yang berisi tentang ilmu sosial, ilmu yang berhubungan dengan <i>bahasa</i> disediakan di angka <CountBook color="amber">{Buku.bahasa}</CountBook>, ilmu murni di angka 500, ilmu terapan ada pada kasifikasi <CountBook color='emerald'>{Buku.terapan}</CountBook>, seni dan budaya berada di klasifikasi <CountBook color='rose'>{Buku.sdb}</CountBook>, kesusastraan ada di klasifikasi <CountBook color="violet">{Buku.sastra}</CountBook> serta sejarah geografi ada pada klasifikasi <CountBook color="fuchsia">{Buku.geografi}</CountBook>. <To visit='/kunjungan#eksemplar' alter='Lihat Eksemplar'>Selengkapnya Pelajari Disini</To></p>
                        <p>selain itu Perpustakaan Graha waskita Kencana juga menyediakan buku-buku referensi, karya siswa dan guru, majalah serta Alat Permainan Edukatif atau APE antara lain disediakan dakon, yoyo, bola bekel, ular tangga, alat peraga bangun ruang dan sebagainya. Bahan-bahan pustaka dikemas dalam berbagai bentuk yang mampu membangkitkan minat senang para pemustaka sehingga ada keinginan untuk selalu berkunjung di perpustakaan. Dengan pustakawan yang ramah menjadikan perpustakaan sebagai jembatan untuk saling mendekatkan antara pemustaka dan pustakawan sebagai  seasama anggota keluarga SMP 1 Srandakan.</p>
                    </div>
                </div>
                <div class="flex justify-center my-10">
                    <To alter='klik untuk melihat' visit='/visi-misi' custom={{ main: 'text-xl font-semibold', sub: 'px-4 rounded-full' }}>Pelajari Visi dan Misi</To>
                </div>
            </div>
        </Pages>
    )
})