import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Announcement extends Component {
    
    static navigationOptions = {
        title: 'Current Announcements'
    }

    render() {
        return (
            <ScrollView>
                <Card
                    title="Announcements"
                    wrapperStyle={{margin: 30}}
                >
                    <Text>Due to the COVID-19 Pandemic, all activities will be cancelled until further notice! Thank you so much for your cooperation, hope to see you all again soon! Be safe and healthy, take care!</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Announcement;