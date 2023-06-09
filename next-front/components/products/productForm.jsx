import { useState, useEffect } from "react"
import DatePicker from "react-datepicker";


import styles from "../../styles/Home.module.css";

export default function ProductForm({ developers, scrumMasters, product, handleSubmit, error, setError, startDate, setStartDate }){
  const [selectedDevelopers, setSelectedDevelopers]=useState(product ? product.developers : []);

  //list item components for developers to be selected
  const parsedDevelopers = developers.map((developer, i) => {
    if (!selectedDevelopers.includes(developer)){
      return (
        <li key={ `developer${i}` } className={ [styles.developer, styles.listLink ].join(' ') } onClick={(e) => { addSelectedDeveloper(e, developer ) }}>
          { developer }
        </li>
      );
    }
  });
  //list item components for selected developrs
  const parsedSelectedDevelopers = selectedDevelopers ? selectedDevelopers.map((developer, i) => {
    return (
      <li key={ `selecteddeveloper${i}` } className={ [styles.developer, styles.listLink ].join(' ') } onClick={(e) => { removeSelectedDeveloper(e, developer ) }}>
        { developer }
      </li>
    );
  }) : <></> ;

  //option components for scrum_masters
  const parsedScrumMasters = scrumMasters ? scrumMasters.map((name, i) => {
    return (
      <option key={ `scrumMaster${i}` } value={ name }>{ name }</option>
    );
  }) : '';


  const addSelectedDeveloper = (e, name) => {
    e.preventDefault();
    if (selectedDevelopers.length < 5){
      setSelectedDevelopers(prev => [...prev, name]);
    }
  };

  const removeSelectedDeveloper = (e, name) => {
    e.preventDefault();
    setSelectedDevelopers(prev => {
      return [...prev].filter(item => item != name);
    })
  };

  

  useEffect(() => {
    //set and remove error for max devs reached
    if (selectedDevelopers){
      if (!error.max_devs && selectedDevelopers.length === 5){
        setError({...error, max_devs: 'Maximum number of 5 developers per project reached'});
      } else if ( error.max_devs && selectedDevelopers.length < 5) {
        setError({...error, max_devs: undefined});
      }
    }
  })

  return (
    <form className={ styles.form } onSubmit={(e)=>{ handleSubmit(e, selectedDevelopers) }}>
      <div>
        <label htmlFor="title">title: </label>
        <input type="text" id="title" name='title' defaultValue={ product ? product.title : '' } required/>
      </div>
      <div>
        <label htmlFor="owner">owner: </label>
        <input type="text" id="owner" name='owner' defaultValue={ product ? product.owner : '' } required/>
      </div>
      { error.max_devs && <p className={ styles.error }>{ error.max_devs }</p> }
      { error.min_devs && <p className={ styles.error }>{ error.min_devs }</p> }

      <div className={ styles.developers }>
        <div>
          <h3>Developers</h3>
          <p><strong>(1-5 Developers)</strong></p>
          <ul>
            { parsedDevelopers }
          </ul>
        </div>
        <div>
          <h3>SelectedDevelopers</h3>
          <p><strong>(Max 5 Developers)</strong></p>
          <ul>
            { parsedSelectedDevelopers }
          </ul>
        </div>
      </div>

      <div>
        <label htmlFor="scrum master">scrum master: </label>
        <select id="scrum_master" name='scrum_master' defaultValue={ product ? product.scrum_master : '' } required>
          { parsedScrumMasters }
        </select>
      </div>
      <div>
        <label htmlFor="methodology">methodology: </label>
        <select id="methodology" name='methodology' defaultValue={ product ? product.methodology : '' }>
          <option value="Agile">Agile</option>
          <option value="Waterfall">Waterfall</option>
        </select>
      </div>
       <div>
        <p>Start Date:</p>
       { !product && <DatePicker selected={ startDate } onChange={ (date)=>{ setStartDate(date) } }/> }
       { product && <p>{ `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}` }</p> }
      </div> 
      <input type="submit" value="Submit" />
    </form>
  );
}