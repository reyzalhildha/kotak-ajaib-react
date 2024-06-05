import LinearHero from "../assets/img/linear-hero.png";
import StudentBoard from "../assets/img/student-board.svg";
import BoxClick from "../assets/img/box-click.svg";

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
                    <div className="box"></div>
                    {/* <a href="peraturan">
                        <img src={BoxClick} alt="Open Box" />
                    </a> */}
                </div>
            </section>
        </>
    );
}

export default Index;
