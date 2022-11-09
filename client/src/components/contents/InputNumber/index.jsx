import React, { useState } from 'react'
import "./styles.scss";

const InputNumber = ({ name }) => {
    const [input, setInput] = useState(0);

    const handleInput = (e) => {
        if (e.target.value && !isNaN(parseInt(e.target.value)))
            return setInput(parseInt(e.target.value))
        setInput(0)
    }

    const handleValue = (e, check) => {
        // console.log((input))
        if (check) return setInput(parseInt(input) + 1);
        if (parseInt(input) > 0)
            return setInput(parseInt(input) - 1);
        setInput(0)
    }

    function onlyNumberKey(evt) {
        const ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        return true;
    }

    return (
        <div className='input-number'>
            <span className='minus' onClick={(e) => handleValue(e, false)}><i className="fa-solid fa-minus"></i></span>
            <input type="text" onKeyPress={onlyNumberKey} onChange={handleInput} value={input} name={name} />
            <span className='plus' onClick={(e) => handleValue(e, true)}><i className="fa-solid fa-plus"></i></span>
        </div>
    )
}

export default InputNumber