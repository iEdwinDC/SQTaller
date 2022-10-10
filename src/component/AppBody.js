import React, {Component} from "react";
import flower from "../images/flower.png";
import flower2 from "../images/flower2.jpeg";
import video from "../images/video.mp4";

class AppBody extends Component {
    render(){
        return(
            <body>
                <div 
            style={{
                backgroundColor: "#D8F6F9",
                height: "110%",
                width: "100%",
                position: "absolute",   
            }}>
            
                <h1 class="title" 
                    style={{
                        fontfamily: 'Times New Roman, Times, serif',
                        color: "#42585a",
                        fontfamily: "calibri-bold",
                        textAlign: "center"
                    }}>
                    Pagina web<br></br><br></br>
                </h1>
            <div
                style={{ 
                        float: "left",
                        backgroundColor: "#009790", 
                        height: "80%",
                        width: "40%",
                        marginLeft: "3%",
                        }}>

                <figure style={{marginLeft: "-8%", marginTop:"25%"}}>
                    <img 
                        src={flower}
                        style={{
                            float: "left",
                            marginLeft: "15%",	
                            width:"250px",
                            height:"300px"                         
                        }} 
                    />  
                </figure>

                <figure style={{marginLeft: "5%", marginTop:"25%"}}>
                    <img 
                        src={flower2}
                        style={{
                            float: "left",
                            marginLeft: "15%",	
                            width:"280px",
                            height:"300px" 
                        }} 
                    />  
                </figure>

            </div>
            <div 
                style={{ 
                    float: "left",
                    backgroundColor: "#4a6331", 
                    height: "80%",
                    width: "40%",
                    marginLeft: "14%",
                    }}>
                        
                    <figure style={{marginTop: "24%", marginLeft: "15%"}}>
                    <video 
                        src={video }
                        autoplay="true" muted="true" loop="true" 
                        style={{
                            width: "90%",                       
                        }} 
                    />  
                </figure>
            </div>   
                    
        </div>
            </body>
        );
    }}

export default AppBody;
