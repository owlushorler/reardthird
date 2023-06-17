
import './cc.css'
import lov from './image/bg-top.svg'
import lovv from './image/bg-bottom.svg'
import './ac.css'
import data from './data'
import { useState } from 'react'
import Lop from './ann'
import Lopp from './mon'


function Appp() {

 const [pop, setpop]= useState(true)


 

    return (

        
      <> 
      <div className='he'  >
      
        <img className='heee' src={lovv} alt=''/>
        <img className='qq'  src={lov} alt=''/>
        <div className='hee' >

            <h3>Our Pricing</h3>

             <div className='kop' >
                <p>Annually</p>
             <label class="switch">
             <input type="checkbox"
             onChange={()=>{setpop(ele=>ele?false:true)}}
             />
             <span class="slider round"></span>
             </label>
             <p>Monthly</p>
             </div>
           {pop && <Lop/> }
           {!pop && <Lopp/> }

        </div>   
        
      </div>
       
    

     

                
      </>
    );
  }
  
  
  export default Appp