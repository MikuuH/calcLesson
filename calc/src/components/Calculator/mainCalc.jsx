import CalculatorOne from "./srcCalc/CalculatorOne";
import CalculatorTwo from "./srcCalc/CalculatorTwo";
import CalculatorThree from "./srcCalc/CalculatorThree";
import CalculatorFor from "./srcCalc/CalculatorFor";
import './srcCalc/Calculator.css';

export default function MainCalc() {
    return (
        <div className="main-container">
            <h1>ПРОСТОЙ КАЛЬКУЛЯТОР</h1>
            <div className="row">
                <div className="calculator"><CalculatorOne /></div>
                <div className="calculator"><CalculatorTwo /></div>
            </div>
            <div className="row">
                <div className="calculator"><CalculatorThree /></div>
                <div className="calculator"><CalculatorFor /></div>
            </div>
        </div>
    );
}
