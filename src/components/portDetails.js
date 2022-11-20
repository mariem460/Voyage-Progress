import VoyageProgress from './voyageProgress'

function PortDetails () {
    const portOfLoading = "Madrid";
    const portOfDischarge = "Denmark";
    const departureTime = new Date("October 13, 2020 11:13:00");
    const arrivalTime = new Date("October 20, 2020 18:13:00");
console.log("loading",portOfLoading)
return (
    <div>
        <VoyageProgress 
            portOfLoading = {portOfLoading} 
            portOfDischarge= {portOfDischarge} 
            departureTime= {departureTime}
            arrivalTime={arrivalTime}>
        </VoyageProgress>
    </div>
    )
}
export default PortDetails;
