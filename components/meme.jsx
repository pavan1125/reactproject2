import React,{useState} from "react"
import "../src/App.css"
import memesData from '../src/memesdata'
export default function Meme(){
    let url;
   const [imageurl,setImageUrl] =useState({
        topText:"",
        bottomText:"",
        randomUrl:"https://i.imgflip.com/1x6f.jpg"

   })
   
     function getMemeUrl(){
        const memesArray=memesData.data.memes;
        const randomNumber= Math.floor(Math.random()*memesArray.length)
        url=memesArray[randomNumber].url
        setImageUrl(()=>{
             return {
                ...imageurl,
                randomUrl:url
             }
        })
     }
    return(
        <div className="meme-main">
            <div className="meme-input-div">
            <input className="meme-input" />
            <input className="meme-input" />
            </div>
            <br />
            <button className="meme-button"
               onClick={getMemeUrl}
              >Get a new meme image 🖼</button>
           
              <img src={imageurl.randomUrl} className="meme-image"/>
        
         
        </div>
       
    )
}