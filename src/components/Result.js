import React, {Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Result extends Component {
  render() {
    const result = this.props.result;
    const msg = (!result) ? 'Escolha a marca, ano e tipo de seguro' : 'O total é: R$ ';
    return(
      <div className="total">
        {msg}
        <TransitionGroup component="span" className="result">
          <CSSTransition 
            classNames="result" 
            key={result}
            timeout={{enter: 500, exit: 500}} >
            <span>{result}</span>
          </CSSTransition> 
        </TransitionGroup>
      </div>
    );
  }
}

export default Result;