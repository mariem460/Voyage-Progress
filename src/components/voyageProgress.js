import pin from './pin.png'
import Dot from './dot'
import '../styles/voyageProgress.css'

function voyageProgress ({portOfLoading, portOfDischarge, departureTime, arrivalTime}) {
    const dotsCount = 14;
    const arrayOfDots = [...Array(dotsCount).keys()];
    const currentTime = new Date().getTime();
    var totalTime = new Date(arrivalTime).getTime() - new Date(departureTime).getTime();
    var progress = currentTime - new Date(departureTime).getTime();
    const timePercentage = Math.round(progress / totalTime * 100 );

    //[true, true, true, faelse, false felae]

    const allDotsDetails = arrayOfDots
        .map(i => {
            let color = "rgb(136, 162, 189)";
            const dotPercentage = Math.round(i / dotsCount * 100 );
            let isLastInProgress = false;
            if (dotPercentage <= timePercentage) {
                isLastInProgress = true;
                color = "rgb(56, 80, 106)";
            }
            let dotDetails = { isExtremity: false, color};
    
            if (i === 0 || i === dotsCount - 1) {
                dotDetails = {
                    ...dotDetails,
                    isExtremity: true,
                    portName: i === 0 ? portOfLoading  : portOfDischarge,
                    isLastInProgress
                }
            }
            return dotDetails;
        })

    let dots = allDotsDetails.map((dotDetails, index) => 
            <Dot isExtremity = {dotDetails.isExtremity} portName={dotDetails.portName} key={index} color={dotDetails.color} isLastInProgress={dotDetails.isLastInProgress}></Dot>)

    let pinStyle = {
        position: "relative",
        left: (timePercentage - 170),
        height: '50px',
        width: '50px'
    }

    return (
        <div className="progress-bar">
            <div className="pin-container">
                <img src={pin} alt="pin" style={pinStyle}/>
            </div>
            <div className="dots-container">
                {dots}
            </div>
        </div> 
        )
}
export default voyageProgress;