import '../styles/dot.css'

function Dot({isExtremity, pin}) {
   const extremityDot = () => {
    if(isExtremity){
        return <div className="extremity_dot">
        </div>
        
        }else{
            return <div className="dot"></div>

        }
        
   }
    return (
        <div className="progress_bar">
            {extremityDot()}
     
        </div>
       
       
    )

 
    
}

export default Dot;