const React = require("react");
const Default = require("./layouts/Default");

const Edit = () => {
  return (
    <Default>
      <h2> Edit Bread </h2>
      <form>
        <label htmlFor="name"></label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="image"></label>
        <input type="text" name="image" id="image" />
        <label htmlFor="hasGluten">Has Gluten?</label>
        <input type="checkbox" name="hasGluten" id="hasGluten" defaultChecked />
        <br />
        <input type="submit" />
      </form>
    </Default>
  );
};

module.exports = Edit
