import Button from "./Button";

const ButtonNumber = ({ name, result, setResult, btnType }) => {
  const onClickBtn = () => {



    if(result === "0" && name === "00"){
        setResult("0");
        name = "0";
    }
    
    

    if (result === "0") {
      setResult(name);
    } else {
      setResult(result + name);
    }
  };

  return <Button name={name} onClickBtn={onClickBtn} btnType={btnType} />;
};

export default ButtonNumber;