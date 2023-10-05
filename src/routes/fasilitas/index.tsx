
import ImgOaseBatik from '~/media/oase-batik.png?jsx';
import ImgLayananAnak from '~/media/layanan-anak-1.png?jsx';
import ImgRuangBaca from '~/media/ruang-baca-1-graha-waskita-kencana.png?jsx';
import ImgAngkringanLiterasi1 from '~/media/angkringan-literasi-1.png?jsx';
import ImgAngkringanLiterasi2 from '~/media/angkringan-literasi-2.png?jsx';
import ImgAngkringanLiterasi3 from '~/media/angkringan-literasi-3.png?jsx';
import ImgTenggokLiterasi from '~/media/tenggok-literasi.png?jsx';
import ImgGazeboBahagia from '~/media/gazebo-bahagia.png?jsx';
import ImgGazeboCeria from '~/media/gazebo-ceria.png?jsx';
import ImgSepedaLiterasi from '~/media/sepeda-literasi.png?jsx';
import ImgSiniCerita1 from '~/media/layanan-bercerita-1.png?jsx';
import ImgSiniCerita2 from '~/media/layanan-bercerita-2.png?jsx';
import ImgMultimedia1 from '~/media/multimedia-1-graha-waskita-kencana.png?jsx';
import ImgMultimedia2 from '~/media/multimedia-2-graha-waskita-kencana.png?jsx';


import { component$ } from "@builder.io/qwik";
import { Pages } from "~/components/layouts/Pages";
import { To } from "~/components/paragraf/To";
import AdminGwk from "~/media/sirkulasi-1-graha-waskita-kencana.png";


