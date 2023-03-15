import React, { useState } from "react";

function DynamicKeysExample() {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState({});

  const removeItem = (item) => {
    console.log(item);
    const updatedList = list.filter((i) => i.key !== item.key);
    setList(updatedList);
  };

  const onChangeHandler = (event) => {
    setMessage({ key:event.target.value, titel: event.target.value });
  };
  const onAddButtonHandler = () => {
    setList([...list, message]);

    setMessage({});
  };

  return (
    <>
      <div>
        <h2>Dynamic Key</h2>
        <input
          type="text"
          placeholder="Enter Input"
          onChange={onChangeHandler}
         
        />
        <button onClick={onAddButtonHandler}>Add</button>
        <ul>
          {list.map((item) => (
            <li key={item.key} onClick={() => removeItem(item)}>
              {item.titel}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DynamicKeysExample;