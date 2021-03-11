import React, { Component } from 'react'
import Carousel from './Header/Carousel';
import Content_1 from './Content/Content_1';
import Content_2 from './Content/Content_2';
import Content_3 from './Content/Content_3';
import Content_4 from './Member/Content_4';
import Foodter from './Footer/Foodter';
import FromContact from './Contact/FromContact';
export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel></Carousel>
                <Content_1></Content_1>
                <Content_2></Content_2>
                <Content_3></Content_3>
                <FromContact></FromContact>
                <Foodter></Foodter>
                <Content_4></Content_4>
            </div>
        )
    }
}
