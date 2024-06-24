import Bg from "../../assets/img/hero-masyarakat.svg";
import Navbar from "../navbar";

function Page() {
    return (
        <>
            <Navbar />
            <section>
                <div className="container-peraturan-masyarakat">
                    <div className="hero-peraturan">
                        {/* <img src={Bg} alt="hero peraturan" /> */}
                    </div>

                    <div className="container-header">
                        <div className="header">
                            <h1>A. Peraturan di masyarakat</h1>
                            <p>
                                Peraturan dalam masyarakat adalah kumpulan aturan dan norma yang ditetapkan
                                untuk mengatur perilaku individu agar tercipta ketertiban dan keharmonisan sosial.
                                Peraturan ini dapat berasal dari berbagai sumber, termasuk hukum negara, adat istiadat, dan norma-norma sosial.
                            </p>
                        </div>
                    </div>
                    <div className="container-peraturan">
                        <div className="left">
                            <h1>Pentingnya Aturan di Lingkungan Sekitar</h1>
                            <div className="card">
                                <ul>
                                    <li>
                                        Menjaga Ketertiban dan Keamanan: Aturan membantu menjaga ketertiban dan keamanan di lingkungan,
                                        sehingga semua anggota komunitas merasa aman dan nyaman.
                                    </li>
                                    <li>
                                        Mengatur Interaksi  Sosial: Aturan membantu mengatur interaksi antarwarga,
                                        memastikan bahwa semua orang saling menghormati dan memperlakukan satu sama lain  dengan adil.elah
                                    </li>
                                    <li>
                                        Melindungi Kepentingan Bersama: Aturan membantu melindungi kepentingan bersama,
                                        seperti  kebersihan lingkungan, pemeliharaan fasilitas umum, dan kelestarian lingkungan.
                                    </li>
                                    <li>
                                        Mendorong Partisipasi  Warga:  Aturan yang baik dapat mendorong partisipasi aktif warga
                                        dalam menjaga dan memajukan lingkungan mereka.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right">
                            <h1>Contoh peraturan dalam masyarakat yang harus dipatuhi</h1>
                            <div className="card">
                                <ul>
                                    <li>Membuang sampah pada tempatnya.</li>
                                    <li>Menjaga kelestarian lingkungan dan menanam pohon.</li>
                                    <li>Menggunakan air bersih secukupnya.</li>
                                    <li>Dilarang membuat keributan yang mengganggu kenyamanan orang lain.</li>
                                    <li>Semua anak sekolah wajib belajar pada jam 19.00 sampai 21.00.</li>
                                    <li>Warga wajib menjaga kebersihan lingkungan.</li>
                                    <li>Warga wajib menjaga keamanan dan ketertiban lingkungan.</li>
                                    <li>Warga yang berusia tujuh belas tahun ke atas wajib memiliki kartu tanda penduduk (KTP).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Page;
