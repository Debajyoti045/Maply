import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function BackButton() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  return (
    <div>
      <Button
        type="back"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        &larr; {t("backbutton.back")}
      </Button>
    </div>
  );
}

export default BackButton;
