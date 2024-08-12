import React,{useState} from "react";

const Test = () => {
    const [color, setColor] = useState("red");
    return(
        <>
            <h2> My favorite color is {color}! </h2>
            <button type="button" onClick={()=>setColor("red")} className="m-4 bg-red-400 p-3 rounded-xl">Red</button>
            <button type="button" onClick={()=>setColor("blue")}>Blue</button>
        </>
    );
}

export default Test;