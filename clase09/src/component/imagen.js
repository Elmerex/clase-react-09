import React, { Component } from "react";
import foto from "../assets/img/img_girl.jpg";


export default class Imagen extends Component {
    render() {
        return (

            <img className="Fotos" src={ foto } alt="foto" width={ 300 }></img>
                        

        )

    }

}