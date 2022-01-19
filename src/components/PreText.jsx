function PreText({image, text, color, onClick}) {

    return <div className="p-2 hover:scale-110" style={badgeStyleSheet()} onClick={onClick} >
        <div style={imageSectionStylesheet()}>
            <div style={horizontalCenterizer()}>

                {/* The ellipse begining */}
                <div style={iconStylesheet(color)}>
                    <div style={containerStyle()} className="flex justify-center">
                        <img src={image} alt="." style={imageStylesheet()} />
                    </div>
                </div>
                {/* The ellipse end */}

            </div>
            <div className="text-xs font-thin text-center mt-2">{text}</div>
        </div>
    </div>
}

function horizontalCenterizer() {
    return {
        display: "flex",
        justifyContent: "center",
    }
}

function badgeStyleSheet() {
    return {
        width: "85px",
        height: "85px",
        background: " rgba(196, 196, 196, 0.7)",
        borderRadius: "5px",
        ...horizontalCenterizer(),
        paddingTop: "10px",
        margin: "5px",
        transition: "transform 0.3s ease-in-out",
    }
}

function imageSectionStylesheet() {
    return {
        alignContent: "center",
    }
}

function iconStylesheet (color) {
    return {
        backgroundColor: color,
        borderRadius: "5rem",
        height: "50px",
        width: "50px",
        ...horizontalCenterizer(),
        flexDirection: "column",
    }
}

function containerStyle() {
    return {
        textAlign: "center",
    }
}

function imageStylesheet() {
    return {
        width: "25px",
        height: "25px",
    }
}

export default PreText;