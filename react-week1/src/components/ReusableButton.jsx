import './ReusableButton.css';

function ReusableButton({ label, onClick, color }) {
  return (
    <button className={`reusable-button ${color}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default ReusableButton;
