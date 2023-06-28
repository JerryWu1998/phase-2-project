import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function BuildWand({ user, onUpdateWand }) {

  const history = useHistory();
  const [wandLength, setWandLength] = useState('Ten');
  const [wandWood, setWandWood] = useState('Ash');
  const [woodDescription, setWoodDescription] = useState(`The ash wand cleaves to its one true master and ought not to be passed on or gifted from the original owner, because it will lose power and skill. This tendency is extreme if the core is of unicorn. Old superstitions regarding wands rarely bear close examination, but I find that the old rhyme regarding rowan, chestnut, ash and hazel wands (rowan gossips, chestnut drones, ash is stubborn, hazel moans) contains a small nugget of truth. Those witches and wizards best suited to ash wands are not, in my experience, lightly swayed from their beliefs or purposes. However, the brash or over-confident witch or wizard, who often insists on trying wands of this prestigious wood, will be disappointed by its effects. The ideal owner may be stubborn, and will certainly be courageous, but never crass or arrogant.`);
  const [wandCore, setWandCore] = useState('Dragon Heartstring');
  const [coreDescription, setCoreDescription] = useState(`As a rule, dragon heartstrings produce wands with the most power, and which are capable of the most flamboyant spells. Dragon wands tend to learn more quickly than other types. While they can change allegiance if won from their original master, they always bond strongly with the current owner. The dragon wand tends to be easiest to turn to the Dark Arts, though it will not incline that way of its own accord. It is also the most prone of the three cores to accidents, being somewhat temperamental.`);


  const handleLengthChange = (event) => {
    setWandLength(event.target.value);
  };

  const handleWoodChange = (event) => {
    setWandWood(event.target.value);
    if (event.target.value === 'Elder') {
      setWoodDescription(`The rarest wand wood of all, and reputed to be deeply unlucky, the elder wand is trickier to master than any other. It contains powerful magic, but scorns to remain with any owner who is not the superior of his or her company; it takes a remarkable wizard to keep the elder wand for any length of time. The old superstition, ‘wand of elder, never prosper,’ has its basis in this fear of the wand, but in fact, the superstition is baseless, and those foolish wandmakers who refuse to work with elder do so more because they doubt they will be able to sell their products than from fear of working with this wood. The truth is that only a highly unusual person will find their perfect match in elder, and on the rare occasion when such a pairing occurs, I take it as certain that the witch or wizard in question is marked out for a special destiny. An additional fact that I have unearthed during my long years of study is that the owners of elder wands almost always feel a powerful affinity with those chosen by rowan.`)
    } else if (event.target.value === 'Hawthorn') {
      setWoodDescription(`The wandmaker Gregorovitch wrote that hawthorn ‘makes a strange, contradictory wand, as full of paradoxes as the tree that gave it birth, whose leaves and blossoms heal, and yet whose cut branches smell of death.’ While I disagree with many of Gregorovitch’s conclusions, we concur about hawthorn wands, which are complex and intriguing in their natures, just like the owners who best suit them. Hawthorn wands may be particularly suited to healing magic, but they are also adept at curses, and I have generally observed that the hawthorn wand seems most at home with a conflicted nature, or with a witch or wizard passing through a period of turmoil. Hawthorn is not easy to master, however, and I would only ever consider placing a hawthorn wand in the hands of a witch or wizard of proven talent, or the consequences might be dangerous. Hawthorn wands have a notable peculiarity: their spells can, when badly handled, backfire.`)
    } else if (event.target.value === 'Laurel') {
      setWoodDescription(`It is said that a laurel wand cannot perform a dishonourable act, although in the quest for glory (a not uncommon goal for those best suited to these wands), I have known laurel wands perform powerful and sometimes lethal magic. Laurel wands are sometimes called fickle, but this is unfair. The laurel wand seems unable to tolerate laziness in a possessor, and it is in such conditions that it is most easily and willingly won away. Otherwise, it will cleave happily to its first match forever, and indeed has the unusual and engaging attribute of issuing a spontaneous lightning strike if another witch or wizard attempts to steal it.`)
    } else if (event.target.value === 'Maple') {
      setWoodDescription(`I have often found that those chosen by maple wands are by nature travellers and explorers; they are not stay-at-home wands, and prefer ambition in their witch or wizard, otherwise their magic grows heavy and lacklustre. Fresh challenges and regular changes of scene cause this wand to literally shine, burnishing itself as it grows, with its partner, in ability and status. This is a beautiful and desirable wood, and wand quality maple has been among the most costly for centuries. Possession of a maple wand has long been a mark of status, because of its reputation as the wand of high achievers.`)
    } else if (event.target.value === 'English Oak') {
      setWoodDescription(`A wand for good times and bad, this is a friend as loyal as the wizard who deserves it. Wands of English oak demand partners of strength, courage and fidelity. Less well-known is the propensity for owners of English oak wands to have powerful intuition, and, often, an affinity with the magic of the natural world, with the creatures and plants that are necessary to wizardkind for both magic and pleasure. The oak tree is called King of the Forest from the winter solstice up until the summer solstice, and its wood should only be collected during that time (holly becomes King as the days begin to shorten again, and so holly should only be gathered as the year wanes. This divide is believed to be the origin of the old superstition, “when his wand’s oak and hers is holly, then to marry would be folly,” a superstition that I have found baseless). It is said that Merlin’s wand was of English oak (though his grave has never been found, so this cannot be proven).`)
    } else if (event.target.value === 'Walnut') {
      setWoodDescription(`Highly intelligent witches and wizards ought to be offered a walnut wand for trial first, because in nine cases out of ten, the two will find in each other their ideal mate. Walnut wands are often found in the hands of magical innovators and inventors; this is a handsome wood possessed of unusual versatility and adaptability. A note of caution, however: while some woods are difficult to dominate, and may resist the performance of spells that are foreign to their natures, the walnut wand will, once subjugated, perform any task its owner desires, provided that the user is of sufficient brilliance. This makes for a truly lethal weapon in the hands of a witch or wizard of no conscience, for the wand and the wizard may feed from each other in a particularly unhealthy manner.`)
    } else {
      setWoodDescription(`The ash wand cleaves to its one true master and ought not to be passed on or gifted from the original owner, because it will lose power and skill. This tendency is extreme if the core is of unicorn. Old superstitions regarding wands rarely bear close examination, but I find that the old rhyme regarding rowan, chestnut, ash and hazel wands (rowan gossips, chestnut drones, ash is stubborn, hazel moans) contains a small nugget of truth. Those witches and wizards best suited to ash wands are not, in my experience, lightly swayed from their beliefs or purposes. However, the brash or over-confident witch or wizard, who often insists on trying wands of this prestigious wood, will be disappointed by its effects. The ideal owner may be stubborn, and will certainly be courageous, but never crass or arrogant.`)
    }
  };

  const handleCoreChange = (event) => {
    setWandCore(event.target.value);
    if (event.target.value === 'Unicorn Hair') {
      setCoreDescription(`Unicorn hair generally produces the most consistent magic, and is least subject to fluctuations and blockages. Wands with unicorn cores are generally the most difficult to turn to the Dark Arts. They are the most faithful of all wands, and usually remain strongly attached to their first owner, irrespective of whether he or she was an accomplished witch or wizard. Minor disadvantages of unicorn hair are that they do not make the most powerful wands (although the wand wood may compensate) and that they are prone to melancholy if seriously mishandled, meaning that the hair may 'die' and need replacing.`)
    } else if (event.target.value === 'Phoenix Feather') {
      setCoreDescription(`This is the rarest core type. Phoenix feathers are capable of the greatest range of magic, though they may take longer than either unicorn or dragon cores to reveal this. They show the most initiative, sometimes acting of their own accord, a quality that many witches and wizards dislike. Phoenix feather wands are always the pickiest when it comes to potential owners, for the creature from which they are taken is one of the most independent and detached in the world. These wands are the hardest to tame and to personalize, and their allegiance is usually hard won.`)
    } else {
      setCoreDescription(`As a rule, dragon heartstrings produce wands with the most power, and which are capable of the most flamboyant spells. Dragon wands tend to learn more quickly than other types. While they can change allegiance if won from their original master, they always bond strongly with the current owner. The dragon wand tends to be easiest to turn to the Dark Arts, though it will not incline that way of its own accord. It is also the most prone of the three cores to accidents, being somewhat temperamental.`)
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(wandLength, wandWood, wandCore);

    const wand = [wandLength + " inches, ", wandWood + " wood, ", wandCore + " core "]

    fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...user, wand })
    })
      .then(response => response.json())
      .then(data => {
        onUpdateWand(wand);
        alert(`You have a ${wand[0]} ${wand[1]}with a ${wand[2]}wand!`);
        // Redirect to profile page
        history.push(`/profile/${user.username}`);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  };

  return (
    <div>
      <h1>Build Your Wand</h1>
      <form onSubmit={handleSubmit}>
        <h2>Wand Length:</h2>
        <p>Most wands are between 9-15 inches long. Wandmakers often match the wand length to the height of witch or wizard who will use it, but Ollivander considers this measure inadequate. In his experience, longer than average wands tend to be drawn to those with a physical peculiarity or a bigger personality whereas abnormally short wands select people whose character lacks in something.</p>
        <select name="length" onChange={handleLengthChange} value={wandLength}>
          <option value='Ten'>Ten inches</option>
          <option value='Ten and a quarter'>Ten and a quarter inches</option>
          <option value='Ten and a half'>Ten and a half inches</option>
          <option value='Ten and three'>Ten and three quarter inches</option>
          <option value='Eleven'>Eleven inches</option>
          <option value='Eleven and a quarter'>Eleven and a quarter inches</option>
          <option value='Eleven and a half'>Eleven and a half inches</option>
          <option value='Eleven and three quarter'>Eleven and three quarter inches</option>
          <option value='Twelve'>Twelve inches</option>
          <option value='Twelve and a quarter'>Twelve and a quarter inches</option>
          <option value='Twelve and a half'>Twelve and a half inches</option>
          <option value='Twelve and three quarter'>Twelve and three quarter inches</option>
        </select>
        <h2>Wand Wood:</h2>
        <p>Very few trees produce wand-quality wood, although these trees can usually be identified if they have Bowtruckles. Current known wand woods are:</p>
        <h3>Wood Description: </h3>
        <p>{woodDescription}</p>
        <select name="wood" onChange={handleWoodChange} value={wandWood}>
          <option value="Ash">Ash</option>
          <option value="Elder">Elder</option>
          <option value="Hawthorn">Hawthorn</option>
          <option value="Laurel">Laurel</option>
          <option value="Maple">Maple</option>
          <option value="English Oak">English Oak</option>
          <option value="Walnut">Walnut</option>
        </select>
        <h2>Wand Core:</h2>
        <img src='https://progameguides.com/wp-content/uploads/2023/02/Hogwarts_Legacy_Wand_Core_Options.jpg?fit=1200%2C675' alt=""
          width="400" height="250" />
        <h3>Core Description: </h3>
        <p>{coreDescription}</p>
        <select name="core" onChange={handleCoreChange} value={wandCore}>
          <option value="Dragon Heartstring">Dragon Heartstring</option>
          <option value="Unicorn Hair">Unicorn Hair</option>
          <option value="Phoenix Feather">Phoenix Feather</option>
        </select>
        <button type="submit">Create Wand</button>
      </form>
    </div>
  );
}

export default BuildWand;
