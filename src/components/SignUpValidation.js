function validation(values) {
    let errors = {};
  
    // Regular expression for a simple email pattern
    const usernamepattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
  
    // Regular expression for a password pattern (example: at least 8 characters)
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!values.username) {
      errors.username = "Username is required";
    } else if (!usernamepattern.test(values.username)) {
      errors.username = "Username with at least 8 characters and at least 1 number";
    } else {
      errors.username = "";
    }
  
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordPattern.test(values.password)) {
      errors.password = "Password must be at least 8 characters and include at least one letter and one number";
    } else {
      errors.password = "";
    }
  
    return errors;
  }
  
  export default validation;
  