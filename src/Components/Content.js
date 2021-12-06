const Content = () => {

    const nameEvent=()=>{

    const names=['divanshu','mehta','divan'];

     const int =Math.floor(Math.random()*3);

     return names[int]

    }

    const handleClick=()=>{

        console.log('You have clicked it')

    }    
    const handleClick2=(name)=>{

        console.log(`${name} was clicked`)

    }

    const handleClick3=(e)=>{

        console.log(e.target.innerText)

    }

     

     

    return (

        <div>

            <h1>

                Welcome {nameEvent()}!

               

               

               

                <button onClick={handleClick()}>Click1</button>

                <button onClick={()=>handleClick2('Mani')}>Click2</button>

                <button onClick={(e) =>handleClick3(e)}>Click3</button>

            </h1>

        </div>

    )

}



export default Content;