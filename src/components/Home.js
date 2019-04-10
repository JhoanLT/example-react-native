import React, { Component } from 'react';
import { 
  Container, 
  Header, 
  Tab, 
  Tabs, 
  ScrollableTab, 
  Text,
  View,
  TabHeading
} from 'native-base';
import {StyleSheet, Image, PanResponder} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { WebView } from 'react-native-webview'

const styles = StyleSheet.create({
    tabsJ : {
      padding : 68,
    },
});

export default class Home extends Component {

  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs renderTabBar={()=> <ScrollableTab 
        style={{ backgroundColor: "white", height : 150}} 
        onScroll={(param)=> console.log(param.nativeEvent)}
        />}>                  
          <Tab heading={ 
              <TabHeading style={{ backgroundColor: "white", margin: 12 }}>
                  <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width : 340
                  }}
                  
                  >
                    <Image source={require("../assets/img/cocina.png")} style={{width : 50, height:80}}/>
                    <Text>Limpieza/ Servicio doméstico</Text>
                  </View>
              </TabHeading>}
              >
          </Tab>
          <Tab heading={ 
              <TabHeading style={{ backgroundColor: "white", margin: 12 }}>
                  <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width : 340
                  }}>
                    <Image source={require("../assets/img/cocina.png")} style={{width : 50, height:80}}/>
                    <Text>Servicio 2</Text>
                  </View>
              </TabHeading>}>
          </Tab>
          <Tab heading={ 
              <TabHeading style={{ backgroundColor: "white", margin: 12 }}>
                  <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width : 340
                  }}>
                    <Image source={require("../assets/img/cocina.png")} style={{width : 50, height:80}}/>
                    <Text>Servicio 3</Text>
                  </View>
              </TabHeading>}>
          </Tab>
          <Tab heading={ 
              <TabHeading style={{ backgroundColor: "white", margin: 12 }}>
                  <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width : 340
                  }}>
                    <Image source={require("../assets/img/cocina.png")} style={{width : 50, height:80}}/>
                    <Text>Servicio 4</Text>
                  </View>
              </TabHeading>}>
          </Tab>
          <Tab heading={ 
              <TabHeading style={{ backgroundColor: "white", margin: 12 }}>
                  <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width : 340
                  }}>
                    <Image source={require("../assets/img/cocina.png")} style={{width : 50, height:80}}/>
                    <Text>Servicio 5</Text>
                  </View>
              </TabHeading>}>
          </Tab>
          <Tab heading={ 
              <TabHeading style={{ backgroundColor: "white", margin: 12 }}>
                  <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width : 340
                  }}>
                    <Image source={require("../assets/img/cocina.png")} style={{width : 50, height:80}}/>
                    <Text>Servicio 6</Text>
                  </View>
              </TabHeading>}>
          </Tab>
          <Tab heading={ 
              <TabHeading style={{ backgroundColor: "white", margin: 12 }}>
                  <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width : 340
                  }}>
                    <Image source={require("../assets/img/cocina.png")} style={{width : 50, height:80}}/>
                    <Text>Servicio 7</Text>
                  </View>
              </TabHeading>}>
          </Tab>
        </Tabs> 
      </Container>
    );
  }
}