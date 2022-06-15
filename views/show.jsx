const React = require("react");
const Default = require("./layouts/default");

const Show = ({ bread }) => {
  // console.log(bread.name);
  return (
    <Default>
      <h3>{bread.name}</h3>
      <p> and it
        {
            bread.hasGluten
            ?<span> does </span>
            :<span> does NOT </span>
        }
have gluten.
      </p>
      <img src={bread.image} alt={bread.name} />
      <li><a href="/breads">DONKEY! Get out of my swamp!</a></li>
    </Default>
  );
};

module.exports = Show;
