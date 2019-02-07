import React from "react";

class Weather extends React.Component{

    render(){

        return(

            <div className="weather-info">
                {
                    // this.props.country && this.props.city && <p className="weather__key">Name: 
                    this.props.name && <p className="weather__key">Name: 

                        {/* <span className="weather__value">  {this.props.city}, {this.props.country}</span>                     */}
                        <span className="weather__value">  {this.props.name}</span>                    

                    </p> 
                }
                
                {
                    this.props.temperature && <p className="weather__key">Temperature: 
                        <span className="weather__value">  {this.props.temperature}</span>
                    </p>
                }

                {
                    this.props.id && <p className="weather__key">ID: 
                        <span className="weather__value">  {this.props.id}</span>
                    </p>
                }

                {
                    this.props.description && <p className="weather__key">Description:  
                        <span className="weather__value">  {this.props.description}</span>
                    </p>
                }

                {
                    this.props.error && <p className="weather__error">{this.props.error}</p>
                }
        
            </div>
        )
    }
}

export default Weather;