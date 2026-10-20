import {useState} from "react";

// Custom Hook for the calculator.
// In MP-1, addition(), subtraction(), multiplication(), division(), and power() all repeated
// the same steps: read both inputs as numbers, do the math, print the result.
// Here those steps live once in calculate(), and the operator decides the math.
export default function useCalculator() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [result, setResult] = useState("");

    // raises base to exponent using a for loop (no ** and no Math.pow)
    function power(base: number, exponent: number) {
        let answer = 1;
        let count = exponent;
        if (exponent < 0) {
            count = -exponent;
        }
        for (let i = 0; i < count; i++) {
            answer = answer * base;
        }
        if (exponent < 0) {
            answer = 1 / answer;
        }
        return answer;
    }

    function calculate(operator: string) {
        // input values are strings, so convert them before doing math
        const a = Number(first);
        const b = Number(second);
        let answer = 0;

        switch (operator) {
            case "+":
                answer = a + b;
                break;
            case "-":
                answer = a - b;
                break;
            case "*":
                answer = a * b;
                break;
            case "/":
                answer = a / b;
                break;
            case "**":
                answer = power(a, b);
                break;
        }
        setResult(String(answer));
    }

    // empties both inputs and the output
    function clearCalc() {
        setFirst("");
        setSecond("");
        setResult("");
    }

    return {first, setFirst, second, setSecond, result, calculate, clearCalc};
}
