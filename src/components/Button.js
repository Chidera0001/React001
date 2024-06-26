const Button = ({ color, text }) => {
  const onClick = (e) => {
    console.log(e);
  };
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

// Button.defaultProps = {
//   color: "steelBlue",
// };

// Button.defaultProps = {
//   text: PropTypes.string,
//   color: PropTypes.string,
// };
export default Button;
