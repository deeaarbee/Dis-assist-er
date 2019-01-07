import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ScrollView, FlatList} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Right, Button } from 'native-base';
import OwnFeedCard from "../components/OwnFeedCard";
import { human } from 'react-native-typography'


class UserFeed extends Component {

    constructor(props) {
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
        this.state = {
            refreshing: false,
            feedList:[
                {title: "Hello1", location: "CEG", description: "sunny came to the gallery",
                    date: "12/12/12", status: "Verified", category: "Gilma", solved: true},
                {title: "Hello2", location: "CEG", description: "sunny came to the gallery",
                    date: "12/12/12", status: "Verified", category: "Gilma", solved: false},
                {title: "Hello3", location: "CEG", description: "sunny came to the gallery",
                    date: "12/12/12", status: "Verified", category: "Gilma", solved: true},
            ]
        };
    }

    changeStatus(value, title){
        let newArray = this.state.feedList.map(issue => (
            issue.title === title ? {...issue, solved: value } : issue
        ));
        this.setState({feedList: newArray});
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: "#EEF2F5"}}

                // refreshControl={
                //     <RefreshControl
                //         refreshing={this.state.refreshing}
                //         onRefresh={this._onRefresh}
                //     />
                // }
            >
                <Content padder>
                    <Text style={[{alignSelf: 'center'}, human.title3]}>
                        Your Issues
                    </Text>
                    <FlatList data={this.state.feedList}
                              renderItem={({item, index}) => (
                                  <OwnFeedCard title={item.title} description={item.description}
                                            category={item.category} location={item.location}
                                            status={item.status} date={item.date} solved={item.solved}
                                               changeStatus={this.changeStatus}
                                            key={index}
                                  />
                              )}
                    />
                </Content>
            </ScrollView>

        );
    }
}

export default UserFeed;


