import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import { 
  Container, 
  Header, 
  View, 
  DeckSwiper, 
  Card, 
  CardItem, 
  Text, 
  Left,
  List,
  ListItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const cards = [
  {
    id  : 1,
    name: 'Lavado y planchado',
    image: require('../assets/img/lavado_planchado.png'),
  },
  {
    id : 2,
    name: 'Cuidado de niños',
    image: require('../assets/img/cuidado_ninos.png'),
  },
  {
    id : 3,
    name: 'Limpieza doméstica',
    image: require('../assets/img/limpieza_domestica.png'),
  },
  {
    id : 4,
    name: 'Cocina',
    image: require('../assets/img/cocina.png'),
  },
];

const services = [
  {
    idService : 1,
    name: 'Subcategoría 1',
    image: require('../assets/img/lavado_planchado.png'),
  },
  {
    idService : 1,
    name: 'Subcategoría 2',
    image: require('../assets/img/lavado_planchado.png'),
  },
  {
    idService : 1,
    name: 'Subcategoría 3',
    image: require('../assets/img/lavado_planchado.png'),
  },
  {
    idService : 2,
    name: 'Subcategoría 1',
    image: require('../assets/img/cuidado_ninos.png'),
  },
  {
    idService : 2,
    name: 'Subcategoría 2',
    image: require('../assets/img/cuidado_ninos.png'),
  },
  {
    idService : 3,
    name: 'Subcategoría 1',
    image: require('../assets/img/limpieza_domestica.png'),
  },
  {
    idService : 4,
    name: 'Subcategoría 1',
    image: require('../assets/img/cocina.png'),
  },
  {
    idService : 4,
    name: 'Subcategoría 2',
    image: require('../assets/img/cocina.png'),
  },
  {
    idService : 4,
    name: 'Subcategoría 3',
    image: require('../assets/img/cocina.png'),
  },
];

export default class DeckSwiperExample extends Component {

  constructor(props){
    super(props);
    this.state = {
      services : [],
      cards    : []
    }
  }

  componentDidMount(){
    this.getFirstService();
  }

  getFirstService(){
    let element = cards[0];
    this.setState({
      services : services.filter((service) => service.idService === element.id)
    });      
  }

  stepCategoryService(param){
    if(param){
      const indexElement = cards.findIndex(card => card.id === param.id);
      let element        = cards[indexElement+1];
      if(element === undefined){
        element = cards[0];
      }
      this.setState({
        services : services.filter((service) => service.idService === element.id)
      });
    }
  };

  render() {
    const {services} = this.state;
    return (
      <Container style={{alignItems : 'center'}}>
        <View style={{flexDirection : 'row', flex : 1, marginTop : 12}}>
          <Icon 
            name  = "chevron-left"
            size  = {20}
            style = {{
              marginTop   : 75, 
              marginRight : 24,
            }} 
            onPress={() => {
              this._deckSwiper._root.swipeLeft();
              setTimeout(() => {
                this._deckSwiper._root.props.onSwipeLeft(this._deckSwiper._root.state.selectedItem);
              }, 200)
            }}
            >
          </Icon>
          <View style={{width : 220}}>
            <DeckSwiper
              ref          = {(c) => this._deckSwiper = c}
              onSwipeRight = {(param) => this.stepCategoryService(param)}
              onSwipeLeft  = {(param) => this.stepCategoryService(param)}
              dataSource   = {cards}
              renderItem   = {item =>
                <Card>
                  <CardItem style={{alignContent : 'center', justifyContent : 'center', height:100}}>
                    <Image source={item.image} style={{width : "42%", height : "100%"}}/>
                  </CardItem>
                  <CardItem style={{alignContent : 'center', justifyContent : 'center'}}>
                    <View style={{alignContent : 'center', justifyContent : 'center', marginTop : 8}}>
                      <Text style={{color : '#64b5f6'}}>{item.name}</Text>
                    </View>
                  </CardItem>
                </Card>
              }
            />
          </View>
          <Icon 
            name    = 'chevron-right'
            size    ={20} 
            style   = {{
              marginTop  : 75, 
              marginLeft : 24,
            }} 
            onPress = {() => {
              this._deckSwiper._root.swipeRight(); 
              setTimeout(() => {
                this._deckSwiper._root.props.onSwipeRight(this._deckSwiper._root.state.selectedItem);
              },200)
            }}
          >
          </Icon>
        </View>
        <View style={{flex : 2, marginBottom : 5, width : '100%', paddingLeft : 72}}>
            <List>
              <ScrollView>
              {services.map((service, key) => (
                <ListItem avatar key={key}>
                  <Left>
                    <View style={{
                      alignContent : 'center',
                      justifyContent : 'center',
                      alignItems : 'center',
                      padding : 15, 
                      borderRadius : 50,
                      shadowColor: "#000",
                      shadowOpacity: 0.20,
                      shadowRadius: 1,
                      elevation: 2,
                      width : 80,
                      height : 80
                      }}
                    >
                      <Image 
                        source={service.image} 
                        style={{width : 48, height : 48}}
                      />
                    </View>
                  </Left>
                  <View style={{marginLeft : 8}}>
                    <Text style={{color : '#64b5f6'}}>{service.name}</Text>
                  </View>
                </ListItem>
              ))}
              </ScrollView>
            </List>
          </View>
      </Container>
    );
  }
}