import logo from '../assets/Luxi-Hosting-Logo.png'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Navbar() {

    const [active, setActive] = useState('About')
    const navItems = ['About', 'Team']
    const navi = useNavigate();

    return(
        <nav
            className=' w-4/5 mx-auto -z-10 flex items-center justify-between py-4 px-3 '
        >
            <div
                className="flex items-center gap-2"
            >
                <img
                    src={logo}
                    alt="logo"
                />
                <h2
                    className="font-montserrat text-4xl font-medium cursor-pointer"
                    onClick={()=>{
                        setActive('About')
                        navi('/about')
                    }}
                >
                    INSPETTO
                </h2>
            </div>

            <div
                className="flex items-center gap-7"
            >
                {
                    navItems.map((item, index) => (
                        <div
                            key={index}
                            className={`font-montserrat cursor-pointer text-2xl hover:scale-105 transition duration-200 font-medium ${
                            active === item ? 'text-[#651FFF]' : 'text-black'
                            }`}

                            onClick={()=> {
                                setActive(item)
                                navi(`/${item}`)
                            }}
                        >
                            {item}
                        </div>
                    ))
                }
            </div>

            <div>
                <button
                    className="w-[114px] h-[39px] rounded-xl bg-[#D1C4E9] z-10"
                >
                    <div
                        className="text-[#651FFF] text-center font-montserrat text-base font-semibold uppercase hover:scale-110 transition duration-200"
                    >
                        <a href="mailto:akshatsharma.career@gmail.com" target="_blank" rel="noopener">CONTACT</a>
                    </div>
                </button>
            </div>

        </nav>
    )
}

export default Navbar;