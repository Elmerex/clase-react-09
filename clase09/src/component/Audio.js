import React, { Component } from "react";
import audio from "../assets/audio/Track35.mp3";


export default class Audio extends Component {
    render() {
        return (

            <audio className="Audio" controls>
            <source src={ audio } type="audio/mpeg"/>
        
            </audio>
                        

        )

    }

}