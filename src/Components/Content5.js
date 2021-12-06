import React,{useState,useEffect}from 'react'

const Content5 = () => {

    const [color,setColor]=useState('')



    useEffect(()=>{

        console.log('Component was mounted')

    } );



    useEffect(()=>{

        console.log('The color changed   similar to componentDidUpdate',color  )

    });

     const pressRedButton=()=>{

         setColor('RED')

     }



     const pressBlueButton=()=>{

        setColor('BLUE')

    }



    return (

        <div>

           <button onClick={pressBlueButton} >BLUE</button>

           <button onClick={pressRedButton} >RED</button>

        </div>

    )

}



export default Content5