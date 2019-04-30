import React from 'react';

export default (props) =>{
	const select = () => props.select(props.info.name);
  const clickable = props.end? false: (props.info.enoughMoney ? true : false);
	return (
		<div>
		  <button className={"chocolate " + (clickable ? 'enabledChoco' : 'disabled')}
		        onClick={select}>{props.info.name}</button>
			<small className="price">${props.info.price}</small>
		</div>

	)
}
