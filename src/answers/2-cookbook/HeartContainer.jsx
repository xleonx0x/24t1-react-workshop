import {BsFillSuitHeartFill} from "react-icons/bs";


const HeartContainer = ({numHearts}) => {
    const displayHearts = Array(numHearts).fill(<BsFillSuitHeartFill color="#FA6363" style={{marginRight: "3px", marginTop: "3px"}}/>);
    
    return (
        <div style={containerStyle}>
            {displayHearts}
        </div>
    )
}

const containerStyle = {
    background: "rgba(0, 0, 0, 0.5)",
    width:"fit-content",
    height: "fit-content",
    padding: "5px",
    paddingBottom: 0,
    borderRadius: "5px",
    marginBottom: "10px",
    alignItems: "center",

    outlineStyle: "2px solid rgba(0, 0, 0, 0.5)",
    outlineOffset: "2px",
}


export default HeartContainer;