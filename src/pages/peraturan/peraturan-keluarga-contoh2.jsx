import Bg from "../../assets/img/home-hero.svg";
import People from "../../assets/img/home-people-hero.svg";
import Navbar from "../navbar";

function Page() {
    return (
        <>
            <Navbar />
            <section>
                <div className="container-peraturan-keluarga-contoh2">
                    <div className="hero-peraturan">
                        <img src={Bg} alt="hero peraturan" />
                        <div className="home-people">
                            <img src={People} alt="people" />
                        </div>
                    </div>

                    <div className="container-button">
                        <a className="btn1" href="peraturan-keluarga-contoh2">Contoh 2</a>
                        <a className="btn2" href="peraturan-keluarga">Contoh 1</a>
                    </div>

                    <div className="container-header">
                        <div className="header">
                            <p>
                                Aturan di rumah Mario yaitu:
                            </p>
                            <ul>
                                <li>Bangun pukul 05.00.</li>
                                <li>Setelah bangun tidur, berdoa, merapikan tempat tidur, mandi, dan gosok gigi.</li>
                                <li>Makan di meja makan.</li>
                                <li>Bila ingin pergi, berpamitan kepada orang tua.</li>
                                <li>Setelah belajar, merapikan buku dan alat tulis.</li>
                                <li>Setelah bermain, merapikan mainan.</li>
                                <li>Setelah pulang sekolah, meletakkan tas di meja belajar, meletakkan sepatu di rak sepatu, ganti baju, cuci kaki dan tangan.</li>
                                <li>Sebelum tidur, cuci kaki dan tangan, gosok gigi dan berdoa.</li>
                                <li>Tidur paling lambat pukul 21.00.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Page;
