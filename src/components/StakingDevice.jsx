import { useEffect } from "react";


function StakingDevice () {

    useEffect(() => {
        const script = document.createElement("script");
        script.innerHTML = `
        new spine.SpinePlayer("stakingDevice", {
            skelUrl: "/assets/Stacking device 06.json",
            atlasUrl: "/assets/Stacking device 06.atlas",
            showControls: false,
            backgroundColor: "#aaaaaa",
        });
        `;

        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
        // eslint-disable-next-line
    }, []);

    return <div id="stakingDevice" className="flex p-0 justify-center h-100" >
    </div> 
}

export default StakingDevice;