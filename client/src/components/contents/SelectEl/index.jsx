import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";

const SelectOptions = ({ data,name }) => {

  const handleClickOtion = (e, rel, name) => {    
    e.target.parentNode.style.height = 0;
    e.target.parentNode.style.pointerEvents = "none";
    e.target.parentNode.previousSibling.previousSibling.value = rel;
    e.target.parentNode.previousSibling.innerHTML = name    
  }



  return (
    <>
      <div className="custom-select">
        {name}
      </div>
      <ul className="c-select-options">
        {data &&
          data.map((el, id) => (
            <li
              onClick={(e) => handleClickOtion(e, el
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, ""),el)}
              key={id}
              rel={el
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "")}
            >
              {el}
            </li>
          ))}
      </ul>
    </>
  );
};

const SelectEl = ({ data, name }) => {

  const [isSelect,setIsSelect] = useState(false);

  const refSelect = useRef();

  const handelClickSelect = (e) => {
    const $this = e.target;
    let height = 0;
    console.log(e.target);
    if (e.target === refSelect.current.querySelector('.custom-select')) {        
      if(!isSelect){
        $this.nextSibling.childNodes.forEach(el =>{
          height = height + el.offsetHeight;
        })
      }      
      $this.nextSibling.style.height = height + "px";
      
      $this.nextSibling.style.pointerEvents = "all";
      
    }
    setIsSelect(!isSelect)
  }

  useEffect(() => {
    const oulineClick = (e) => {
      
      if (!refSelect.current.contains(e.target)) {
        refSelect.current.querySelector('.c-select-options').style.height = 0;
        refSelect.current.querySelector('.c-select-options').style.pointerEvents = "none";
        setIsSelect(false)
      }
    }
    document.addEventListener('mousedown', oulineClick);
    return () => {
      document.removeEventListener("mousedown", oulineClick)
    }

  })


  return (
    <div ref={refSelect} className={"c-select"+ (isSelect ? " active":"")} onClick={(e) => handelClickSelect(e)}>
      <select name={name.toLowerCase()}>
        {data &&
          data.map((el, id) => (
            <option
              key={id}
              value={el
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "")}
            >
              {el}
            </option>
          ))}
      </select>
      <SelectOptions data={data} name={name}/>
    </div>
  );
};

export default SelectEl;
