import React from 'react'

function Img(props){
    return(
          <img src={props.img} alt='logo' style={{maxWidth: '100%'}} />
    )
}

export default Img