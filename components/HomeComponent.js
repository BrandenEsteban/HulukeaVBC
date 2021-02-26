import React, { Component } from 'react';
import { Text, ScrollView, Image , ImageBackground} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <ImageBackground
                        source={require('./images/IMG_5021.jpg')}
                        style={{
                        height: 700,
                        width: 395,
                        position: "relative",
                        }}
                    >
                        <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 30,
                            color: "gold",
                            textAlign: "center",
                            position: "absolute",
                            top: 40,
                            left: 50,
                            right: 50,
                        }}
                        >Welcome to the            Hulukea Youth Volleyball Club app!</Text>
                        <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 10,
                            color: "white",
                            textAlign: "center",
                            position: "absolute",
                            top: 600,
                            left: 20,
                            right: 20,
                        }}
                        >Copyright © 2021 Hulukea Youth Volleyball Club - All Rights Reserved.</Text>
                    </ImageBackground>
            </ScrollView>
        );
    }
}

export default Home;