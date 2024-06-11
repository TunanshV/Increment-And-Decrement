let countValue= document.querySelector('#counter');

let increment=()=>{
    // get the value from UI
    let value= parseInt(countValue.innerText);
    // Update the value
    value=value+1;
    // set the value onto UI
    countValue.innerText= value;
};

let decrement=()=>{
    // get the value from UI
    let value= parseInt(countValue.innerText);
    // Update the value
    value=value-1;
    // set the value onto UI
    countValue.innerText= value;
};