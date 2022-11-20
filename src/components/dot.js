import '../styles/dot.css'
import pin from './pin.png'

function Dot({isExtremity, portName, color, isLastInProgress, progressPercentage}) {
    const dotRadius = `${isExtremity ? 25 : 10}px`;
console.log("isLastInProgress", isLastInProgress)
    let dotStyle = {
        width: dotRadius,
        height: dotRadius,
        backgroundColor: color,
        borderRadius: '50%',
    }

    return (
        <div className="dot-container">
            <div className="pin-container">
                {isLastInProgress ?<img src={pin} alt="pin" className="pin-style"/> : null}
            </div>
            <div className="dot" style={dotStyle}><h5>{portName}</h5></div>
        </div>
    )
}

export default Dot;