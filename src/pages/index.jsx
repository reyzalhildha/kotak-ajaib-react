import StudentBoard from "../assets/img/student-board.svg";
import ClickHere from "../assets/img/click-here.svg";

function Index() {
    return (
        <>
            <section>
                <div className="hero"></div>

                <div className="container-index">

                    <div className="container-board">
                        <div className="student-board">
                            <img src={StudentBoard} alt="Student Board" />
                        </div>
                    </div>

                    <div className="container-box">
                        <div className="box-click">
                            {/* <img src={ClickHere} alt="click here"></img> */}
                            <a href="peraturan">
                                <div className="box"></div>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    );
}

export default Index;
