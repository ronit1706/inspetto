import bwave1 from '../assets/BottomLeft.png'
import bwave2 from '../assets/BottomRight.png'
import akshat from '../assets/team/akshat.jpg'
import DevCard from "../components/DevCard.jsx"

function Team() {
    return(
        <div
            className="relative overflow-hidden  w-full min-h-screen flex flex-col  justify-center items-center pb-20"
        >

            <div className="absolute top-10 font-montserrat text-5xl font-extrabold text-gradient">
                THE SQUAD
            </div>

            <div
                className="flex items-center justify-center"
            >

                <div
                    className="w-[90vw] flex flex-wrap items-center justify-center gap-5 "
                >
                    <div className="w-[400px]">
                        <DevCard
                            title={"Front End Developer"}
                            name={"Akshat Sharma"}
                            content={"Frontend wizard conjuring captivating and seamless user experiences through deft wielding of Reacts."}
                            image={akshat}
                            linkedin={"https://www.linkedin.com/in/akkkshattt-sharrrmaaa/"}
                            github={"https://github.com/Akkkshattt-Sharrrmaaa"}
                        />
                    </div>
                    <div className="w-[400px]">
                        <DevCard
                            title={"Front End Developer"}
                            name={"Akshat Sharma"}
                            content={"Frontend wizard conjuring captivating and seamless user experiences through deft wielding of Reacts."}
                            image={akshat}
                            linkedin={"https://www.linkedin.com/in/akkkshattt-sharrrmaaa/"}
                            github={"https://github.com/Akkkshattt-Sharrrmaaa"}
                        />
                    </div>
                    <div className="w-[400px]">
                        <DevCard
                            title={"Front End Developer"}
                            name={"Akshat Sharma"}
                            content={"Frontend wizard conjuring captivating and seamless user experiences through deft wielding of Reacts."}
                            image={akshat}
                            linkedin={"https://www.linkedin.com/in/akkkshattt-sharrrmaaa/"}
                            github={"https://github.com/Akkkshattt-Sharrrmaaa"}
                        />
                    </div>
                    <div className="w-[400px]">
                        <DevCard
                            title={"Front End Developer"}
                            name={"Akshat Sharma"}
                            content={"Frontend wizard conjuring captivating and seamless user experiences through deft wielding of Reacts."}
                            image={akshat}
                            linkedin={"https://www.linkedin.com/in/akkkshattt-sharrrmaaa/"}
                            github={"https://github.com/Akkkshattt-Sharrrmaaa"}
                        />
                    </div>
                    <div className="w-[400px]">
                        <DevCard
                            title={"Front End Developer"}
                            name={"Akshat Sharma"}
                            content={"Frontend wizard conjuring captivating and seamless user experiences through deft wielding of Reacts."}
                            image={akshat}
                            linkedin={"https://www.linkedin.com/in/akkkshattt-sharrrmaaa/"}
                            github={"https://github.com/Akkkshattt-Sharrrmaaa"}
                        />
                    </div>

                </div>

                {/*<div className="flex flex-wrap mx-auto gap-x-1">*/}
                {/*    <div className="w-1/3 min-w-[200px]">*/}
                {/*        <DevCard*/}
                {/*            title={"Front End Developer"}*/}
                {/*            name={"Akshat Sharma"}*/}
                {/*            content={"Frontend wizard conjuring captivating and seamless user experiences through deft wielding of Reacts."}*/}
                {/*            image={akshat}*/}
                {/*            linkedin={"https://www.linkedin.com/in/akkkshattt-sharrrmaaa/"}*/}
                {/*            github={"https://github.com/Akkkshattt-Sharrrmaaa"}*/}
                {/*        />*/}
                {/*    </div>*/}

                {/*    <div className="w-1/3">*/}
                {/*        <DevCard*/}
                {/*            title={"Front End Developer"}*/}
                {/*            name={"Akshat Sharma"}*/}
                {/*            content={"Frontend wizard conjuring captivating and seamless user experiences through deft rst styling prowess."}*/}
                {/*            image={akshat}*/}
                {/*            linkedin={"https://www.linkedin.com/in/akkkshattt-sharrrmaaa/"}*/}
                {/*            github={"https://github.com/Akkkshattt-Sharrrmaaa"}*/}
                {/*        />*/}
                {/*    </div>*/}

                {/*    <div className="w-1/3">*/}
                {/*        <DevCard*/}
                {/*            title={"Front End Developer"}*/}
                {/*            name={"Akshat Sharma"}*/}
                {/*            content={" Conjuring captivating and seamless user experiences through ilwind CSS's utility-first styling prowess."}*/}
                {/*            image={akshat}*/}
                {/*            linkedin={"https://www.linkedin.com/in/akkkshattt-sharrrmaaa/"}*/}
                {/*            github={"https://github.com/Akkkshattt-Sharrrmaaa"}*/}
                {/*        />*/}
                {/*    </div>*/}

                {/*    <div className="w-1/3">*/}
                {/*        <DevCard*/}
                {/*            title={"Front End Developer"}*/}
                {/*            name={"Akshat Sharma"}*/}
                {/*            content={" experiences through  React's powerful capabilities, combined with Tailwind CSS's utility-first styling prowess."}*/}
                {/*            image={akshat}*/}
                {/*            linkedin={"https://www.linkedin.com/in/akkkshattt-sharrrmaaa/"}*/}
                {/*            github={"https://github.com/Akkkshattt-Sharrrmaaa"}*/}
                {/*        />*/}
                {/*    </div>*/}

                {/*    <div className="w-1/3">*/}
                {/*        <DevCard*/}
                {/*            title={"Front End Developer"}*/}
                {/*            name={"Akshat Sharma"}*/}
                {/*            content={"conjuring gh deft wielding of React's powerful capabilities, combined with Tailwind CSS's utility-first styling prowess."}*/}
                {/*            image={akshat}*/}
                {/*            linkedin={"https://www.linkedin.com/in/akkkshattt-sharrrmaaa/"}*/}
                {/*            github={"https://github.com/Akkkshattt-Sharrrmaaa"}*/}
                {/*        />*/}
                {/*    </div>*/}

                {/*</div>*/}

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
        </div>
    )
}

export default Team;