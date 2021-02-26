import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component {
    
    static navigationOptions = {
        title: 'Contact Us'
    }

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['hulukeavbc@gmail.com'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        })
    }

    render() {
        return (
            <ScrollView>
                <Card 
                    title="Contact Information"
                    wrapperStyle={{margin: 30}}
                >
                    <Text>91-1205 Renton Rd</Text>
                    <Text>Ewa Beach, HI 96706</Text>
                    <Text style={{marginBottom: 10}}>U.S.A.</Text>
                    <Text>Phone: 1-808-123-4567</Text>
                    <Text>Email: hulukeavbc@gmail.co</Text>
                    <Button
                        title="Send Email"
                        buttonStyle={{backgroundColor: 'blue', margin: 40}}
                        icon={<Icon
                            name='envelope-o'
                            type='font-awesome'
                            color='#fff'
                            iconStyle={{marginRight: 10}}
                        />}
                        onPress={() => this.sendMail()}
                    />
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;