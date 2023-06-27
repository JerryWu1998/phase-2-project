import React, { useState } from 'react';

function BuildWand() {
  const [wandLength, setWandLength] = useState('');
  const [wandWood, setWandWood] = useState('');
  const [wandCore, setWandCore] = useState('');

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

    // Process the wand data here
    console.log('Wand Length:', wandLength);
    console.log('Wand Wood:', wandWood);
    console.log('Wand Core:', wandCore);

    // Reset the form
    setWandLength('');
    setWandWood('');
    setWandCore('');
  };

  return (
    <div>
      <h1>Build Your Wand</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Wand Length:
          <input type="text" value={wandLength} onChange={handleLengthChange} />
        </label>
        <label>
          Wand Wood:
          <input type="text" value={wandWood} onChange={handleWoodChange} />
        </label>
        <label>
          Wand Core:
          <input type="text" value={wandCore} onChange={handleCoreChange} />
        </label>
        <button type="submit">Create Wand</button>
      </form>
    </div>
  );
}

export default BuildWand;
