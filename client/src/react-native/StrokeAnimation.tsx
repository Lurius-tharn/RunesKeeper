import React, {FC} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Animated, {
    useAnimatedProps,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';
import {G, Path, Rect} from "react-native-svg/src";
import * as Colors from "../styles/colors";
type CircularProgressProps = {
    strokeWidth: number;
    radius: number;
    backgroundColor: string;
    percentageComplete: number;
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

 const Rune: FC<CircularProgressProps> = ({
                                                                radius,
                                                                strokeWidth,
                                                                backgroundColor,
                                                                percentageComplete,
                                                            }) => {
    const innerRadius = radius - strokeWidth / 2;
    const circumfrence = 2 * Math.PI * innerRadius;
    const invertedCompletion = (100 - percentageComplete) / 100;

    const theta = useSharedValue(2 * Math.PI * 1.001);
    const animateTo = useDerivedValue(() => 2 * Math.PI * invertedCompletion);
    const textOpacity = useSharedValue(0);

    const FADE_DELAY = 1500;

    const animatedProps = useAnimatedProps(() => {
        return {
            strokeDashoffset: withTiming(theta.value * innerRadius, {
                duration: FADE_DELAY,
            }),

        };
    });

    const powerTextStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(textOpacity.value, {
                duration: FADE_DELAY,
            }),
        };
    });

    const powerPercentTextStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(textOpacity.value, {
                duration: FADE_DELAY,
            }),
        };
    });

    return (
        <View style={styles.container}>
            <Svg height="90%" viewBox="0 0 48 58" width="75%" style={StyleSheet.absoluteFill}>
                <G id="Page-1" fill="none" fill-rule="evenodd">
                    <G id="025---Magic-Runes" fill-rule="nonzero">
                        <Path id="Shape" d="m40 58h4c2.209139 0 4-1.790861 4-4v-30c0-2.209139-1.790861-4-4-4h-4z" fill="#3f5c6c"/>
                        <Path id="Shape" d="m44 24v30c0 2.209139-1.790861 4-4 4h-18c-2.209139 0-4-1.790861-4-4v-16l12-18h10c2.209139 0 4 1.790861 4 4z" fill="#547580"/>
                        <Path id="Shape" d="m26 53c-.5522847 0-1-.4477153-1-1v-16c0-.5522847.4477153-1 1-1s1 .4477153 1 1v16c0 .5522847-.4477153 1-1 1z" fill="#65D4B0"/>
                        <Path id="Shape" d="m30 25 6.555 3.28c.2727059.1363661.4449653.4150997.4449653.72s-.1722594.5836339-.4449653.72l-6.555 3.28z" fill="#65D4B0"/>
                        <Path id="Shape" d="m38 55v3h-2v-3c0-.5522847.4477153-1 1-1s1 .4477153 1 1z" fill="#3f5c6c"/>
                        <Path id="Shape" d="m22 38h4c2.209139 0 4-1.790861 4-4v-30c0-2.209139-1.790861-4-4-4h-4z" fill="#7f8384"/>
                        <Rect id="Rectangle-path" fill="#8c9c9c" height="38" rx="4" width="26"/>
                        <Path id="Shape"
                              d="m15.293 16.293-6.293 6.293v-5.172l7.707-7.707c.3789722-.39237889.3735524-1.01608478
                              -.0121814-1.40181858-.3857338-.38573379-1.0094397-.39115363-1.4018186-.01218142l-6.293 6.293v-6.586c0-.55228475-.44771525-1-1-1s-1 .44771525-1 1v24c0 .5522847.44771525
                              1 1 1s1-.4477153 1-1v-6.586l7.707-7.707c.3789722-.3923789.3735524-1.0160848-.0121814-1.4018186s-1.0094397-.3911536-1.4018186-.0121814z"
                              fill={Colors.PrimaryColor}/>
                        <G fill="#7f8384">
                            <Path id="Shape" d="m7 0v2c0 .55228475-.44771525 1-1 1s-1-.44771525-1-1v-2z"/>
                            <Path id="Shape" d="m16 36v2h-2v-2c0-.5522847.4477153-1 1-1s1 .4477153 1 1z"/>
                        </G>
                    </G>
                </G>

            </Svg>
            <Animated.Text style={[styles.powerText, powerTextStyle]}>
                Power %
            </Animated.Text>
            <Animated.Text style={[styles.powerPercentage, powerPercentTextStyle]}>
                {percentageComplete}
            </Animated.Text>
            <Button
                title="Animate!"
                onPress={() => {
                    if (!textOpacity.value) {
                        theta.value = animateTo.value;
                        textOpacity.value = 1;
                    } else {
                        theta.value = 2 * Math.PI * 1.001;
                        textOpacity.value = 0;
                    }
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    powerText: {
        fontSize: 30,
        fontWeight: '300',
    },
    powerPercentage: {
        fontSize: 60,
        fontWeight: '200',
    },
});

export default Rune;