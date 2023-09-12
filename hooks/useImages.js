import React, { useEffect, useState } from 'react';
import { getImages } from '../services/Images';
import useRandomWord from './useRandomWord';

const useImages = () => {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)
    const {word, getAnotherWord} = useRandomWord()

    const fetchImages = async () => {
        setLoading(true)
        const imagesURLS = await getImages(word)
        if(imagesURLS === null) {
            getAnotherWord()
            return null
        }
        setImages(imagesURLS)
        return imagesURLS
    }

    useEffect(() => {
        console.log('Palabra aleatoria con la que se generara las imagenes:',word);
        setLoading(true)
        fetchImages().then(() => setLoading(false))
    }, [word])

    return { images, loading, getAnotherWord, word }
};

export default useImages;