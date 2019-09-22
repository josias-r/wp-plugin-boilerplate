const { registerBlockType } = wp.blocks;

registerBlockType("boilerplate-slug/example-block", {
  title: "Example Block",
  icon: "smiley",
  category: "common",
  attributes: {
    counter: {
      type: "number"
    }
  },

  edit: ({ attributes, setAttributes }) => {
    const counter = attributes.counter || 0;
    return (
      <button
        onClick={() => {
          setAttributes({ counter: counter + 1 });
        }}
        style={{
          padding: "1em",
          backgroundColor: "rgb(41, 41, 41)",
          border: "none",
          color: "white",
          borderRadius: 5
        }}
      >
        {counter
          ? "You clicked me so many times: " + counter
          : "You can click me!"}
      </button>
    );
  },
  save: ({ attributes }) => {
    return (
      <div>
        Someone clicked so many times:
        <span
          style={{
            color: "orange",
            padding: 5,
            marginLeft: 10,
            backgroundColor: "rgb(41, 41, 41)",
            borderRadius: 5
          }}
        >
          {attributes.counter || "0"}
        </span>{" "}
      </div>
    );
  }
});
