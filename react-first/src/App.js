import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons:[
      {id:1 ,name:'Sam'},
      {id:12, name:'Rob'},
      {id:122, name:'Sonia'}
    ],

    otherState:'Whatever',
    showPersons:false
  }


  nameChangeHandler=(event, id)=>{
    const personIndex= this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    //Alternative
    // const person =Object.assign({},this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons =[...this.state.persons];
    persons[personIndex]=person;



    this.setState({
      persons:persons
    })
  }

  deletePersonHandler =(personIndex)=>{
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }

  togglePersonsHandler=()=>{
    const doesShow= this.state.showPersons;
      this.setState({
        showPersons: !doesShow
      });
 


  }

  render() {
    const anything={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor:'pointer',

    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>  
          {this.state.persons.map((person,index) =>{
            return <Person 
                name={person.name}
                click={()=> this.deletePersonHandler(index)}
                changed={(event)=>this.nameChangeHandler(event,person.id)}
                key={person.id}/>
          })}

          {/* <Person name={this.state.persons[0].name}/>
          <Person name={this.state.otherState} />
          <Person name={this.state.persons[1].name} changed={this.nameChangeHandler}/>
          <Person name={this.state.persons[2].name} click={this.switchNameHandler.bind(this,'What')}> and i am the Prettiest</Person> */}
        </div>
      );
      anything.backgroundColor="red";
    }

    let classes =[];

    if(this.state.persons.length <=2){
      classes.push('red'); //classes =['red]
    }
    if(this.state.persons.length <=1){
      classes.push('bold'); //classes =['red','bold']
    }

    return (
      <div className="App">
        <h1>This is a Heading </h1>
        <p className={classes.join(' ')} >This is really working!</p>
        <button 
            style={anything}
            onClick={this.togglePersonsHandler}>Switch Name</button>

      {persons}
      </div>
    );

    //return React.createElement('div',{ className: 'App'}, React.createElement('h1',null, 'im a React App!!'));
  }
}

export default App;
