import ClipLoader from "react-spinners/ClipLoader";
import "./LoadingOverlay.css";

const LoadingOverlay = ({ isLoading }) => {
  return (
    <div className={`loading-overlay ${isLoading ? "show" : "hide"}`}>
      <ClipLoader />
    </div>
  );
};

export default LoadingOverlay;
