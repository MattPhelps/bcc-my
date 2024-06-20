// hooks/useSignupForm.ts
import { useState } from "react";
import { signIn } from "next-auth/react";
import SanitizeInputs from "@/utils/sanitizeInputs";

interface UserData {
  name: string;
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  name?: string;
  password?: string;
  data?: string;
}

const useSignupForm = () => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
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
    const sanitizedName = userData.name.toLowerCase();
    const sanitizedEmail = userData.email.toLowerCase();
    const sanitizedPassword = userData.password.trim();
    const errors = {};
    SanitizeInputs({
      email: sanitizedEmail,
      name: sanitizedName,
      password: sanitizedPassword,
      errors,
    });

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setLoading(false);
      return;
    }
    try {
      const response = await fetch("/api/register-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to register user");
      }

      const data = await response.json();
      if (data.success) {
        // Sign the user in automatically after registration
        const result = await signIn("credentials", {
          redirect: true,
          email: userData.email,
          password: userData.password,
        });

        if (result?.error) {
          // console.error("Error signing in:", result.error);
          setErrors({
            data: "Registration succeeded, but failed to sign in. Please log in manually.",
          });
        } 
      } else {
        setErrors({ data: data.error || "Registration failed" });
      }
    } catch (error) {
      // console.error('Error registering user:', error);
      setErrors({ data: error.message || "An error occurred. Please try again later." });
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

export default useSignupForm;
