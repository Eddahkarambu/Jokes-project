import React,{useEffect, useState} from 'react'
import axios from 'axios';

const Joke=()=>{
    const [joke, setJoke]= useState("");
    const [categories, setCategories]= useState([]);


    
       const fetchcategoryList =()=>{
        axios.get('https://api.chucknorris.io/jokes/categories')
        .then((response) =>{
            const list=response.data
            console.log(list)
            setCategories(list)

        })
     }

     useEffect(() =>{
       fetchcategoryList ()
     }, [])
    

    const fetchJoke=()=>{
        axios.get('https://api.chucknorris.io/jokes/random')
        .then((response) =>{
            const {value}= response.data
            setJoke(value)
        })
    }


    return(
        <div className="app">
            <div className="card">
                <div>
                <h2 className="headi">categories</h2>
                    {categories.map((category, index)=>(
                        <li key={index}>{category}</li>

                    ))}
                </div>
                <h1 className="heading">{joke}</h1>
                <button className= "button" onClick={fetchJoke}>
                    <span> GIVE ME A JOKE</span>

                </button>

            </div>

        </div>
    );
}

export default Joke;