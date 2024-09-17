import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../store/Auth";

export const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    answer: "",
  });

  const [errors, setErrors] = useState({});
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:7000/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const responseData = await response.json();

        alert("Registration successful");
        storeTokenInLS(responseData.token);

        setUser({
          name: "",
          email: "",
          phone: "",
          password: "",
          address: "",
          answer: "",
        });

        setErrors({});
        navigate("/login");
      } else {
        const responseData = await response.json();
        if (responseData.errors) {
          // Format the errors from the server response
          const formattedErrors = responseData.errors.reduce((acc, err) => {
            acc[err.path] = err.message;
            return acc;
          }, {});
          setErrors(formattedErrors);
          console.log(responseData.errors)
          alert(responseData.errors)
        }
      }
    } catch (error) {
      alert("An error occurred");
      console.error("Error:", error);
    }
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image reg-img">
              <img
                src="/images/register.png"
                alt="a nurse with a cute look"
                width="400"
                height="500"
              />
            </div>
            {/* Registration form */}
            <div className="registration-form">
              <h1 className="main-heading mb-3">Registration Form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInput}
                    placeholder="Name"
                  />
                  {errors.name && <p className="error-text">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="Email"
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleInput}
                    placeholder="Phone"
                  />
                  {errors.phone && <p className="error-text">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="Password"
                  />
                  {errors.password && <p className="error-text">{errors.password}</p>}
                </div>
                <div>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleInput}
                    placeholder="Address"
                  />
                  {errors.address && <p className="error-text">{errors.address}</p>}
                </div>
                <div>
                  <label htmlFor="answer">Answer</label>
                  <input
                    type="text"
                    name="answer"
                    value={user.answer}
                    onChange={handleInput}
                    placeholder="Answer"
                  />
                  {errors.answer && <p className="error-text">{errors.answer}</p>}
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
