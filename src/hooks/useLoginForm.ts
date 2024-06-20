import { useState } from "react";
import { signIn } from "next-auth/react";
import SanitizeInputs from "@/utils/sanitizeInputs";

interface UserData {
    email: string;
    password: string;
  }
  
  interface Errors {
    email?: string;
    password?: string;
    data?: string;
  }

const useLoginForm = () => {
    const [userData, setUserData] = useState<UserData>({
        email: "",
        password: "",
      });
      const [errors, setErrors] = useState<Errors>({});
      const [loading, setLoading] = useState(false);
    
      const onHandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrors({});
        setUserData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});
         // // Sanitize username and password
         const sanitizedEmail = userData.email.toLowerCase();
         const sanitizedPassword = userData.password.trim();
         const errors = {};
         SanitizeInputs({ email: sanitizedEmail, password: sanitizedPassword, errors });
     
         if (Object.keys(errors).length > 0) {
           setErrors(errors);
           setLoading(false);
           return;
         }
         try {
          const result = await signIn('credentials', {
            redirect: false,
            email: userData.email,
            password: userData.password,
          });
      
          if (result?.error) {
            // console.error('Error signing in:', result.error);
            setErrors({ data: 'Failed to sign in. Please check your email and password.' });
          }
        } catch (error) {
          // console.error('Error signing in:', error);
          setErrors({ data: 'An error occurred. Please try again later.' });
        } finally {
          setLoading(false);
        }
      };
    
      return {
        userData,
        errors,
        loading,
        onHandleInput,
        handleSubmit,
      };
    };
    
    export default useLoginForm;
