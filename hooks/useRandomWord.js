import React, { useContext, useEffect, useState } from 'react';
import {words} from '../consts/Words'
import { RandomWordContext } from '../context/randomWordContext';


const useRandomWord = () => {
    const context = useContext(RandomWordContext)
    
    if(!context) throw new Error('useRandomWord must be used within a RandomWordContextProvider')

    const { word, setWord } = context;

    const getAnotherWord = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        setWord(words[randomIndex])
    }

    const compareWords = (wordToCompare) =>{
        console.log("Comparando palabras");
        const wordWithoutAccents = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        const wordToCompareWithoutAccents = wordToCompare.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        return wordWithoutAccents.toLowerCase() === wordToCompareWithoutAccents.toLowerCase()
    }

    useEffect(() => {
        getAnotherWord()
    }, [])

    return { word, getAnotherWord, compareWords }

};

export default useRandomWord;