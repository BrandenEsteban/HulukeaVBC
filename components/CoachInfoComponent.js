import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { COACHES } from '../shared/coaches';
import { baseUrl } from '../shared/baseUrl';

function RenderCoach({coach}) {
    if (coach) {
        return (
            <Card
                title={coach.name}
                image={{uri: baseUrl + coach.image}}
                >
                <Text style={{margin: 30}}>
                    {coach.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class CoachInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coaches: COACHES
        };
    }

    static navigationOptions = {
        title: 'Coach Information'
    }

    render() {
        const coachId = this.props.navigation.getParam('coachId');
        const coach = this.state.coaches.filter(coach => coach.id === coachId)[0];
        return <RenderCoach coach={coach} />;
    }
}

export default CoachInfo;