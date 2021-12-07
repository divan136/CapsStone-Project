import React from 'react'
 export default function FetchTest() {

    const apiGet = () => {

        fetch("https://jsonplaceholder.typicode.com/posts")

          .then((response) => response.json())

          .then((json) => {

            console.log(json);

          });

      };
      return (

        <div>

            <button onClick={apiGet}>Fetch WebAPI</button>

        </div>

    )
}

