import React from 'react'

function BtnF(props) {

    function DoThis(event){
        // alert("Button functional component Click Success");
        alert(event)
    }
    return (
        <div>
            <h1>I am form functional components</h1>
           <button onClick={DoThis.bind(this,"I am functional components")}>Click Me</button> 
        </div>
    )
}

export default BtnF
