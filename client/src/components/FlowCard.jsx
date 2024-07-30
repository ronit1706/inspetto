import PropTypes from "prop-types";
import '../App.css'

function FlowCard(props) {

    const pic = props.img;
    const heading1 = props.heading1;
    const heading2 = props.heading2;
    const sub = props.sub;

    return(
        <div className="relative flex flex-col gap-4 items-center justify-center w-[300px]  mx-auto rounded-2xl  hover:scale-105 transition-all ease-in-out duration-300 backdrop-blur-md bg-blend-lighten  pb-5">

            <img
                src={pic}
                alt='pic'
                className="animate-[pulse_4s_ease-in-out_infinite]"
            />

            <h3
                className="text-[rgba(0,0,0,0.87)] text-center font-montserrat text-2xl font-extrabold leading-none"
            >
                {heading1}
                <br/>
                {heading2}
            </h3>

            <p
                className="text-[rgba(0,0,0,0.87)] text-center font-montserrat text-base font-normal leading-normal"
            >
                {sub}
            </p>
        </div>
    )
}

FlowCard.propTypes = {
    pic : PropTypes.any,
    heading1 : PropTypes.string,
    heading2 : PropTypes.string,
    sub : PropTypes.string,
}

export  default FlowCard;