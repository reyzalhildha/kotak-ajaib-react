import Bg from "../../assets/img/bg-peraturan-keluarga.svg";
import Navbar from "../navbar";

function Page() {
    const Img1 = require('../../assets/img/tepat-waktu.svg');
    const Img2 = require('../../assets/img/seragam-sekolah.svg');
    const Img3 = require('../../assets/img/sikap-perilaku.svg');
    const Img4 = require('../../assets/img/kebersihan-kerapihan.svg');
    const Img5 = require('../../assets/img/tugas-ujian.svg');

    const rulesMap = [
        {
            title: "Kehadiran dan Ketepatan Waktu", img: Img1,
            list: <ul>
                <li>Siswa diharapkan hadir tepat waktu setiap hari.</li>
                <li>Ketidakhadiran harus diberitahukan dengan alasan yang valid, seperti sakit atau urusan keluarga mendesak.</li>
            </ul>
        },
        {
            title: "Seragam sekolah", img: Img2,
            list: <ul>
                <li>Siswa harus mengenakan seragam sesuai dengan ketentuan sekolah</li>
                <li>Seragam harus bersih dan rapi</li>
            </ul>
        },
        {
            title: "Sikap & Perilaku", img: Img3,
            list: <ul>
                <li>Siswa diharapkan menghormati guru, staf, dan teman-teman</li>
                <li>Perilaku bullying, kekerasan, dan pelecehan tidak ditoleransi</li>
            </ul>
        },
        {
            title: "Kebersihan & Kerapian", img: Img4,
            list: <ul>
                <li>Siswa harus menjaga kebersihan kelas dan lingkungan sekolah</li>
                <li>Sampah harus dibuang pada tempatnya</li>
            </ul>
        },
        {
            title: "Tugas & Ujian", img: Img5,
            list: <ul>
                <li>Siswa harus menyelesaikan tugas dan mengikuti ujian sesuai jadwal</li>
                <li>Siswa tidak diperbolehkan untuk menyontek</li>
            </ul>
        },
    ]

    return (
        <>
            <Navbar />
            <section>
                <div className="container-peraturan-sekolah">
                    <div className="hero-peraturan">
                        <img src={Bg} alt="hero peraturan" />
                    </div>

                    <div className="container-header">
                        <div className="header">
                            <h1>A. Peraturan di sekolah</h1>
                            <p>
                                Aturan sekolah sering disebut juga tata tertib sekolah.
                                Aturan atau tata tertib sekolah merupakan hasil produk sekolah
                                agar kegiatan di sekolah berjalan lancar tanpa hambatan.
                                Tata tertib sekolah berlaku untuk seluruh warga sekolah.
                                Tujuan aturan atau tata tertib sekolah diantaranya:
                            </p>
                            <ul>
                                <li>1. Menciptakan suasana yang tenang</li>
                                <li>2. Proses belajar mengajar dapat berjalan dengan lancar</li>
                                <li>3. Menciptakan hubungan yang baik antar warga sekolah</li>
                                <li>4. Tujuan sekolah dapat tercipta</li>
                            </ul>
                            <p>
                                Aturan di sekolah biasanya dibuat untuk memastikan lingkungan belajar yang aman,
                                tertib, dan kondusif bagi semua siswa.
                                Meskipun setiap sekolah mungkin memiliki peraturan yang sedikit berbeda,
                                berikut adalah beberapa aturan umum yang sering ditemui di sekolah:
                            </p>
                        </div>
                    </div>

                    <div className="container-contoh">
                        {rulesMap.map((rule, index) => {
                            return (
                                <div key={index} className="card">
                                    <img src={rule.img.default} alt="peraturan keluarga" />
                                    <h1>{rule.title}</h1>
                                    {rule.list}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section >
        </>
    );
}

export default Page;
