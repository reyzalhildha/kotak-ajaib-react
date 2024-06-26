import LinearHero from "../assets/img/linear-hero.png";
import StudentBoard from "../assets/img/student-board.svg";
import ClickHere from "../assets/img/click-here.svg";

function Index() {
    return (
        <>
            <section>
                <div className="hero">
                    <img src={LinearHero} alt="hero" />
                </div>

                <div className="student-board">
                    <img src={StudentBoard} alt="Student Board" />

                    <div className="frame-board">
                        <p className="text-board">
                            Selamat datang di Pembelajaran Pendidikan Pancasila Materi “Menaati Peraturan Disekitarku”
                        </p>
                    </div>
                </div>

                <div className="box-click">
                    <img src={ClickHere} alt="click here"></img>
                    <a href="peraturan">
                        <div className="box"></div>
                    </a>
                </div>
            </section>
        </>
    );
}

export default Index;
