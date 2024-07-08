interface Errors {
  email?: string;
  name?: string;
  password?: string;
}

interface SanitizeInputsProps {
    email?: string;
    name?: string;
    password?: string;
    errors: Errors;
  }

  const SanitizeInputs = ({ email, name, password, errors }: SanitizeInputsProps) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameRegex = /^[a-zA-Z\s]{2,50}$/; // Allow only letters and spaces, between 2 and 50 characters
  const passwordRegex = /^(?=.*\d)(?=.*[a-zåäö])(?=.*[A-ZÅÄÖ])[a-zA-Z0-9åäöÅÄÖ!@#$%^&*]{8,}$/;
 
  // Validate email input
  if (email !== undefined) {
    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email address is incorrect";
    }
  }

  // Validate name input
  if (name !== undefined) {
    if (!name) {
      errors.name = "Name is required";
    } else if (!nameRegex.test(name)) {
      errors.name =
        "Name must contain only letters and spaces, between 2 and 50 characters";
    }
  }

  // Validate password input
  if (password !== undefined) {
    if (!password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      errors.password =
        "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number.";
    }
  }
};

export default SanitizeInputs;
