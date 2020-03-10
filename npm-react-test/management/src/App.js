import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
const customers = [
  {
  'id':1,
  'image':'https://placehoimage.com/64/64/1',
  'name':'홍길동',
  'birthday':'941010',
  'gender':'남자',
  'job':'대학생'
 },
 {
  'id':2,
  'image':'https://placehoimage.com/64/64/2',
  'name':'동길홍',
  'birthday':'921010',
  'gender':'남자',
  'job':'대학생'
 },
 {
  'id':3,
  'image':'https://placehoimage.com/64/64/3',
  'name':'길동홍',
  'birthday':'931010',
  'gender':'남자',
  'job':'대학생'
 }
]
class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c=>{
            return (<Customer
              key = {c.id} 
              id = {c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}

            />);
          })
        }
      
      </div>
    );
  }
}
export default App;
