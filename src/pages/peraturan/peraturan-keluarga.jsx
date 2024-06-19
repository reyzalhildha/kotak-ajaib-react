import Bg from "../../assets/img/bg-peraturan-keluarga.svg";
import Navbar from "../navbar";

function Page() {
    const MenyapuRumah = require('../../assets/img/menyapu-rumah.svg');
    const TempatTidur = require('../../assets/img/merapikan-tempat-tidur.svg');
    const BuangSampah = require('../../assets/img/buang-sampah.svg');
    const BerangkatSekolah = require('../../assets/img/berangkat-sekolah.svg');
    const TidakBertengkar = require('../../assets/img/tidak-bertengkar.svg');

    const rulesMap = [
        { title: "Menyapu Rumah", img: MenyapuRumah },
        { title: "Merapikan tempat tidur", img: TempatTidur },
        { title: "Membuang sampah pada tempatnya", img: BuangSampah },
        { title: "Berpamitan saat berangkat ke sekolah", img: BerangkatSekolah },
        { title: "Tidak bertengkar sesama saudara", img: TidakBertengkar }
    ]

    return (
        <>
            <Navbar />
            <section>
                <div className="container-peraturan-keluarga">
                    <div className="hero-peraturan">
                        <img src={Bg} alt="hero peraturan" />
                    </div>

                    <div className="container-header">
                        <div className="header">
                            <h1>A. Peraturan di keluarga</h1>
                            <p>
                                Aturan yang pertama kita temukan yaitu dilingkungan keluarga.
                                Setiap anggota keluarga memiliki aturan.
                                Semua anggota keluarga harus mengikuti aturan yang ada.
                                Setiap aturan bisa ditulis, lalu ditempelkan diruang keluarga.
                                Aturan yang dibuat sangat bermanfaat.
                                Semua menjadi berdisiplin dan bertanggung jawab.
                            </p>
                            <p>
                            Aturan di rumah dibuat bersama oleh kepala keluarga dan anggota keluarga. 
                            Pembuatan aturan harus diketahui bersama. Aturan di rumah adalah suatu cara 
                            (ketentuan, patokan, petunjuk, perintah, dan larangan) yang telah dibuat dan 
                            disepakati bersama.Aturan wajib taati oleh anggota keluarga di rumah. 
                            Aturan sering disebut juga tata tertib. Aturan di rumah sangat bermanfaat bagi anggota keluarga. 
                            Dengan adanya aturan, kehidupan keluarga di rumah teratur/tertib, aman, mudah, lancar, dan nyaman. 
                            Aturan di rumah ada yang berlaku pada pagi, siang, sore, dan malam hari. 
                            Setiap anggota keluarga mempunyai hak dan kewajiban masing-masing. 
                            Hak dan kewajiban tersebut berupa kegiatan yang harus dijalankan sesuai aturan di rumah. 
                            Aturan atau tata tertib setiap keluarga dapat berbeda-beda.
                            </p>
                        </div>
                    </div>

                    <div className="container-button">
                        <button type="button" className="btn1">Contoh 1</button>
                        <button type="button" className="btn2">Contoh 2</button>
                    </div>

                    <div className="container-contoh">
                        {rulesMap.map((rule, index) => {
                            return (
                                <div key={index} className="card">
                                    <img src={rule.img.default} alt="peraturan keluarga" />
                                    <h1>{rule.title}</h1>
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
