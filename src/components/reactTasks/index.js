import React from 'react'
import Hello from './hello'
import Kitty from './kitty'
import HelloKitty from './helloKitty'
import Person from './person'
import PersonWithProps from './personWithProps'
import Adder from './adder'
import Numbers from './listArray'
import EvenNumbers from './evenNumbers'
import BoldEvenNumbers from './boldEvenNumbers'
import PersonObject from './personObject'
import Company from './company'
import Button from './button'
import Text from './text'
import BigButton from './bigButton'
import RandomNumberGenerator from './randNumGen'
import BoxGrower from './boxGrower'
import NamesList from './namesList'
import NextName from './nextName2'

export default () => {
  return (
    <div>
      <h4>Question 1 Answer</h4>
      <Hello />

      <h4>Question 2 Answer</h4>
      <Kitty />

      <h4>Question 3 Answer</h4>
      <HelloKitty />

      <h4>Question 4 Answer</h4>
      <Person />

      <h4>Question 5 Answer</h4>
      <PersonWithProps name={"John"} age={20} />
      <PersonWithProps name={"Richard"} age={27} />

      <h4>Question 6 Answer</h4>
      <Adder number1={1} number2={2} />

      <h4>Question 7 Answer</h4>
      <Numbers numbers={[1, 2, 3, 4, 5]}/> 
      <Numbers numbers={[1, 2, 3, 4, 5, 6, 7]}/> 

      <h4>Question 8 Answer</h4>
      <EvenNumbers numbers={[1,2,3,4,5]} />

      <h4>Question 9 Answer</h4>
      <BoldEvenNumbers numbers={[1,2,3,4,5]} />

      <h4>Question 10 Answer</h4>
      <PersonObject person={{name: "John", age: 20}} />

      <h4>Question 11 Answer</h4>
      <Company name={"ZDEV"} 
      employees={
      	[{name: "John", age: 20},
      	{name: "Rich", age: 27}]
      } personComponent={<PersonObject />}
      />

      <h4>Question 12 Answer</h4>
      <Text style={{color : "pink"}}>Hello There!</Text>

      <h4>Question 13 Answer</h4>
      <Button />

      <h4>Question 14 Answer</h4>
      <BigButton onPress={() => console.log('Hello World')}>Press Me!</BigButton>

      <h4>Question 15 Answer</h4>
      <RandomNumberGenerator />

      <h4>Question 16 Answer</h4>
      <NextName names={['john','richard']} />

      <h4>Question 17 Answer</h4>
      <BoxGrower />

      <h4>Question 18 Answer</h4>
      <NamesList />



     


    </div>
  )
}
