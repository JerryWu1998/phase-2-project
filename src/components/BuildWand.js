import React, { useState } from 'react';

function BuildWand() {
  const [wandLength, setWandLength] = useState(10);
  const [wandWood, setWandWood] = useState('wood1');
  const [wandCore, setWandCore] = useState('core1');

  const handleLengthChange = (event) => {
    setWandLength(event.target.value);
  };

  const handleWoodChange = (event) => {
    setWandWood(event.target.value);
  };

  const handleCoreChange = (event) => {
    setWandCore(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(wandLength, wandWood, wandCore);


  };

  return (
    <div>
      <h1>Build Your Wand</h1>
      <form onSubmit={handleSubmit}>
        <p>Wand Length:</p>
        <select name="length" onChange={handleLengthChange} value={wandLength}>
          <option value={10}>10 inches</option>
          <option value={11}>11 inches</option>
          <option value={12}>12 inches</option>
        </select>
        <p>Wand Wood:</p>
        <select name="wood" onChange={handleWoodChange} value={wandWood}>
          <option value="wood1">wood1</option>
          <option value="wood2">wood2</option>
          <option value="wood3">wood3</option>
        </select>
        <p>Wand Core:</p>
        <select name="core" onChange={handleCoreChange} value={wandCore}>
          <option value="core1">core1</option>
          <option value="core2">core2</option>
          <option value="core3">core3</option>
        </select>
        <button type="submit">Create Wand</button>
      </form>
    </div>
  );
}

export default BuildWand;
