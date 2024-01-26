import Button from "./Button";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        type="back"
        onClick={(e) => {
          e.preventDefault();
          navigate("/app");
        }}
      >
        &larr; Back
      </Button>
    </div>
  );
}

export default BackButton;
