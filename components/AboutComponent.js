import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { PARTNERS } from '../shared/partners';
import { ListItem } from 'react-native-elements';

function Mission() {
    return (
        <Card
            title="What Does Hulukea Mean?"
            image={require('./images/koaebird.jpg')}>
            <Text
                style={{margin: 30}}>
                Hulukea is a shortened version of the middle name of Club Director and Coach, Branden Lee Koa'ehulukea Esteban! 
                Koa'ehulukea is a long tailed Tropicbird that is indigenous to the Hawaiian Islands. This Volleyball Club
                will help your child to SOAR in the art of volleyball, excel in teamwork, and self confidence! The Hulukea Youth Volleyball Club is a Nonprofit Organization 
                that benefits your 10-14 year old!  LET'S FLY!
            </Text>
        </Card>
    )
}

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About Us'
    };

    render() {
        const renderPartner = ({item}) => {
            return (
                <ListItem
                    style={{margin: 10}}
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/IMG_7603.jpg')}}
                />
            );
        };
        
        return (
            <ScrollView>
                <Mission />
                <Card 
                    title="Partnership"
                >
                    <FlatList
                        data={this.state.partners}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderPartner}
                    />
                </Card>
            </ScrollView>
        );
    }
}
export default About;