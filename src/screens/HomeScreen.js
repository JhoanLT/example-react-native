import React, {Component} from 'react';
import Home from '../components/Home';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { setName } from '../store/actions';
import DeckSwiperExample from '../components/DeckSwiperExample';

class HomeScreen extends Component{
    render(){
        return(
            <DeckSwiperExample/>
        )
    }
}

const mapStateToProps = ({globalExample:{name}}) => ({
    name
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setName
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);