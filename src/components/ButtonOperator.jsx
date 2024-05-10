import Button from "./Button";

const ButtonOperator = ({ name, result, setTemp, setResult, setOperator, btnType }) => {
    

    const onClickBtn = () => {


        console.log(name);

        if(name === "+/-" || name === "%" || name === "."){
            alert("미완성");
            setResult("0");
        }else{
            setTemp(result);
            setResult("0");
            setOperator(name);
        }

        
    };

  return <Button name={name} onClickBtn={onClickBtn} btnType={btnType} />;
};

export default ButtonOperator;

