import Bg from "../../assets/img/bg-peraturan-keluarga.svg";
import Bg1 from "../../assets/img/bg-peraturan-keluarga-1.svg";
import Bg2 from "../../assets/img/bg-peraturan-keluarga-2.svg";
import Navbar from "../navbar";

function Page() {
    const MenyapuRumah = require('../../assets/img/berangkat-sekolah.svg');
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

    console.log("rules: " + rulesMap);


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
                        </div>
                    </div>

                    <div className="container-contoh">
                        {rulesMap.map((rule, index) => {
                            return (
                                <div key={index} className="card">
                                    <img src={rule.img.default} alt="peraturan keluarga" />
                                    <h1>{index + 1}. {rule.title}</h1>
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
