
function Member({name, pos, image, style}) {
    return <span>
        <center>
            <img src={image} alt="" style={{...style, ...imageStyle()}} />
            <center style={textStuffs()} >
                <div style={nameStyle()}>{name}</div>
                <small>{pos}</small>
            </center>
        </center>
    </span>
}

function imageStyle() {
    return {
        padding: "4px",
        borderRadius: "7rem",
        backgroundColor: "#5C5C5C4F",
    }
}

function textStuffs() {
    return {
        padding: "10px",
    }
}

function nameStyle() {
    return {
        fontFamily: "Montserrat",
    }
}

export default Member;