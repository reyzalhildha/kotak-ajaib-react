import LinearBottom from "../assets/img/linear-bottom.svg";
import Lkpd from "../assets/img/lkpd.svg";
import QuestionPancasila from "../assets/img/question-pancasila.svg";
import Games from "../assets/img/games.svg";
import Youtube from "../assets/img/youtube.svg";

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
                                        <a>Download</a>
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
                                        <a>Download</a>
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
                                        <a>Download</a>
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
                                        <a>Download</a>
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
