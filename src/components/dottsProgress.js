import styled from '@emotion/styled'
import '../styles/progress.css'
import pin from './pin.png'

function Dotts () {
    const portDetails = [
        {isExtremity: true,
        portOfLoading: "Tunisia",
        portOfDischarge: "Denmark",
        departureTime: "July 07, 2020 12:10:10",
        arrivalTime:"July 25, 2020 23:15:20",
        progress: 10

    },
        {
        isExtremity: false,
        progress: 20
    }
    ,
        {
        isExtremity: false,
        progress: 25
    }
    ,
    {
        isExtremity: false,
        progress: 30
    },
    {
        isExtremity: false,
        progress: 35
    },
    {
        isExtremity: false,
        progress: 40
    },
    {
        isExtremity: false,
        progress: 45
    },
    {
        isExtremity: false,
        progress: 50
    },

    {
        isExtremity: true,
        portOfLoading: "Denmark",
        portOfDischarge: "Denmark",
        arrivalTime:"July 25, 2020 23:15:20",
        progress: 100
    }
    ]

const ExtremityDot = styled.div`
height: 25px;
width: 25px;
background-color:#87CEFA;
border-radius: 50%;
display: inline-block;
margin-bottom:40px:
padding: 20px

  }
`
const Dot = styled.div`
height: 10px;
width: 10px;
background-color:#1E90FF;
border-radius: 50%;
display: inline-block;
margin: 10px;
  }
`
const Img = styled.img`
height: 50px;
width:50px;
`
const progress = portDetails.map((port, index) =>

 <div>
    {port.isExtremity ? <div> <ExtremityDot></ExtremityDot> <hr></hr>{port.portOfLoading} {port.progress}%</div>: <Dot></Dot>}
    {!port.isExtremity ? <div>{ portDetails[index -1].progress + port.progress }</div> : null}

</div>
)
   
return (
    <div className='progress'>
        <Img src={pin} alt="pin_image"/>
        {progress}
    </div>
)

}
export default Dotts
