import products from './products.json'
import React, { Component } from 'react'


export default class App extends Component {
 constructor (){
  super();
  this.state={
    cartidems:[]
  }
 }
 addcart(prod,props){
  //  var  prod == prod ? (prod.qty +=1):"false";
   this.setState({cartidems:[...this.state.cartidems,prod]})
  var idems=[...new Set(this.state.cartidems)]

console.log(idems)
 }
 fave(prod){
  //  var  prod == prod ? (prod.qty +=1):"false";}
   this.setState({cartidems:[...this.state.cartidems,prod]})
   var idems=[...new Set(this.state.cartidems)]
console.log(idems);
 }
  render() {
    return (
      <div>
      {
        products.map((products,index)=>(
           <div key={index}><h1>{products.name}</h1>
          <button onClick={()=>this.addcart(products)} >addtocart</button>
          <button onClick={()=>this.fave(products)}>Favoraties</button>
     
          </div>
         ) )
      }
      
        <h1>cartidems</h1>
        {
          this.state.cartidems.map((prod,index)=>(
            <div key={index}><h1>{prod.name} </h1></div>
          ))
        }
      
      
      </div>
    )
  }
}
