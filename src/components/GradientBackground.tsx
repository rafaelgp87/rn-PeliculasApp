import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface IProps {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({ children }: IProps) => {

    const { colors, preColors, setPreMainColors } = useContext(GradientContext);
    const { opacity, fadeIn, fadeOut } = useFade();

    useEffect(() => {
        fadeIn(() => {
            setPreMainColors( colors );
            fadeOut(0);
        });
    }, [ colors ]);

    return (
        <View
            style={{
                flex: 1
            }}
        >
            <LinearGradient
                colors={[preColors.primary, preColors.secondary, 'white']}
                style={{
                    ...StyleSheet.absoluteFillObject
                }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.7 }}
            />

            <Animated.View
                style={{
                    ...StyleSheet.absoluteFillObject, 
                    opacity 
                }}
            >

                <LinearGradient
                    colors={[colors.primary, colors.secondary, 'white']}
                    style={{
                        ...StyleSheet.absoluteFillObject
                    }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.7 }}
                />

            </Animated.View>

            {children}
        </View>
    )
}
