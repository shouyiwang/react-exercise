import React, { Component } from 'react';
import Chocolate from "./Chocolate"


const makeChocolateState = function (enoughMoney) {

  return [
    {name: "Caramel", price: 2.5, enoughMoney: enoughMoney[0]},
    {name: "Hazelnut", price: 3.1, enoughMoney: enoughMoney[1]},
    {name: "Organic Raw", price: 2, enoughMoney: enoughMoney[2]},
    {name: "Mazzbuz", price: 4, enoughMoney: enoughMoney[3]},
    {name: "White", price: 3.5, enoughMoney: enoughMoney[4]}
  ];
}

const initialState = {
  chocolates: makeChocolateState([false, false, false, false, false]),
  sum: 0,
  display: "",
  end: false
};



class Vending extends Component {
  constructor() {
    super();
    this.state = initialState;

    this._handleClickCoin = this._handleClickCoin.bind(this);
    this._chooseChocolate = this._chooseChocolate.bind(this);

  }

  showAvailableChocolate(sum) {
    let enoughMoneyArray = [];
    this.state.chocolates.forEach(element => {
      if(sum >= element.price) {
        enoughMoneyArray.push(true);
      }
      else {
        enoughMoneyArray.push(false);
      }
    })

    this.setState ({
      chocolates: makeChocolateState(enoughMoneyArray),
      sum: sum
    });
  }

  _handleClickCoin(e) {
    let sum = parseFloat(this.state.sum) + Number(e.target.value);
    sum = sum.toFixed(1);

    this.showAvailableChocolate(sum);
  }

  endSession() {
    setTimeout(() => {
      this.setState(initialState);
    }, 5000);
  }

  _chooseChocolate(name) {
    let price = this.state.chocolates.filter(choco => {return choco.name == name})[0].price;
    let sum = this.state.sum - price;
    sum = sum.toFixed(1);
    this.setState({
      sum: sum,
      display: "Your choice is " + name + ", keep your change $" + sum,
      end: true
    });

    this.endSession();
  }


  render() {
    return (
      <div className ="outer">
        <h2>Chocolate Vending Machine</h2>
        <div>
          {this.state.chocolates.map((p)=>
      			<div key={p.uid}>
      				<Chocolate info={p} select={this._chooseChocolate} end={this.state.end}/>
      			</div>)}
        </div>

        $<input type="text" className="display" placeholder="0.00" value={ this.state.sum} readOnly/>

        <div>
           <button className={this.state.end? "disabled" : "enabled"} onClick={this._handleClickCoin}   value="0.1">10c</button>
           <button className={this.state.end? "disabled" : "enabled"} onClick={this._handleClickCoin}   value="0.2">20c</button>
           <button className={this.state.end? "disabled" : "enabled"} onClick={this._handleClickCoin}   value="0.5">50c</button>
           <button className={this.state.end? "disabled" : "enabled"} onClick={this._handleClickCoin}   value="1">$1</button>
           <button className={this.state.end? "disabled" : "enabled"} onClick={this._handleClickCoin}   value="2">$2</button>
         </div>
         <h3>{this.state.display}</h3>
      </div >
    );
  }
}

export default Vending;
