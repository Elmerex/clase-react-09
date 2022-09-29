import React, { Component } from "react";

export default class Video extends Component {
    render() {
        return (

            

            <video className="Video" width="320" height="240" controls>
            <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4"/>          
            </video>
                        

        )

    }

}