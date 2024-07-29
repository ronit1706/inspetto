import wave from "../assets/wave1.png";
import trans1 from "../assets/transaction1.png";
import trans2 from "../assets/transaction2.png";
import trans3 from "../assets/transaction3.png";
import gp1 from "../assets/Group1.svg";
import gp2 from "../assets/Group2.svg";
import '../App.css'
import FlowCard from "../components/FlowCard.jsx";
import {useNavigate} from "react-router-dom";

function About() {

    const navi = useNavigate()
    return(
        <div className=" relative overflow-hidden  w-full h-full flex  justify-center items-center pb-10">

            {/* ---------waves-------- */}
            <img
                src={wave}
                alt="wave"
                className=" absolute right-0 -top-20 z-10 opacity-95 "
            />

            {/*----------information--------*/}
            <div
                className=" absolute  w-4/5 mx-auto z-20 flex flex-col gap-10"
            >
                {/* ----------headline---------- */}
                <div className="font-montserrat text-6xl font-extrabold">
                    <p>Advance Quality Control</p>
                    <p> With <span className="text-gradient">AI Precision</span></p>
                </div>

                {/* ----------subtext---------- */}
                <div
                    className="text-[rgba(0,0,0,0.87)] font-montserrat text-3xl font-normal leading-[1.5]"
                >
                    <p>deep learning technology to identify <br/> surface defects with unparalleled accuracy.</p>
                </div>

                {/* ----------buttons----------*/}
                <div
                    className="flex items-center gap-7"
                >
                    <button
                        className="w-[236px] h-[54px] bg-[#651FFF] text-white rounded-full font-montserrat hover:scale-105 transition-all duration-200 ease-in-out"
                        onClick={()=>{
                            navi("/prediction")
                        }}
                    >GET STARTED
                    </button>

                    <button
                        className="w-[236px] h-[54px] text-[rgba(0,0,0,0.87)] rounded-full font-montserrat border border-black  hover:scale-105 transition-all duration-200 ease-in-out"
                    >
                        <a href="mailto:akshatsharma.career@gmail.com" target="_blank">GET IN TOUCH</a>
                    </button>
                </div>


                {/*--------- flow diagram----------*/}
                <div
                    className="flex items-center justify-between gap-7"
                >

                    <div>
                        <FlowCard
                            img={trans1}
                            heading1={"Pick"}
                            heading2={"Your Image"}
                            sub={"Upload the image you wish to analyse."}
                        />
                    </div>

                    <img src={gp1} alt="gp1"/>

                    <div>
                        <FlowCard
                            img={trans2}
                            heading1={"Choose"}
                            heading2={"The Model"}
                            sub={"Select the model most suitable for your image."}
                        />
                    </div>

                    <img src={gp2} alt="gp2"/>

                    <div>
                        <FlowCard
                            img={trans3}
                            heading1={"Get"}
                            heading2={"The Results"}
                            sub={"Use the results to improve your product."}
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About;