import PeraturanKeluarga from "../../assets/img/peraturan-keluarga.svg";
import PeraturanSekolah from "../../assets/img/peraturan-sekolah.svg";
import PeraturanMasyarakat from "../../assets/img/peraturan-masyarakat.svg";
import ChevronRight from "../../assets/img/chevron-right.svg";

import Navbar from "../navbar";

function Page() {
    return (
        <>
            <Navbar />
            <section>
                <div className="container-peraturan">
                    <div className="hero-peraturan"></div>

                    <div className="container-header">
                        <div className="header">
                            <h1>Menaati peraturan disekitar ku</h1>
                            <p>
                                Peraturan adalah segala yang harus ditaati dan dijalankan.
                                Wujud aturan adalah petunjuk, perintah, ketentuan,
                                dan patokan yang ditujukan untuk mengatur kehidupan.
                                Keberadaan aturan penting dalam menciptakan ketertiban dan keteraturan.
                                Peraturan berada di setiap keluarga, sekolah dan masyarakat.
                            </p>
                        </div>
                    </div>

                    <div className="container-contoh">
                        <div className="card">
                            <img src={PeraturanKeluarga} alt="peraturan keluarga" />
                            <h1>A.  Peraturan di keluarga</h1>
                            <p>
                                Aturan yang pertama kita temukan yaitu dilingkungan keluarga.
                                Setiap anggota keluarga memiliki aturan. Semua anggota keluarga harus
                                mengikuti aturan yang ada. Setiap aturan bisa ditulis, lalu ditempelkan diruang keluarga.
                                Aturan yang dibuat sangat bermanfaat. Semua menjadi berdisiplin dan bertanggung jawab.
                            </p>
                            <div className="button">
                                <a href="/peraturan-keluarga">
                                    Lihat contoh
                                    <img src={ChevronRight} alt="chevron right"></img>
                                </a>
                            </div>
                        </div>
                        <div className="card">
                            <img src={PeraturanSekolah} alt="peraturan sekolah" />
                            <h1>B.  Peraturan di sekolah</h1>
                            <p>
                                Aturan sekolah sering juga disebut tata tertib sekolah.
                                Aturan disekolah sangat bermanfaat bagi guru, peserta didi,
                                orang tua dan warga sekolah lainnya, dengan adanya aturan kegiatan
                                disekolah akan teratur atau tertib, aman, mudah dan nyaman.
                                Aturan disekolah meliputi dalam berbicara, berpakaian dan berperilaku.
                            </p>
                            <div className="button">
                                <a href="/peraturan-sekolah">
                                    Lihat contoh
                                    <img src={ChevronRight} alt="chevron right"></img>
                                </a>
                            </div>
                        </div>
                        {/* <div className="card">
                            <img src={PeraturanMasyarakat} alt="peraturan masyarakat" />
                            <h1>C.  Peraturan di masyarakat</h1>
                            <p>
                                Masyarakat terdiri dari warga. Peraturan dibuat pemerintah dan dilaksanakan oleh semua anggota masyarakat.
                                Peraturan dipatuhi oleh semua warga. Peraturan dibuat agar kehidupan teratur.
                                Peraturan di masyarakat ada yang tertulis dan tidak tertulis.
                                Peraturan berbentuk tulisan contohnya seperti peraturan lalu lintas.
                                Peraturan berbentuk tidak tertulis contohnya seperti aturan sopan santun.
                                Peraturan memiliki hukuman jika dilanggar. Warga yang baik mematuhi peraturan.
                                Peraturan dilaksanakan demi ketertiban umum.
                            </p>
                            <div className="button">
                                <a href="/peraturan-masyarakat">
                                    Lihat contoh
                                    <img src={ChevronRight} alt="chevron right"></img>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>


            </section>
        </>
    );
}

export default Page;
