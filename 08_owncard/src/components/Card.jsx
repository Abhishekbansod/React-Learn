import React from "react";
import mypicture from './Passphoto.jpg'

function Card(props){
    return(
        <>
            <div className="flex flex-col items-center bg-gray-600 shadow-lg p-5 w-60 h-auto mt-4 gap-1 border-2 border-yellow-500 hover:bg-gray-500 rounded-xl hover:scale-95 cursor-pointer">
                <img className="w-40 h-40 rounded-lg border-2 border-yellow-500" src={mypicture} alt="picture"/>

                <p className="font-thin">Softwere developer based in Bengaluru, Karnataka with overall 2 years of experience.</p>

                <h3 className="font-semibold">{props.username}</h3>
                <h3 className="font-semibold">{props.designation}, Infosys</h3>
            </div>
        </>
    )
}

export default Card