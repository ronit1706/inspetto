import bot from "../assets/bot.png"
import '../App.css'
import bwave1 from "../assets/BottomLeft.png";
import bwave2 from "../assets/BottomRight.png";
import {useState} from "react";
import axios from "axios";


function Prediction() {

    const [uploadedImage, setUploadedImage] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
    const [predicting, setPredicting] = useState(false);
    const [prediction, setPrediction] = useState(null);

    const handleImageChange = (event) => {
        setPrediction(null)
        const file = event.target.files[0];
        setUploadedImage(file);
        setUploadedImageUrl(URL.createObjectURL(file));
    }

    const handlePredict = async () => {
        setPredicting(true);
        try{
            const formData = new FormData();
            formData.append('image', uploadedImage);

            const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
                headers : {
                    'Content-Type': 'multipart/form-data',
                }
            })

            setPrediction(response.data.Prediction);

            console.log(response);

        }catch(err){
            console.error(err);
            setPrediction(null);
        }finally {
            setPredicting(false)
        }

    }

    return(
        <div
            className="relative w-full h-[90vh] flex flex-wrap items-center justify-center gap-5"
        >

            <div className="absolute top-20 font-montserrat text-5xl font-extrabold text-gradient">
                CHECK FOR DEFECTS
            </div>

            <div className="w-3/4 h-full flex justify-center items-center gap-5 z-20 pt-10">
                <div
                    className=" flex flex-col items-center justify-center gap-5"
                >
                    <img
                        src={bot}
                        alt="bot"
                        className="w-[35vh]"
                    />
                    <input
                        type="file"
                        onChange={handleImageChange}
                        accept="image/*"
                        className='pl-14'
                    />

                </div>
                <div>
                    {
                        uploadedImage &&
                        <div className="h-full flex flex-col items-center justify-center gap-5">
                            <img
                                src={uploadedImageUrl}
                                alt="uploaded image"
                                className=" rounded-2xl"
                            />

                            <button
                                className="w-[114px] h-[39px] rounded-xl bg-[#D1C4E9] z-10"
                                onClick={handlePredict}
                            >
                                <div
                                    className="text-[#651FFF] text-center font-montserrat text-base font-semibold uppercase hover:scale-110 transition duration-200"
                                >
                                    Predict
                                </div>
                            </button>
                            {
                                predicting ? (
                                    <div className='spinner'> </div>
                                ) : (
                                    <div>
                                        <h3
                                            className='font-montserrat cursor-pointer text-2xl hover:scale-105 transition duration-200 font-medium'
                                        ><span className='text-[#651FFF]'>Prediction</span> : {prediction}</h3>
                                    </div>
                                )
                            }

                        </div>
                    }
                </div>

            </div>

            <img
                src={bwave1}
                alt="bottomwave"
                className="fixed bottom-0 left-0 -z-10"
            />

            <img
                src={bwave2}
                alt="bottomwave"
                className="fixed bottom-0 right-0 -z-20"
            />
        </div>
    )
}

export default Prediction;