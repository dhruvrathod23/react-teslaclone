import React,{ useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
 function Header() {
const [burgerStatus,setBurgerStatus] = useState(false);

     return(
<Container>
<a>

<img src = "/images/logo.svg" alt=""/>
</a>
<Menu>

 <a href = "#">Model S</a>
 <a href = "#">Model 3</a>
 <a href = "#">Model X</a>
 <a href = "#">Model Y</a>
 <a href = "#">Solar Roof</a>
 <a href = "#">Solar panel</a>
</Menu>

<RightMenu>
    <a href="#">SHOP</a>
    <a href="#">ACCOUNT</a>
    <a href="#">MENU</a>
    <CustomMenu onClick ={()=>setBurgerStatus(true)}/>    

</RightMenu>
<BurgerNav show = {burgerStatus}>
    <CloseWrap>
    <CustomClose onClick ={()=>setBurgerStatus(false)}/>
    </CloseWrap>
    <li> <a href="#">Exisiting Inventory</a></li>
    <li> <a href="#">Used Inventory</a></li>
    <li> <a href="#">Trade-in</a></li>
    <li> <a href="#">Cybertruck</a></li>
    <li> <a href="#">Roadster</a></li>
    <li> <a href="#">Charging</a></li>
    <li> <a href="#">Test Drive</a></li>
    <li> <a href="#">Powerwall</a></li>
    <li> <a href="#">Commercial Energy</a></li>
    <li> <a href="#">Utilities</a></li>
    <li> <a href="#">Shop</a></li>
    <li> <a href="#">More</a></li>
    <li> <a href="#">Account</a></li>

    </BurgerNav>

</Container>
     )
 }


 export default Header;



 const Container = styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:space-between;
  paddding: 0 20px;
  top:0;
  right:0;
  left:0;
  z-index:1;
  margin-left:2%;
  margin-right:2%;
  
 `

 const Menu = styled.div`
 display:flex;
 align-tems:center;
 justify-content:center;
 flex:1;

  a {
      font-weight:600;
      text-decoration:uppercase;
      padding:0 10px;
      flex-wrap:nowrap;
  }
  @media (max-width:800px){
   display:none;
 } 

 `

 const RightMenu = styled.div`
   display:flex;


  a {
      font-weight:600;
      text-decoration:uppercase;
      padding:0 10px;
      margin-right:10px
      flex-wrap:nowrap;
     
  }

 `

 const CustomMenu = styled(MenuIcon)`
 cursor : pointer;


 `
 const BurgerNav=styled.div`
   position:fixed;
   top:0;
   bottom:0;
   right:0;
   background:white;
   width:300px;
   z-index:100;
   list-style:none;
   padding:20px;
   text-align:start;
   transform:${props => props.show ? 'translatex(0)': 'translatex(100%)'};
 transition: transform 0.2s ease-in;
   li{
       padding:15px 0;
       border-bottom :1px solid rgba(0,0,0,.2)

       a{
           font=weight:600;
       }
   }


 `

 const CustomClose = styled(CloseIcon)`
cursor:pointer;
 `

 const CloseWrap = styled.div`
  display:flex;
  justify-content:flex-end;
 `