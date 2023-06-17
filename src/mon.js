import data from "./data"

function Lopp(){
    let oo = data.year
    
    let p = oo.map(ele=>{
        return(
            
            <div className='lov' >
            <div className='lpp'>
                <div className='lp' >
                    <p>Basic </p>
                    <section style={{display:"flex",flexDirection:"row",alignItems:"center", justifyContent:"center" }}  ><h5>$</h5><h1>{ele.amout}</h1></section>
                        <hr></hr>
                        <p>500 Gb Storage</p>
                        <hr></hr>
                        <p>2 User Allowed</p>
                        <hr></hr>
                        <p>Send up to 3gig</p>
                        <hr></hr>
                        <button  className='btn'>   LEARN MODE</button>
                </div>
            </div>
    
    
            <div className='lppp'>
                <div className='lp' >
                    <p>Professional </p>
                    <section style={{display:"flex",flexDirection:"row",alignItems:"center", justifyContent:"center" }}  ><h5>$</h5><h1>{ele.am}</h1></section>
                        <hr></hr>
                        <p>500 Gb Storage</p>
                        <hr></hr>
                        <p>2 User Allowed</p>
                        <hr></hr>
                        <p>Send up to 3gig</p>
                        <hr></hr>
                        <button  className='btnn'>   LEARN MODE</button>
                </div>
            </div>
    
    
            
            <div className='lpp'>
                <div className='lp' >
                    <p>Master </p>
                    <section style={{display:"flex",flexDirection:"row",alignItems:"center", justifyContent:"center" }}  ><h5>$</h5><h1>{ele.a}</h1></section>
                        <hr></hr>
                        <p>500 Gb Storage</p>
                        <hr></hr>
                        <p>2 User Allowed</p>
                        <hr></hr>
                        <p>Send up to 3gig</p>
                        <hr></hr>
                        <button  className='btn'>   LEARN MODE</button>
                </div>
            </div>
    
         </div>
    
        )
      })
      return(
        <div>
            {p}
        </div>
      )


}

export default Lopp