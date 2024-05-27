import LinearHero from "../assets/img/linear-hero.png";
import Student from "../assets/img/student.png";
import PeopleIcon from "../assets/img/icon/people.svg";
import LockIcon from "../assets/img/icon/lock.svg";
import EyeIcon from "../assets/img/icon/eye.svg";

function Index() {

    return (
        <>
            <section>
                <div className="hero">
                    <img src={LinearHero} alt="hero" />
                    <div className="student">
                        <img src={Student} alt="student" />
                    </div>
                    <div className="form">
                        <h3>Masuk Akun Anda</h3>
                        <div className="email">
                            <img className="left-icon" src={PeopleIcon} alt="people" />
                            <input placeholder="Email atau nomor" />
                        </div>
                        <div className="password">
                            <img className="left-icon" src={LockIcon} alt="lock" />
                            <input placeholder="Kata sandi" />
                            <img className="right-icon" src={EyeIcon} alt="lock" />
                        </div>

                        <div className="footer">
                            <div className="flex justify-between">
                                <div className="rememberMe">
                                    <input type="checkbox" name="rememberme" /> <p>Ingatkan Saya</p>
                                </div>
                                <div className="forgot">
                                    <p>Lupa sandi</p>
                                </div>
                            </div>
                        </div>

                        <div className="submit">
                            <button type="submit">Masuk untuk melanjutkan</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
