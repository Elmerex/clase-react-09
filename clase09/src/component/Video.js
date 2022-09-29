import React, { Component } from "react";

export default class Video extends Component {
    render() {
        return (

            <video width="320" height="240" controls>
            <source src="clase09\src\assets\video\movie.mp4" type="video/mp4"></source>
            
            Your browser does not support the video tag.
            </video>
                        

        )

    }

}