import React from 'react';
import Footer from './comp/Footer'
import Item from './comp/Item'
import styled from 'styled-components'
import Header from './comp/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
      <Item 
       title= "Model S"
       desc = "Order Online for Touchless Delivery"
       backgroundImg = 'model-S.jpg'
       leftBtnText = "Custom order"
       rightBtntxt = "Exisiting Inventory"
      />
       <Item 
       title= "Model X"
       desc = "Order Online for Touchless Delivery"
       backgroundImg = 'model-x.jpg'
       leftBtnText = "Custom order"
       rightBtntxt = "Exisiting Inventory"
      />

      <Item
        title= "Model3"
        desc = "Order Online for Touchless Delivery "
        backgroundImg = 'model-3.jpg'
        leftBtnText = "Custom order"
        rightBtntxt = "Exisiting Inventory"
      
      />
      

      <Item
        title= "Model Y"
        desc = "Order Online for Touchless Delivery"
        backgroundImg = 'model-y.jpg'
        leftBtnText = "Custom order"
        rightBtntxt = "Exisiting Inventory"
      
      />
  <Item 
       title= "Solar Roof"
       desc = "Produce Clean Energy From Your Roof"
       backgroundImg = 'solar-roof.jpg'
       leftBtnText = "Custom order"
       rightBtntxt = "Exisiting Inventory"
      />

      <Item
        title= "Solar Panel"
        desc = "Lowest Cost Solar Panels in America"
        backgroundImg = 'solar-panel.jpg'
        leftBtnText = "Custom order"
        rightBtntxt = "Exisiting Inventory"
      
      />

      
<Item
        title= "Accessories"
        desc = ""
        backgroundImg = 'accessories.jpg'
        leftBtnText = "Custom order"
        rightBtntxt = "Exisiting Inventory"
      
      />
       <Footer/>
      </Container>


    

     
    </div>
  );
}

export default App;


const Container = styled.div`
  height:100vh
`
