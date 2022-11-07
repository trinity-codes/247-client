import {default as ReactTimer} from "react-compound-timerv2";


const Timer = () => {

    return (
        <div className="container timer bg-white">
                <ReactTimer>
                    <ReactTimer.Seconds />
                </ReactTimer>
        </div>
    )
}


export default Timer