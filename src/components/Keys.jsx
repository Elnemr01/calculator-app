import React from 'react'

const Keys = () => {

    let math_keys=["sin", "cos", "ln", "log", "tan", "π", "e", "^", "!", "√"];
    let basicKeys = ["7","8","9","*","/","4","5","6","-","(","1","2","3","+",")",".","0","DEL","AC","="];

    return (
        <div className='keys'>
            <div className="math-keys">
                {math_keys.map((item,indx)=> 
                <button key={indx}>{item}</button>
                )}
            </div>
            <div className="line"></div>
            <div className="basicKeys">
                {basicKeys.map((item,indx)=> 
                // <button key={indx}>{item}</button>
                <button key={indx} className={`${item>='0' && item<='9' ? "number" :"NAN"} ${item==="=" && "equal" }`}>{item}</button>
                )}
            </div>
        </div>
    )
}

export default Keys
