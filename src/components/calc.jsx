import React, { useState } from 'react';
import * as math from 'mathjs'

function Calculator(props) {
	const [result, setResult] = useState(0);
	const [equation, setEquation] =useState('');

	function handleClear(e) {
    	e.preventDefault();
    	setEquation('');
    	setResult(0);
  	}

  	async function handleClick(e) {
  		await setEquation(equation + e.target.value);
  	}

  	function handleDelete() {
  		setEquation(equation.slice(0, -1));
  	}

	function handleEquation(e) {
  		e.preventDefault();
  		try {
		    math.evaluate(equation) == Infinity ? setResult('Cannot divide by 0!') : setResult(math.evaluate(equation)); 
			setEquation('')			
		} catch (error) {
		    if (error instanceof SyntaxError) {
		        setResult('Unfinished equation');
		    }
		}
  	}

	return (
		<div>
			<div className="Result-Box">
				<p className="Equation">{equation}</p>
				<p className="Result">{result}</p>
			</div>
			<div className="Calc-Buttons">
				<button onClick={handleClear} className="Clear-Btn">CE</button>
				<button onClick={handleDelete} value=''>DEL</button>
				<button onClick={handleClick} value='/' className="Action-Btn">÷</button>
				<button onClick={handleClick} value='7'>7</button>
				<button onClick={handleClick} value='8'>8</button>
				<button onClick={handleClick} value='9'>9</button>
				<button onClick={handleClick} value='*' className="Action-Btn">x</button>
				<button onClick={handleClick} value='4'>4</button>
				<button onClick={handleClick} value='5'>5</button>
				<button onClick={handleClick} value='6'>6</button>
				<button onClick={handleClick} value='-' className="Action-Btn">-</button>
				<button onClick={handleClick} value='1'>1</button>
				<button onClick={handleClick} value='2'>2</button>
				<button onClick={handleClick} value='3'>3</button>
				<button onClick={handleClick} value='+' className="Action-Btn">+</button>
				<button onClick={handleClick} value='0' className="Zero-Btn">0</button>
				<button onClick={handleEquation} value='=' className="Action-Btn">=</button>
			</div>
		</div>
	);
};

export default Calculator;