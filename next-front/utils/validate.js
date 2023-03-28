//takes error object and exceptions array 
//if error in error object is not in exceptions array return false, else true 
export default function validate(errorObj, exceptions){
  for (let error in errorObj){
    if (errorObj[error] && !exceptions.includes(error)){
      return false
    }
  }
  return true
}