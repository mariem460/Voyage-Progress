import pin from './pin.png'
import Dot from './dot'
import '../styles/voyageProgress.css'

function voyageProgress ({portOfLoading, portOfDischarge, departureTime, arrivalTime}) {
    const dotsCount = 14;
    const dotNumbers = [...Array(dotsCount).keys()];
    const currentTime = new Date().getTime();
    const totalTime = new Date(arrivalTime).getTime() - new Date(departureTime).getTime();
    const progress = currentTime - new Date(departureTime).getTime();

    let progressPercentage = Math.round(progress / totalTime * 100);
    let indexOfLastInProgress = dotsCount - 1;

    if (currentTime < new Date(departureTime).getTime()) {
        progressPercentage = 0;
    } else if (currentTime > new Date(arrivalTime).getTime()) {
        progressPercentage = 100;
    }

    const allDotsDetails = dotNumbers
        .map((dotNr, index) => {
            let color = "rgb(136, 162, 189)";
            const dotPercentage = Math.round(dotNr / dotsCount * 100 );
            if (dotPercentage <= progressPercentage) {
                color = "rgb(56, 80, 106)";
                indexOfLastInProgress = index;
            }
            let dotDetails = { isExtremity: false, color};
    
            if (dotNr === 0 || dotNr === dotsCount - 1) {
                dotDetails = {
                    ...dotDetails,
                    isExtremity: true,
                    portName: dotNr === 0 ? portOfLoading  : portOfDischarge
                }
            }
            return dotDetails;
        });

        

    let dots = allDotsDetails.map((dotDetails, index) => {
        return <Dot
            isExtremity = {dotDetails.isExtremity}
            portName={dotDetails.portName}
            key={index}
            color={dotDetails.color}
            isLastInProgress={index === indexOfLastInProgress}>
        </Dot>
    })

    let pinStyle = {
        position: "relative",
        left: (progressPercentage - 170),
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