import pin from './pin.png'
import Dot from './dot'
import '../styles/voyageProgress.css'

function voyageProgress ({portOfLoading, portOfDischarge, departureTime, arrivalTime}) {
    console.log(portOfLoading)
    const dotsCount = 14;
    const arrayOfDots = [...Array(dotsCount).keys()];
    const allDotsDetails = arrayOfDots
        .map(i => {
            const currentTime = Date.now;
            const percentage = (arrivalTime - departureTime)- currentTime/100;
            let color = "#85bef7";
            if (percentage[i] <= percentage[i+1]) {
                <img src = {pin} alt = "pin_image"/>
                color = "#85bef7";
            }
            let dotDetails = { isExtremity: false, color};
            if (i === 0 || i === dotsCount - 1) {
                dotDetails = {
                    ...dotDetails,
                    isExtremity: true,
                    portName: i === 0 ? portOfLoading  : portOfDischarge
                }
                console.log(dotDetails)
            }
            return dotDetails;
        });


    let dots = allDotsDetails
        .map((dotDetails, index) => 
        <Dot isExtremity = {dotDetails.isExtremity}  key={index}></Dot>
        )
    return (
        <div>
            {dots}
        </div>

         
        )
}
export default voyageProgress;