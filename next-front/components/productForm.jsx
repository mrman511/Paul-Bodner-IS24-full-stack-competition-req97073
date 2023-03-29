import { useState, useEffect } from "react"
import saveProduct from "@/utils/saveProduct"
import validate from "@/utils/validate"

export default function ProductForm({ styles, developers , product }){
  const [selectedDevelopers, setSelectedDevelopers]=useState(product ? product.developers : []);
  const [error, setError] = useState({});

  const parsedDevelopers = developers.map((developer, i) => {
    if (!selectedDevelopers.includes(developer)){
      return (
        <li key={ `developer${i}` } className={ styles.developer } onClick={(e) => { addSelectedDeveloper(e, developer ) }}>
          { developer }
        </li>
      );
    }
  });

  const parsedSelectedDevelopers = selectedDevelopers ? selectedDevelopers.map((developer, i) => {
    return (
      <li key={ `selecteddeveloper${i}` } className={ styles.developer } onClick={(e) => { removeSelectedDeveloper(e, developer ) }}>
        { developer }
      </li>
    );
  }) : <></> ;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorObj = error;

    if (selectedDevelopers.length === 0){
      errorObj.min_devs= 'Please Select between 1 and 5 developers';
    } else {
      errorObj.min_devs = undefined;
    }

    if (validate(errorObj, ['max_devs'])){
      const productObj = {
        id: product ? product.id  : undefined,
        start_date: product ? product.start_date  : undefined,
        title: e.target.title.value,
        owner: e.target.owner.value,
        scrum_master: e.target.scrum_master.value,
        methodology: e.target.methodology.value,
        developers: selectedDevelopers
      };

      saveProduct(productObj, { id: productObj.id });
    } else {
      setError(errorObj)
    }
  }

  useEffect(() => {
    if (selectedDevelopers){
      if (!error.max_devs && selectedDevelopers.length === 5){
        setError({...error, max_devs: 'Maximum number of 5 developers per project reached'});
      } else if ( error.max_devs && selectedDevelopers.length < 5) {
        setError({...error, max_devs: undefined});
      }
    }
  })

  return (
    <form className={ styles.form } onSubmit={(e)=>{ handleSubmit(e) }}>
      <div>
        <label htmlFor="title">title: </label>
        <input type="text" id="title" name='title' defaultValue={ product ? product.title : '' } required/>
      </div>
      <div>
        <label htmlFor="owner">owner: </label>
        <input type="text" id="owner" name='owner' defaultValue={ product ? product.owner : '' } required/>
      </div>
      { error.max_devs && <p>{ error.max_devs }</p> }
      { error.min_devs && <p>{ error.min_devs }</p> }

      <div className={ styles.developers }>
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
      </div>

      <div>
        <label htmlFor="scrum master">scrum master: </label>
        <input type="text" id="scrum_master" name='scrum_master' defaultValue={ product ? product.scrum_master : '' } required/>
      </div>
      <div>
        <label htmlFor="methodology">methodology: </label>
        <select id="methodology" name='methodology' defaultValue={ product ? product.methodology : '' }>
          <option value="Agile">Agile</option>
          <option value="Waterfall">Waterfall</option>
        </select>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}