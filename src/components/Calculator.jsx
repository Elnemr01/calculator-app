import React, { useState } from 'react'
import DisplayWindow from './DisplayWindow'
import Keys from './Keys'

const Calculator = () => {
    let [expression,setExperssion]=useState("");
    let [displayExp,setDisplayExp]=useState("");
    let [result,setResult]=useState("0");

    let math_keys_obj= {
        sin:"Math.sin",
        cos:"Math.cos",
        tan:"Math.tan",
        ln:"Math.log",
        log:"Math.log10",
        e:"Math.E",
        π:"Math.PI",
        "√":"Math.sqrt",
        "^":"**",
    }

    let calcResult = () => {
        if(expression.length!==0) {
            try {
                let compute=eval(expression);
                setResult(compute);
            } catch (error) {
                setResult("Error!!!!!!!!!!!!!!!!!");
            }
        }
        else {
            setResult("0");
        }
    }

    let handleButton=(value)=> {
        // console.log(value);
        if(value==="AC") {
            setExperssion("");
            setDisplayExp("");
            setResult("0");
        }
        else if (value==="DEL") {
            setExperssion(expression.slice(0,-1));
            setDisplayExp(displayExp.slice(0,-1));
        }
        else if (math_keys_obj.hasOwnProperty(value)) {
            setExperssion(expression+math_keys_obj[value]);
            setDisplayExp(displayExp+value);
        }
        else if (value==="!") {
            let lastNum=extractLastNum(expression);
            if(lastNum!= null) {
                let num=parseFloat(lastNum);
                setDisplayExp(displayExp+value);
                setExperssion(expression.replace(lastNum,factorial(num)));
            }
        }
        else if (value==="=") {
            calcResult();
        }
        else {
            setExperssion(expression+value);
            setDisplayExp(displayExp+value);
        }
        
    }

    function extractLastNum (exp) {
        let numbers=exp.match(/\d+/g);
        return numbers ? numbers[numbers.length-1] :null;
    }

    function factorial (n) {
        let res=1;
        if(n===1 || n===0) return res;
        else {
            for(let i=1;i<=n;i++) res*=i;
        }

        return res;
    }



    return (
    <div className='calculator'>
        <DisplayWindow expression={displayExp} result={result} />
        <Keys handleButton={handleButton} />
    </div>
    )
}

export default Calculator
