import { useState } from "react"

export default function ProductForm({ styles, developers , setDevelopers }){
  const [selectedDevelopers, setSelectedDevelopers]=useState([])
  const parsedDevelopers = developers.map((developer, i) => {
    if (!selectedDevelopers.includes(developer)){
      return (
        <li key={ `developer${i}` } onClick={(e) => { addSelectedDeveloper(e, developer ) }}>
          { developer }
        </li>
      );
    }
  })
  const parsedSelectedDevelopers = selectedDevelopers ? selectedDevelopers.map((developer, i) => {
    return (
      <li key={ `selecteddeveloper${i}` } onClick={(e) => { removeSelectedDeveloper(e, developer ) }}>
        { developer }
      </li>
    );
  }) : <></>

  const addSelectedDeveloper = (e, name) => {
    e.preventDefault()
    console.log('ADD SELECTED::: NAME: ', name, ' selected: ', selectedDevelopers)
    setSelectedDevelopers(prev => [...prev, name])
  }

  const removeSelectedDeveloper = (e, name) => {
    e.preventDefault()
    setSelectedDevelopers(prev => {
      return [...prev].filter(item => item != name)
    })
  }

  const handleSubmit = (e) => {
    e.preventdefault()
  }

  return (
    <form onSubmit={(e)=>{ handleSubmit(e) }}>
      <div>
        <label htmlFor="title">title: </label>
        <input type="text" name='title'/>
      </div>
      <div>
        <label htmlFor="owner">owner: </label>
        <input type="text" name='owner'/>
      </div>
      <div>
        <h3>Developers</h3>
        <ul>
          { parsedDevelopers }
        </ul>
      </div>
      <div>
        <h3>SelectedDevelopers</h3>
        <ul>
          { parsedSelectedDevelopers }
        </ul>
      </div>

      <div>
        <label htmlFor="scrum master">scrum master: </label>
        <input type="text" name='scrum master'/>
      </div>
      <div>
        <label htmlFor="methodology">methodology: </label>
        <input type="text" name='methodology'/>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}