export default component$(() => {
    return (
        <Pages imageHead={AdminGwk}>
            <div class="max-w-2xl mx-auto">
                <section class="text-center mt-10 mb-5">
                    <h1 class="sm:text-2xl font-semibold mb-2">Fasilitas Umum</h1>
                    <p class="font-semibold">Graha Waskita Kencana</p>
                </section>
                <section class="flex flex-col leading-8">
                    <details>
                        <summary>1. Pojok Baca</summary>
                        <details class="pl-10">
                            <summary>a. Baca Ditempat</summary>
                            <div class="pl-10 mb-5">
                                <p class="text-justify">Layanan Baca Ditempat adalah layanan penyediaan ruang baca, dalam hal ini perpustakaan menyediakan tempat untuk membaca bagi para pemustaka.</p>
                                <div class="flex flex-col items-center justify-center">
                                    <ImgRuangBaca alt="Ruang Baca" class="max-w-lg rounded-lg object-cover my-2" />
                                    <i class="text-xs">Gambar: Bahan-bahan pustaka dikemas dalam berbagai bentuk yang mampu membangkitkan minat baca</i>
                                </div>
                            </div>
                        </details>
                        <details class="pl-10">
                            <summary>b. Angkringan Literasi</summary>
                            <div class="pl-10 mb-5">
                                <p class="text-justify">Angkringan Literasi dimaknai sebagai media untuk menyediakan ilmu dalam bentuk buku digunakan untuk menimba ilmu dalam bentuk buku yang siap dibaca oleh pemustaka sebagai anggota perpustakaan. Bahan pustaka disediakan di angkringan dengan banyak menu antara lain.</p>
                                <div class="flex flex-col items-center justify-center">
                                    <div class="max-w-md overflow-x-scroll">
                                        <div class="shrink-0 flex flex-row space-x-2">
                                            <ImgAngkringanLiterasi1 alt="Angkringan Literasi 1" class="max-w-lg rounded-lg object-cover my-2" />
                                            <ImgAngkringanLiterasi2 alt="Angkringan Literasi 1" class="max-w-lg rounded-lg object-cover my-2" />
                                            <ImgAngkringanLiterasi3 alt="Angkringan Literasi 1" class="max-w-lg rounded-lg object-cover my-2" />
                                        </div>
                                    </div>
                                    <i class="text-xs">Gambar: Bahan-bahan pustaka dikemas dalam berbagai bentuk yang mampu membangkitkan minat baca</i>
                                </div>
                                <div class="mt-4 p-2 text-center">
                                    <To alter='klik untuk melihat' visit='/angkringan' custom={{ main: 'text-xl font-semibold', sub: 'px-4 rounded-full' }}>Apa Menu Lezat Hari Ini ??</To>
                                </div>
                            </div>
                        </details>
                        <details class="pl-10">
                            <summary>c. Tenggok Literasi</summary>
                            <div class="pl-10 mb-5">
                                <p class="text-justify">Tenggok merupakan benda yang digunakan oleh masyarakat Jawa berfungsi untuk wadah atau tempat seperti beras atau hasil bumi lainnya. Tenggok literasi ini dibaratkan benda yang digunakan senagai tempat untuk menampung banyak ilmu yang siap dimanfaatkan pemustaka.  Tenggok lietasi digunakan sebagai wadah bahan pustaka seperti buku-buku yang dibaca oleh pemustaka sebagai anggota perpustakaan Graha Waskita Kencana.</p>
                                <div class="flex flex-col items-center justify-center">
                                    <ImgTenggokLiterasi alt="Fasum Tenggok" class="max-w-lg rounded-lg object-cover my-2" />
                                    <i class="text-xs">Gambar: Masyarakat dapat membaca buku koleksi perpustakaan graha waskita kencana</i>
                                </div>
                            </div>
                        </details>
                        <details class="pl-10">
                            <summary>d. Gazebo Literasi</summary>
                            <div class="pl-10 mb-5">
                                <p class="text-justify">Pojok Baca yaitu tempat untuk menyediakan buku yang digunakan oleh warga sekolah untuk membaca buku ketika sedang beristirahat. Pojok baca ini berada di sudut lapangann yang diberi nama Pojok Baca “Bahagia” dan “Ceria’. Dengan nama tersebut diharapkan pengguna dapat mendapatkan rasa bahagia dan ceria di saat memanfaatkan fasilitas yang ada.</p>
                                <div class="flex flex-col items-center justify-center">
                                    <div class="max-w-md overflow-x-scroll">
                                        <div class="shrink-0 flex flex-row space-x-2">
                                            <ImgGazeboBahagia alt="Gazebo Bahagia" class="max-w-lg rounded-lg object-cover my-2" />
                                            <ImgGazeboCeria alt="Gazebo Ceria" class="max-w-lg rounded-lg object-cover my-2" />
                                        </div>
                                    </div>
                                    <i class="text-xs">Gambar: Gazebo Nyaman dan Teduh untuk Membaca</i>
                                </div>
                            </div>
                        </details>
                        <details class="pl-10">
                            <summary>e. Sepeda Literasi</summary>
                            <div class="pl-10 mb-5">
                                <p class="text-justify">Fasilitas sepeda literasi merupakan program kegiatan yang dilaksanakan oleh perpustakaan graha Waskita Kencana dengen tujuan meminjamkan bahan pusakan kepada masyarakat sekitar sebagai upaya ikut berkontribusi  untuk mencerdaskan masyarakat.</p>
                                <div class="flex flex-col items-center justify-center">
                                    <ImgSepedaLiterasi alt="Sepeda Literasi" class="max-w-lg rounded-lg object-cover my-2" />
                                    <i class="text-xs">Gambar: Adanya sepeda literasi, Masyarakat juga dapat menikmati untuk membaca buku.</i>
                                </div>
                            </div>
                        </details>
                        <details class="pl-10">
                            <summary>f. Pohon Literasi</summary>
                            <p class="pl-10 text-justify">Pohon literasi merupakan sarana berupa miniatur pohon yang terbuat untuk menciptakan saran untuk menarik pemustaka. Pohon literasi digunakan sebagai  alat untuk menggantungkan banyak ilmu yang barrada pada cabang dan ranting sehingga  dapat dipetik oleh pemustaka keberadaan pohon literasi.</p>
                        </details>
                    </details>
                    <details>
                        <summary>2. Layanan Referensi</summary>
                        <div class="pl-10 mb-2">
                            <p class="text-justify">Layanan Referensi adalah suatu kegiatan pelayanan untuk membantu pemustaka menemukan informasi dengan cara menerima pertanyaan-pertanyaan dari para pemustaka dan menjawab dengan menggunakan koleksi referensi yang ada.</p>
                            <div class="p-2 text-center">
                                <To alter='klik untuk melihat' visit='https://lib.smpsransa.sch.id' custom={{ main: 'text-xl font-semibold', sub: 'px-4 rounded-full' }}>Kunjungi Pusat Literasi dan Referensi GWK</To>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary>3. Layanan Bercerita</summary>
                        <div class="pl-10 mb-5">
                            <p class="text-justify">Layanan Bercerita adalah kegiatan yang ditujukan untuk pemustaka secara umum, tidak hanya di peruntukan kepada siswa SMP 1 Srandakan, tetapi bisa dimanfaatkan oleh peserta didik dari sekolah lain maupun anak-anak di lingkup sekitar.</p>
                            <div class="flex flex-col items-center justify-center">
                                <div class="max-w-lg overflow-x-scroll">
                                    <div class="shrink-0 flex flex-row space-x-2">
                                        <div class="text-center">
                                            <ImgSiniCerita1 alt="Layanan Bercerita 1" class="max-w-lg rounded-lg object-cover my-2" />
                                            <i class="text-xs">Gambar: Siswa memanfaatkan panggung kreasi yang berada di dekat</i>
                                        </div>
                                        <div class="text-center">
                                            <ImgSiniCerita2 alt="Layanan Bercerita 2" class="max-w-lg rounded-lg object-cover my-2" />
                                            <i class="text-xs">Gambar: Anak-anak TK ABA Bendo melaksanakan layanan bercerita Graha Waskita Kencana pada Juli 2022</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary>4. Layanan Multimedia</summary>
                        <div class="pl-10 mb-5">
                            <p class="text-justify">Layanan Multimedia adalah layanan yang menyediakan koleksi DVD, VCD, buku audio, Video Tape dan CD-ROM dari perpustakaan.</p>
                            <div class="flex flex-col items-center justify-center">
                                <div class="max-w-lg overflow-x-scroll">
                                    <div class="shrink-0 flex flex-row space-x-2">
                                        <div class="text-center">
                                            <ImgMultimedia1 alt="Layanan Oase Batik" class="max-w-lg rounded-lg object-cover my-2" />
                                            <i class="text-xs">Gambar: Overview Ruang Multimedia</i>
                                        </div>
                                        <div class="text-center">
                                            <ImgMultimedia2 alt="Layanan Bercerita 2" class="max-w-lg rounded-lg object-cover my-2" />
                                            <i class="text-xs">Gambar: Pemustaka sedang menggunakan layanan multimedia</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary>5. Layanan Anak</summary>
                        <div class="pl-10 mb-5">
                            <p class="text-justify">Layanan Anak dilaksanakan oleh perpustakaan Graha Waskita Kencana SMP 1 Srandakan meliputi penyediaan ruangan khusus untuk anak yang didukung dengan penyediaan permainan edukatif.</p>
                            <div class="flex flex-col items-center justify-center">
                                <ImgLayananAnak alt="Layanan Oase Batik" class="max-w-lg rounded-lg object-cover my-2" />
                                <i class="text-xs">Gambar: Pemustaka bermain permainan edukatif di ruang layanan anak</i>
                            </div>
                        </div>
                    </details>
                    <details>
                        <summary>6. Oase Batik</summary>
                        <div class="pl-10 mb-5">
                            <p class="text-justify">Kegiatan membatik merupakan kegiatan yang dilaksanakan untuk mengasah keterampilan bagi pemustaka dan merupakan pembelajaran yang dapat dimanfaatkan dalam kehidupan sehari-hari atau life skill. Batik unggulan yang diangkat adalah Batik Ecoprint yang bahan pembuatannnya didapatkan dari lingkungan sekitar dengan menggunakan dedaunan.</p>
                            <div class="flex flex-col items-center justify-center">
                                <ImgOaseBatik alt="Layanan Oase Batik" class="max-w-lg rounded-lg object-cover my-2" />
                                <i class="text-xs">Gambar: Showcase Oase Batik bersama Siswa</i>
                            </div>
                            <div class="mt-4 p-2 text-center">
                                <h2>Kreatif Bukan ? tertarik ?</h2>
                                <To alter='klik untuk melihat produk lainnya' visit='https://smpsransa.sch.id/showcase' custom={{ main: 'text-xl font-semibold', sub: 'px-4 rounded-full' }}>Lihat Produk Kreatif Siswa</To>
                            </div>
                        </div>
                    </details>
                </section>
                <section class="flex flex-col justify-center my-10 leading-8">
                    <h2 class="font-semibold">Kenali Lebih Lanjut tentang <b>Graha Waskita Kencana</b>:</h2>
                    <To alter='klik untuk melihat' visit='/visi-misi' custom={{ main: 'text-xl font-semibold', sub: 'px-4 rounded-full' }}>Pelajari Visi dan Misi</To>
                </section>
            </div>
        </Pages>
    )
});