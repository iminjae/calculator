const Button = ({ name, onClickBtn, btnType }) => {
    if(btnType === "1"){
        return (
     
        
            <button className="bg-neutral-500 w-20 h-20 flex justify-center items-center text-zinc-50 border border-black text-3xl font-thin active:bg-neutral-400" onClick={onClickBtn}>
                {name}
            </button>
        );
    }
    if(btnType === "2"){
        return (
     
        
            <button className="bg-neutral-600 w-20 h-20 flex justify-center items-center text-zinc-50 border border-black text-3xl font-thin active:bg-neutral-500" onClick={onClickBtn}>
                {name}
            </button>
        );
    }
    if(btnType === "3"){
        return (
     
        
            <button className="bg-amber-500 w-20 h-20 flex justify-center items-center text-zinc-50 border border-black text-3xl font-thin active:bg-amber-400" onClick={onClickBtn}>
                {name}
            </button>
        );
    }
    
};
  
  export default Button;