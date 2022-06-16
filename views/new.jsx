const React = require("react");
const Default = require("./layouts/Default");

const New = () => {
  return (
    <Default>
      <h2>Add a new bread</h2>
      <form action="/breads" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"
        required />
        <label htmlFor="image">image</label>
        <input type="text" name="image" id="image" />
        <label htmlFor="hasGluten">Has Gluten?</label>
        <input type="checkbox" name="hasGluten" id="hasGluten" defaultChecked />
        <br />
        <input type="submit" />
        {/*Code below takes you back but also still post the request */}
        <div className="backButton">
          <a href="/breads">
            <button>Go back to the index</button>
          </a>
        </div>
      </form>
    </Default>
  );
};

module.exports = New;

module.exports = New;
