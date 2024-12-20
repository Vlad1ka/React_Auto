import React, { useState } from 'react';
function PizzaBlock({ title, price, imageUrl, types }) {
  const [activeType, setActiveType] = React.useState(0);
  const [counter, setCounter] = useState(0);

  const typeNames = ["седан", "универсал"];

  const handleAddClick = () => {
    setCounter(prevState =>  prevState + 1 )
  }

  return (
    <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((typeId) =>
            <li 
              key={typeId}
              onClick={() => setActiveType(typeId)}
              className={activeType === typeId ? "active" : ""}
            >
              {typeNames[typeId]}
            </li>
            )}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} млн ₽</div>
          <div className="button button--outline button--add" onClick={() => handleAddClick()}>
            <span>Добавить</span>

            {counter > 0 &&  <i>{counter}</i> }
          </div>
        </div>
    </div>
  )
}

export default PizzaBlock;


