import { useState } from "react";

import Button from "./Button";
import Result from "./Result";
import ButtonNumber from "./ButtonNumber";
import ButtonOperator from "./ButtonOperator";
import ButtonEnter from "./ButtonEnter";
import ButtonDelete from "./ButtonDelete";

const Calculator = () => {
    const [result, setResult] = useState("0");
    const [temp, setTemp] = useState("");
    const [operator, setOperater] = useState("");


  return (
    <div className="bg-gray-300">
      <Result result={result}/>
      <div className="grid grid-cols-4">
        
        <ButtonDelete name="AC" result={result} setResult={setResult} btnType="2"/>
        <ButtonOperator name="+/-" result={result} setResult={setResult} setTemp={setTemp} setOperator={setOperater} btnType="2"/>
        <ButtonOperator name="%" result={result} setResult={setResult} setTemp={setTemp} setOperator={setOperater} btnType="2"/>
        <ButtonOperator name="÷" result={result} setResult={setResult} setTemp={setTemp} setOperator={setOperater} btnType="3"/>
        <ButtonNumber name="7" setResult={setResult} result={result} btnType="1"/>
        <ButtonNumber name="8" setResult={setResult} result={result} btnType="1"/>
        <ButtonNumber name="9" setResult={setResult} result={result} btnType="1"/>
        <ButtonOperator name="x" result={result} setResult={setResult} setTemp={setTemp} setOperator={setOperater} btnType="3"/>
        <ButtonNumber name="4" setResult={setResult} result={result} btnType="1"/>
        <ButtonNumber name="5" setResult={setResult} result={result} btnType="1"/>
        <ButtonNumber name="6" setResult={setResult} result={result} btnType="1"/>
        <ButtonOperator name="-" result={result} setResult={setResult} setTemp={setTemp} setOperator={setOperater} btnType="3"/>
        <ButtonNumber name="1" setResult={setResult} result={result} btnType="1"/>
        <ButtonNumber name="2" setResult={setResult} result={result} btnType="1"/>
        <ButtonNumber name="3" setResult={setResult} result={result} btnType="1"/>
        <ButtonOperator name="+" result={result} setResult={setResult} setTemp={setTemp} setOperator={setOperater} btnType="3"/>
        <ButtonNumber name="0" setResult={setResult} result={result} btnType="1"/>
        <ButtonNumber name="00" setResult={setResult} result={result} btnType="1"/>
        <ButtonOperator name="." result={result} setResult={setResult} setTemp={setTemp} setOperator={setOperater} btnType="1"/>
        <ButtonEnter name="=" operator={operator} result={result} setResult={setResult} temp={temp} setTemp={setTemp} btnType="3"/>
      </div>
    </div>
  );
};

export default Calculator;