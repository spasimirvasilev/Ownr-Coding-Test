import "./SelectableButton.css";

const SelectableButton = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`selectable-button ${active && "active"}`}
    >
      {children}
    </button>
  );
};

export default SelectableButton;
