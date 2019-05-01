import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import Resume from './Resume';
import Result from './Result';
import {getYearsDiference, brandCalculate, getPlan} from '../helper';


class App extends Component {

  state = {
    result: '',
    data: {}
  }

  insuranceQuote = data => {
    // console.log(data);   
    const {brand, year, plan} = data; 
    
    console.log(plan);
    
    // add a base of 2000 for the insurance quote
    let result = 2000;
    
    // get the diference of years 
    const diference = getYearsDiference(year);
    //console.log('The diference is/are: ' + diference);    

    // for each year decrease 3% in the insure quote value 
    result -= ((diference * 3) * result) / 100;
    // console.log(result);    

    // American 15%, Asian 5% and European 30% of increment to the value  
    result *= brandCalculate(brand);
    // console.log(result);

    // the basic plan increase the value in 20% and the complete plan increase in 50%
    let increasePlan = getPlan(plan);
    // console.log(increasePlan);
    result = parseFloat(increasePlan * result).toFixed(2);
    //console.log(result);
    
    // Create object for the resume
    const autoData = {
      brand,
      year,
      plan  
    }

    this.setState({
      result,
      data: autoData
    });

  }

  render(){
    return (
      <div className="container">
        <Header title="Cotação de Seguro de Autos" /> 
        
        <div className="container-form">
          <Form insuranceQuote={this.insuranceQuote} 
          />  
          <Resume
            data={this.state.data}
          />
          <Result 
            result={this.state.result}
          />
        </div>

      </div>  
    );
  }
}

export default App;
