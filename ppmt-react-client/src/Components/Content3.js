import React, { useState } from 'react'





const Content3 = () => {

    const [num,setNumValue]=useState(5)



    function setNum(){

        setNumValue(num+1)

    }

        return (

        <div>

           

         <button onClick={setNum}>Functional Button Click</button> {num}

        </div>

    )

}



export default Content3;