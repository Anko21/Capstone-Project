import React from "react";
import '../App.css'
import FooterWhite from './FooterWhite.js'
import { useState } from "react";

function LoginSection(){
    const [user,setUser]=useState(
        
        {firstname:"",
        lastname:"",
        phone:"",
        email:"",
        password:"",
        comments:"",
        })
console.log(user,setUser);
    const [focused,setFocused]=useState(false);

    const handleChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value})
     };


     const handleSubmit=(e)=>{
        e.preventDefault();
        //alert(JSON.stringify(user, null, 2));
console.log('Form submitted')
        setUser({firstname:"",
        lastname:"",
        phone:"",
        email:"",
        password:"",
        comments:"",})
     }
     const handleBlur=(e)=>{
        setFocused(true);
     }

     const validate = (user) => {
        const errors = {};

        if (!user.firstname) {
          errors.firstname = 'Required';
        }
        if (!user.lastname) {
          errors.lastname = 'Required';
        }
        if (!user.phone) {
            errors.phone = 'Required';
          } else if (!/^[0-9.+]/i.test(user.phone)) {
            errors.phone = 'Invalid phone';
          }
        if (!user.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
          errors.email = 'Invalid email address';
        }
        if (!user.password) {
            errors.password = 'Required';
          } else if (!/^(?=.*[0-9])(?=.*[a-zA-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/i.test(user.password)) {
            errors.password = 'Invalid phone';
          }

        return errors;
      };

    return (
        <div className="loginpage">
            <div className="loginform">
                <form onSubmit={handleSubmit}> {/* maybe needs to be wraped in a fieldset */}
                    <div className="logindetails">
                        <section className="logintitle">
                            <h1>Little Lemon</h1>
                            <p>Chicago</p>
                        </section>
                        <div className="logininfo">
                            <h2>Sign in to collect points</h2>
                                <div className="logincouples">
                                    <div className="loginfield">
                                        {/* <span>{validate.errors.firstname ? <div>{validate.errors.firstname}</div> : null}</span> */}
                                        <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="*First Name"
                                        required
                                        value={user.firstname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        focused={focused.toString()}
                                        /><br/>
                                        <label htmlFor="firstname">First name is required</label>
                                    </div>
                                    <div className="loginfield">
                                        <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        placeholder="*Last Name"
                                        required
                                        value={user.lastname}
                                        onChange={handleChange}
                                        /><br/>
                                        <label htmlFor="lastname">Last name is required</label><br/>
                                    </div>
                                </div>
                                <div className="logincouples">
                                    <div className="loginfield">
                                        <input type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="*Phone number"
                                        pattern="
                                        [+][0-9]{10,16}|
                                        [0-9]{10,16}|
                                        [+][0-9]{2}[(][0-9]{1}[)][0-9]{10,16}
                                        "
                                        required
                                        value={user.phone}
                                        onChange={handleChange}
                                        />
                                        <br/>
                                        <label htmlFor="phone">Phone number is required</label><br/>
                                    </div>
                                    <div className="loginfield">
                                    <span>{validate}</span>
                                        <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="*Email"
                                        value={user.email}
                                        onChange={handleChange}
                                        required
                                        onBlur={handleBlur}
                                        /><br/>
                                        <label htmlFor="email">Email is required</label><br/>
                                    </div>
                                </div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="*Password"
                                minLength={6}
                                pattern="^(?=.*[0-9])(?=.*[a-zA-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                                required
                                value={user.password}
                                onChange={handleChange}
                                /><br/>
                            <label htmlFor="password">6 - characters is all you need</label><br/>
                            <textarea
                                name="comments"
                                rows="4"
                                cols="40"
                                maxlength={250}
                                placeholder="*Add a special request(optional)"
                                value={user.comments}
                                onChange={handleChange}
                                
                                >
                            </textarea>
                        </div>
                    </div>
                    <div><button type="submit" className="loginbutton" disabled={!user}>Continue</button></div>
                </form>
            </div>
            <div className="footeWhite"><FooterWhite/></div>
        </div>
)}

export default LoginSection;


/*disabled submit button*/
/* min max/number etc preriquisite*/
/*to connect the labl with the input id=htmlFor*/
/*handleChange 22:The reason why this works with the brackets notation is that it allows me to set the value of the E target 
named dynamically. In other words, it allows me to set it as goal, If the user typed into the input with the name 
attributes set to Goal or to set it as By, If the user typed into the input with the name attributes set to By. 
Second, I declare a submit handler function which also accepts the event attribute. */