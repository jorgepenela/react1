import React, {Component} from "react";

class PieDePagina extends Component {
    render(){
        return(
            <div style={{
                backgroundColor : "black",
                textAlign : "center",
                color: "#fff",
                paddingTop : "30px;",
                marginTop : "10px;"
            }}>
                <div>
                    {this.props.texto}
                </div>
            </div>
            
            )
    }
}

export default PieDePagina;