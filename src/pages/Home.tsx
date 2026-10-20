import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <h2>Welcome</h2>
            <p>
                I'm a computer science and math student at Boston University and the founder of
                StatSlam, a data-driven sports betting app. This site is a walkthrough of my
                resume: where I have studied, where I have worked, what I have built, and what I
                am looking for next.
            </p>

            <h3>Active, successful entrepreneur</h3>
            <p>
                Founded StatSlam, a data-driven sports betting app that combines my passion for
                coding and sports to help bettors make statistically informed picks.
            </p>

            <h3>Creative coding problem-solver</h3>
            <p>
                Designed a scalable back-end system using real-time APIs paired with MongoDB for
                efficient data storage and retrieval.
            </p>

            <h3>Team player</h3>
            <p>
                Collaborated with an inter-developer team to integrate user-friendly data
                visualizations, enhancing usability and overall experience.
            </p>

            <h3>Athlete, musician, and full-time student</h3>
            <p>
                Balances a demanding academic schedule with running a business, skiing and
                fencing, and playing keyboard works by Bach and Coltrane, proving discipline,
                focus, and creativity go hand-in-hand.
            </p>

            <p>
                Use the menu to explore each section, or jump straight
                to <Link to="/projects">Projects</Link> to see StatSlam and a JavaScript
                calculator.
            </p>
        </>
    );
}
