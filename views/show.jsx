const React = require("react");
const Default = require("./layouts/default");

const Show = ({ bread }) => {
  // console.log(bread.name);
  return (
    <Default>
      <h2>Show Page</h2>
      <h3>{bread.name}</h3>
      <img src={bread.image} alt={bread.name} />
    </Default>
  );
};

module.exports = Show;
