import React, { createContext, useState } from 'react';
import ImageColors from 'react-native-image-colors';

interface ImageColors {
    primary: string;
    secondary: string;
}

interface ContextProps {
    colors: ImageColors;
    preColors: ImageColors;
    setMainColors: (colors: ImageColors) => void; 
    setPreMainColors: (colors: ImageColors) => void; 
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({ children }: any) => {

    const [colors, setColors] = useState<ImageColor>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const [preColors, setPreColors] = useState<ImageColor>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const setMainColors = ( colors: ImageColors ) => {
        setColors( colors );
    }

    const setPreMainColors = ( colors: ImageColors ) => {
        setPreColors( colors ); 
    }

    return (
        <GradientContext.Provider value={{
            colors,
            preColors,
            setMainColors,
            setPreMainColors
        }}>
            { children }
        </GradientContext.Provider>
    )
}