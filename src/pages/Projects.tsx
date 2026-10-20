import Calculator from "../components/calculator/Calculator.tsx";

export default function Projects() {
    return (
        <>
            <h2>Projects</h2>

            <h3>StatSlam</h3>
            <p>
                A data-driven sports betting app that shows users statistically profitable
                picks. I built the back-end on real-time sports data APIs with MongoDB for
                storage and AWS for hosting, and worked with the front-end team (the friends I
                founded the app with) to find the right balance between showing data and keeping
                the interface simple.
            </p>

            <h3>JavaScript Calculator</h3>
            <p>
                A small calculator built for CS-303. Enter two numbers and pick an operation.
                The power button uses a for loop (instead of the built-in operator), and
                negative results are shown in red.
            </p>

            <Calculator/>
        </>
    );
}
