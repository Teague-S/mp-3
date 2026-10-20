import styled from "styled-components";
import useCalculator from "./useCalculator.ts";

// same rules as the #calculator section of the MP-1 stylesheet
const StyledCalculator = styled.div`
    margin-top: calc(20px + 2vw);
    padding: calc(15px + 1vw);
    background-color: #22396F;
    color: #FCF1D0;

    & h3 {
        margin-top: 0;
    }

    & #calc-inputs, & #calc-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: calc(8px + 0.5vw);
        margin-bottom: calc(10px + 0.5vw);
    }

    & #calc-inputs label {
        display: block;
        margin-bottom: 4px;
    }

    & #calc-inputs input {
        width: 100%;
        max-width: 200px;
        padding: 6px;
        font-size: calc(14px + 0.3vw);
    }

    & #calc-buttons button {
        padding: calc(6px + 0.3vw) calc(12px + 0.5vw);
        font-size: calc(14px + 0.4vw);
        font-family: "Montserrat", sans-serif;
        background-color: #FCF1D0;
        color: #010736;
        border: 2px solid #0D1C42;
    }

    & #output {
        min-height: 1.5em;
        font-size: calc(18px + 0.8vw);
        padding: calc(6px + 0.3vw);
        background-color: #0D1C42;
        word-wrap: break-word;
    }

    @media screen and (max-width: 750px) {
        & #calc-inputs input {
            max-width: 100%;
        }
    }
`;

export default function Calculator() {
    const {first, setFirst, second, setSecond, result, calculate, clearCalc} = useCalculator();

    // the operator buttons only differ by their symbol, so they are made with map()
    const operators = ["+", "-", "*", "/", "**"];

    // negative results are shown in red
    const outputColor = Number(result) < 0 ? "red" : "#FCF1D0";

    return (
        <StyledCalculator>
            <h3>Calculator</h3>
            <div id="calc-inputs">
                <div>
                    <label htmlFor="first-number">First number:</label>
                    <input type="number" id="first-number" value={first} onChange={(e) => setFirst(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="second-number">Second number:</label>
                    <input type="number" id="second-number" value={second} onChange={(e) => setSecond(e.target.value)}/>
                </div>
            </div>
            <div id="calc-buttons">
                {
                    operators.map((operator) =>
                        <button key={operator} onClick={() => calculate(operator)}>{operator}</button>
                    )
                }
                <button onClick={clearCalc}>Clear</button>
            </div>
            <h3 id="output" style={{color: outputColor}}>{result}</h3>
        </StyledCalculator>
    );
}
