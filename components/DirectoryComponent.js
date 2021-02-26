import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { COACHES } from '../shared/coaches';
import { baseUrl } from '../shared/baseUrl';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coaches: COACHES
        };
    }

    static navigationOptions = {
        title: 'Our Coaches'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    style={{margin: 60}}
                    title={item.name}
                    subtitle={item.info}
                    onPress={() => navigate('CoachInfo', { coachId: item.id })}
                    image={{uri: baseUrl + item.logo}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.coaches}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;