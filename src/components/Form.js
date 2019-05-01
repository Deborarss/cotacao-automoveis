import React, {Component} from 'react';

class Form extends Component {

  // refs are to read the values ​​of the fields
  // Get the data
    brandRef = React.createRef();
    yearRef = React.createRef();
    basicPlanRef = React.createRef();
    completePlanRef = React.createRef();

  
  insuranceQuote = e => {
    e.preventDefault();

    // console.log(this.brandRef.current.value);

    const plan = this.basicPlanRef.current.checked ? "basico" :"completo";

    // create the object
		const infoAuto = {
			brand: this.brandRef.current.value,
			year:  this.yearRef.current.value,
			plan: plan
    };
    
		// Send the object to the principal component
    this.props.insuranceQuote(infoAuto); 
    
		};

  render() {

    return(
      <form onSubmit={this.insuranceQuote}>
        <div className="field"> 
          <label htmlFor="brand">Marca</label>
          <select name="brand" id="brand" ref={this.brandRef}>
            <option value="americano">Americano</option>
            <option value="asiatico">Asiático</option>
            <option value="europeu">Europeu</option>
          </select>
        </div>  

        <div className="field">
          <label htmlFor="year">Ano</label>
          <select name="year" id="year" ref={this.yearRef}>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
          </select>
        </div>

        <div className="field">
          <label>Plano</label>
          <input type="radio" name="plan" value="basic" defaultChecked className="rb-basic" ref={this.basicPlanRef}/> Básico
          <input type="radio" name="plan" value="complete" className="rb-complete" ref={this.completePlanRef}/> Completo
        </div>

        <button type="submit" className='btn'>Cotar</button>
      </form>
      );
    }
  }

export default Form;