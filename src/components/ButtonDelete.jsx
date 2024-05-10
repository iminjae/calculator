import Button from "./Button";

const ButtonDelete = ({ name, result, setResult, btnType }) => {
  const onClickBtn = () => {
   
    // setResult(result.substring(0, result.length - 1));

    setResult("0");


  };

  return <Button name={name} onClickBtn={onClickBtn} btnType={btnType}/>;
};

export default ButtonDelete;