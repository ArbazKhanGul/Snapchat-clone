import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import "./ChatView.css"
import { selectSelectedImage } from "./features/appSlice"
import {CountdownCircleTimer}  from "react-countdown-circle-timer"


export default function ChatView(){

    const selectedImage=useSelector(selectSelectedImage);
    const navigate = useNavigate();
    
useEffect(()=>{
if(!selectedImage){
    exit()
}
},[selectedImage])

    const exit=()=>{
          navigate("/chats")
    }

    return (<div className="chatView">
        <img src={selectedImage} alt="Before" onClick={exit} />
       
       <div className="chatView__timer">

        <CountdownCircleTimer
        
        strokeWidth={10}
        size={60}
        isPlaying
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        >
             {({remainingTime})=>{
                 if(remainingTime===0) {
                     exit();
                 }
                 return remainingTime;
             }}
            </CountdownCircleTimer>
            </div>

    </div>)
}