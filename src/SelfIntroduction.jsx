
import './SelfIntroduction.css'

function SelfIntroduction() {
    return (
        <div className="intro-card">
            <div className="profile-icon">R</div>

            <h1>Ragul S R</h1>
            <h3>Java Full Stack Developer Trainee</h3>

            <section>
                <h2>Education</h2>
                <p>
                    Bachelor of Engineering in Computer Science
                </p>
            </section>

            <section>
                <h2>Skills</h2>
                <div className="skills">
                    <span>Java</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>SQL</span>
                </div>
            </section>

            <section>
                <h2>Experience</h2>
                <p>
                    Java Full Stack Developer Trainee at Stackly.
                    Learning and building web development projects.
                </p>
            </section>

            <section>
                <h2>Hobbies / Interests</h2>
                <p>
                    Learning new technologies, coding, exploring
                    web development, and building creative projects.
                </p>
            </section>

            <section>
                <h2>Career Goal</h2>
                <p>
                    To become a skilled software developer and
                    build innovative, user-friendly applications.
                </p>
            </section>
        </div>
    )
}

export default SelfIntroduction
