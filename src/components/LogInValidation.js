function validation(values) {
    let errors = {};
  
    // Regular expression for a simple email pattern
    const usernamepattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  
    // Regular expression for a password pattern (example: at least 8 characters)
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
    if (!values.username) {
      errors.username = "warning";
    } else if (!usernamepattern.test(values.username)) {
      errors.username = "Incorrect Username";
    } else {
      errors.username = "";
    }
  
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordPattern.test(values.password)) {
      errors.password = "Incorrent Password";
    } else {
      errors.password = "";
    }
  
    return errors;
  }
  
  export default validation;
  