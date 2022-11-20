import '../styles/dot.css'

function Dot({isExtremity, portName, color, isLastInProgress}) {
    const dotRadius = `${isExtremity ? 25 : 10}px`;

    let dotStyle = {
        width: dotRadius,
        height: dotRadius,
        backgroundColor: color,
        borderRadius: '50%',
    }

    return (
        <div className="dot-container">
            <div className="dot" style={dotStyle}><h5>{portName}</h5></div>
        </div>
    )
}

export default Dot;