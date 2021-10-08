import React from 'react'
import styled from 'styled-components'
const Footer = () => {
    return (
        <Cont>
           <p>
         <Weak>  Tesla clone developed by.. <a href="http://dhruvrathod.tech/">Dhruv Rathod</a></Weak> </p>
         </Cont>
    )
}

export default Footer


const Strong=styled.div`
 color:blue;
 display:flex;
 
 justify-content: center;
  

`
const Cont = styled.div`
justify-content: center;
`

const Weak = styled.div`
text-align:center;
a{
    color:blue;
}

`
