import FileUpload from "../components/FileUpload.jsx";
import bot from "../assets/bot.png"
import bwave1 from "../assets/BottomLeft.png";
import bwave2 from "../assets/BottomRight.png";

function Prediction() {
    return(
        <div
            className="relative w-full h-[90vh] flex flex-wrap items-center justify-center gap-5"
        >

            <div className="absolute top-20 font-montserrat text-5xl font-extrabold text-gradient">
                CHECK FOR DEFECTS
            </div>

            <div className="w-3/4 h-full  mx-auto flex justify-between items-center">
                <div
                    className=" flex items-center justify-center gap-5"
                >
                    <img
                        src={bot}
                        alt="bot"
                        className="w-[35vh]"
                    />

                    <div
                        className="relative right-20"
                    >
                        <FileUpload/>
                    </div>
                </div>

            </div>

            <img
                src={bwave1}
                alt="bottomwave"
                className="fixed bottom-0 left-0"
            />

            <img
                src={bwave2}
                alt="bottomwave"
                className="fixed bottom-0 right-0"
            />
        </div>
    )
}

export default Prediction;