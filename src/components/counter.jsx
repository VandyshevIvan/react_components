import React, { useState } from "react";

const Counter = (props) => {
  const {value} = props
  const formatValue = () => {
    return value === 0 ? "empty" : value;
  };
  const getBageClasses = () => {
    let classes = "badge m-2  ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClasses()}>{formatValue()}</span>

      <button className=" btn btn-primary btn-sm m-2" onClick={() =>props.onIncrement(props.id)}>
        +
      </button>

      <button className=" btn btn-primary btn-sm m-2" onClick={() =>props.onDecrement(props.id)}>
        -
      </button>
		<button className="btn btn-danger btn-sm m-2" onClick={()=>props.onDelete(props.id)}>Delete</button>
    </div>
  );
};

export default Counter;

// const handleTagChange = (id) =>{
// 	setTags(prevState => prevState.filter(tag=>tag!==id))
// 	console.log(id)
// }
// // сначала создали функцию которая будет возвращать id того tag на который мы нажимали,
// // затем при помощи setTags и prevState.filter мы получаем массив элементов кроме того  tage, id которого мы передали
