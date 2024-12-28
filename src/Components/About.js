import React from 'react'
import UserClass from './UserClass'
import UserClass2 from './UserClass2'
import UserContext from './UserContext'

class About extends React.Component{
  constructor(props){
      super(props)

      console.log("parent const")
  }
componentDidMount(){
  console.log("parent mount")
}

  render(){
    console.log("parent Render")
    return (
      <div>
        <UserContext.Consumer>
          {(data)=> <h4>{data.logged}</h4>}
        </UserContext.Consumer>
        This is About Page
     {/* <UserClass name={"Aqib Malik"}/>    */}
     <UserClass2 />   
      </div>
    )
  }
}

export default About
