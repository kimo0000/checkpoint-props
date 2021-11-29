import React from "react";
import Img from './Img'
import PropTypes from 'prop-types'
import HandleName from "./HandleName";


function Profil(props){
    return(
         <div className='card'>
             <div className='card-header'>
                 <Img img='/images/03.jpg'/>
             </div>
             <div className='card-body'>
                 <h1>{props.FullName}</h1>
                 <h3>{props.Bio}</h3>
                 <h5>{props.Profesion}</h5>
             </div>
             <form style={{textAlign:'center'}}>
                 <HandleName />
             </form>

         </div>
    )
}


Profil.defaultProps = { FullName:'kimo',
                        Bio:'im a designer',
                        Profesion:'designer'
                      }

Profil.propTypes = {FullName: PropTypes.string,
                    Bio: PropTypes.string,
                    Profesion: PropTypes.string}                    

export default Profil