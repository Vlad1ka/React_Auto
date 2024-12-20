import React, { useState } from 'react';
function AutoBlock({ title, price, imageUrl, types }) {
  const [activeType, setActiveType] = React.useState(0);
  const [counter, setCounter] = useState(0);

  const typeNames = ["седан", "универсал"];

  const handleAddClick = () => {
    setCounter(prevState =>  prevState + 1 )
  }

  return (
    <div className="auto-block">
        <img className="auto-block__image" src={imageUrl} alt="Auto" />
        <h4 className="auto-block__title">{title}</h4>
        <div className="auto-block__selector">
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
        <div className="auto-block__bottom">
          <div className="auto-block__price">от {price} млн ₽</div>
          <div className="button button--outline button--add" onClick={() => handleAddClick()}>
            <span>Добавить</span>

            {counter > 0 &&  <i>{counter}</i> }
          </div>
        </div>
    </div>
  )
}

export default AutoBlock;


