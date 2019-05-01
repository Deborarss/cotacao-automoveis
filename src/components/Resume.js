import React, {Component} from 'react';
import {capFirstLetter} from '../helper';
import Result from './Result';

class Resume extends Component {

  showResume = () => {
    const {brand, year, plan} = this.props.data;

    if(!brand || !year || !plan) return null;

    return (
      <div className="resume">
        <h2>Resumo da Cotação</h2>
        <li>Marca: {capFirstLetter(brand)}</li>
        <li>Plano: {capFirstLetter(plan)}</li>
        <li>Ano: {year}</li> 
      </div> 
    )
  }

  render() {
    return(
      <div>
        {this.showResume()}
      </div>   
    );
  }    
}

export default Resume;