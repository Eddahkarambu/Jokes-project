import React,{useState} from 'react'
import axios from 'axios';

const Joke=()=>{
    const [joke, setJoke]= useState("");

    const fetchJoke=()=>{
        axios.get('https://api.chucknorris.io/jokes/random')
        .then((response) =>{
            const {Joke}
        })
    }