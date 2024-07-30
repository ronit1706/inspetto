import bwave1 from '../assets/BottomLeft.png'
import bwave2 from '../assets/BottomRight.png'
import akshat from '../assets/team/akshat.jpg'
import deb from '../assets/team/deb.jpeg'
import namneet from '../assets/team/Namneet.jpeg'
import ronit from '../assets/team/ronit.jpeg'
import utkarsh from '../assets/team/utkarsh.jpeg'
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
                            title={"Full Stack Developer"}
                            name={"Akshat Sharma"}
                            content={"Development wizard conjuring captivating and seamless user experiences through deft wielding of MERN."}
                            image={akshat}
                            linkedin={"https://www.linkedin.com/in/akkkshattt-sharrrmaaa/"}
                            github={"https://github.com/Akkkshattt-Sharrrmaaa"}
                        />
                    </div>
                    <div className="w-[400px]">
                        <DevCard
                            title={"ML Researcher"}
                            name={"Debarghya Deb"}
                            content={"Mathematical virtuoso wielding the power of algorithms and statistical models to unlock hidden patterns and insights."}
                            image={deb}
                            linkedin={"linkedin.com/in/debarghya-deb-56a280141"}
                            github={"https://github.com/iDream2"}
                        />
                    </div>
                    <div className="w-[400px]">
                        <DevCard
                            title={"UI/UX Specialist"}
                            name={"Namneet Kaur"}
                            content={"Design virtuoso fueled by a passion for crafting intuitive and stunning digital landscapes that delight users."}
                            image={namneet}
                            linkedin={"https://www.linkedin.com/in/namneet-kaur-371a60257"}
                            github={"https://github.com/Namneet2001"}
                        />
                    </div>
                    <div className="w-[400px]">
                        <DevCard
                            title={"ML Engineer"}
                            name={"Ronit Khurana"}
                            content={"Machine learning maestro unlocking hidden insights and predictive power through masterful orchestration of data"}
                            image={ronit}
                            linkedin={"https://www.linkedin.com/in/akkkshattt-sharrrmaaa/"}
                            github={"https://github.com/Akkkshattt-Sharrrmaaa"}
                        />
                    </div>
                    <div className="w-[400px]">
                        <DevCard
                            title={"ML Researcher"}
                            name={"Utkarsh Rastogi"}
                            content={"Architect of intelligent systems, bridging the gap between data science, software engineering and deep learning."}
                            image={utkarsh}
                            linkedin={"https://www.linkedin.com/in/akkkshattt-sharrrmaaa/"}
                            github={"https://github.com/Akkkshattt-Sharrrmaaa"}
                        />
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
        </div>
    )
}

export default Team;