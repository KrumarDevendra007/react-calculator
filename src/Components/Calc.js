import React, { useState } from "react";


const Calc = () => {
    let [num1, setNum1] = useState("")
    let [num2, setNum2] = useState("")
    const [result, setResult] = useState("")
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState("")

    //Function for add
    function add(event){
        if(num1 === ""){
            setMessage("Num1 cannot be empty");
            setResult("Error");
            setSuccess("");
        }  
        else if(num2 === ""){
            setMessage("Num2 cannot be empty");
            setResult("Error");
            setSuccess("");
        }  
        else{
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            
            let ans = num1 + num2;
            setMessage("");
            setSuccess("Success");
            setResult(ans.toFixed(2));

        }
    }

    // Funtion for subtract
    function subtract(event){
        if(num1 === ""){
            setMessage("Num1 cannot be empty");
            setResult("Error");
            setSuccess("");
        }  
        else if(num2 === ""){
            setMessage("Num2 cannot be empty");
            setResult("Error");
            setSuccess("");
        }  
        else{
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            
            let ans = num1 - num2;
            setMessage("");
            setSuccess("Success");
            setResult(ans.toFixed(2));

        }
    }

    function multiple(event){
        if(num1 === ""){
            setMessage("Num1 cannot be empty");
            setResult("Error");
            setSuccess("");
        }  
        else if(num2 === ""){
            setMessage("Num2 cannot be empty");
            setResult("Error");
            setSuccess("");
        }  
        else{
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            
            let ans = num1 * num2;
            setMessage("");
            setSuccess("Success");
            setResult(ans.toFixed(2));

        }
    }

    function divide(event){
        if(num1 === ""){
            setMessage("Num1 cannot be empty");
            setResult("Error");
            setSuccess("");
        }  
        else if(num2 === ""){
            setMessage("Num2 cannot be empty");
            setResult("Error");
            setSuccess("");
        }  
        else{
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            
            let ans = num1 / num2;
            setMessage("");
            setSuccess("Success");
            setResult(ans.toFixed(2));

        }
    }

    


    return (
        <div className="main">
            <h2>React Calculator</h2>
            <div className="textInput">
            <input  
            type="text"
            required 
            placeholder="Num1"
            value={num1}
            onChange={(event) => setNum1(event.target.value)}></input>
            </div>

            <div className="textInput">
            <input  
            type="text"
            required 
            placeholder="Num2"
            value={num2}
            onChange={(event) => setNum2(event.target.value)}></input>
            </div>

            <div className="btnSection">
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
            <button onClick={multiple}>*</button>
            <button onClick={divide}>/</button>
            </div>

            <div>
                <p className="result">{result}</p>
                <p className="msg">{message}</p>
                <p className="success">{success}</p>
            </div>
        </div>
    )
}

export default Calc;