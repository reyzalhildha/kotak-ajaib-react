import Lkpd from "../assets/img/lkpd.svg";
import QuestionPancasila from "../assets/img/question-pancasila.svg";
import Games from "../assets/img/games.svg";
import Youtube from "../assets/img/youtube.svg";
import Pdf from "../assets/file/LKPD PENDIDIKAN PANCASILA.pdf";
import Pertanyaan from "../assets/file/Pertanyaan Pendidikan pancasila 20 soal.docx";

import Navbar from "./navbar";

function Page() {
    return (
        <>
            <Navbar />
            <section>
                <div className="container-kotak-ajaib">
                    <div className="hero-kotak-ajaib"></div>

                    <div className="container-body">
                        <div className="header">
                            <h1>Kotak Ajaib!</h1>
                            <div className="container-card">

                                <div className="card">
                                    <div className="img">
                                        <img src={Lkpd} alt="LKPD" />
                                    </div>
                                    <div className="title">
                                        <p>LKPD Pendidikan Pancasila</p>
                                    </div>
                                    <div className="button">
                                        <a href={Pdf} target="_self">Open</a>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="img">
                                        <img src={QuestionPancasila} alt="Pertanyaan Pendidikan Pancasila" />
                                    </div>
                                    <div className="title">
                                        <p>Pertanyaan Pendidikan Pancasila</p>
                                    </div>
                                    <div className="button">
                                        <a href="/soal-materi" target="_self">Open</a>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="img">
                                        <img src={Games} alt="Games" />
                                    </div>
                                    <div className="title">
                                        <p>Games</p>
                                    </div>
                                    <div className="button">
                                        {/* <a href="https://wordwall.net/play/74473/644/898" target="_self">Open</a> */}
                                        <a href="https://wordwall.net/resource/76707209" target="_self">Open</a>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="img">
                                        <img src={Youtube} alt="Youtube" />
                                    </div>
                                    <div className="title">
                                        <p>Video Belajar</p>
                                    </div>
                                    <div className="button">
                                        <a href="https://youtu.be/X6y2XS0Z8co?si=ajH7mX4eEVs27JKh" target="_self">Open</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    );
}

export default Page;
