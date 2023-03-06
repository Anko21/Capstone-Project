import React from "react";
import '../App.css'
import FooterWhite from './FooterWhite.js'

function LoginSection(){
    return (
        <div className="loginpage">
            <div className="loginform">
                <form >
                    <div className="logindetails">
                        <section className="logintitle">
                            <h1>Little Lemon</h1>
                            <p>Chicago</p>
                        </section>
                        <div className="logininfo">
                            <h2>Sign in to collect points</h2>
                                <div className="logincouples">
                                    <div className="loginfield">
                                        <input type="text" id="firstname" name="firstname" placeholder="*First Name" required/><br/>
                                        <label for="firstname">First name is required</label><br/>
                                    </div>
                                    <div className="loginfield">
                                        <input type="text" id="lastname" name="lastname" placeholder="*Last Name" required/><br/>
                                        <label for="lastname">Last name is required</label><br/>
                                    </div>
                                </div>
                                <div className="logincouples">
                                    <div className="loginfield">
                                        <input type="tel" id="phone" name="phone" placeholder="*Phone number" inputmode="numeric" required/><br/>
                                        <label for="phone">Phone number is required</label><br/>
                                    </div>
                                    <div className="loginfield">
                                        <input type="email" id="email" name="email" placeholder="*Email" required/><br/>
                                        <label for="email">Email is required</label><br/>
                                    </div>
                                </div>
                            <input type="password" id="password" name="password" placeholder="*Password" required/><br/>
                            <label for="password">6 - characters is all you need</label><br/>
                            <textarea
                                name="comments"
                                rows="4"
                                cols="40"
                                maxlength={250}
                                placeholder="*Add a special request(optional)">
                            </textarea>
                        </div>
                    </div>
                    <div><button className="loginbutton">Continue</button></div>
                </form>
            </div>
            <div className="footeWhite"><FooterWhite/></div>
        </div>
)}

export default LoginSection;