import React from "react";
import '../App.css'
import FooterWhite from './FooterWhite.js'

function PaymemtSection(){
    return (
        <div className="paymentpage">
            <div className="payment">
                <div className="payside">
                    <div className="paytitle">
                        <h1>Little Lemon</h1>
                        <p>Chicago</p>
                        <h3>Booking details</h3>
                    </div>
                    <fieldset>
                        <p>Date: 26/02/2023</p>
                        <p>Time: 20:00</p>
                        <p>Number of diners: 0-2</p>
                        <p>Ocassion: dinner</p>
                        <p>Seating option: Inside</p>
                    </fieldset>
                    <textarea
                    name="comments"
                    rows="5"
                    cols="10"
                    maxlength={250}
                    placeholder="Add any allergies/special request etc. regarding your booking"> 
                    </textarea>
                </div>
                <div className="payform">
                    <form >
                        <h3>Credit Card details</h3>
                        <div className="payfield">
                            <input type="text" id="cardnumber" name="cardnumber" placeholder="*Card Number" required/>
                            {/* //only number// */}
                            <label for="cardnumber">Card number is required</label>
                        </div>
                        <div className="payfield">
                            <input type="text" id="name" name="name" placeholder="*First Name/Last Name" required/>
                            <label for="name">CardHolder's name is required</label>
                        </div>
                        <div className="paycvv">
                            <div className="payfield">
                                <label for="expdate">Exp. Date</label>
                                <input type="date" id="expdate" name="expdate" placeholder="*MM/YY" required/>
                            </div>
                            <div className="payfield">
                                <label for="cvv">CVV</label>
                                <input type="text" id="cvv" name="cvv" placeholder="*###" required/>
                                 {/* //only number// */}
                            </div>
                        </div>
                        <div className="payconfirmation">
                            <div  className="payconf">
                                <label for="textconfirm">Send me booking confirmation via text</label>
                                <input type="checkbox" id="textconfirm" name="textconfirm" value="textconfirm"/>
                            </div>
                            <div className="payconf">
                                <label for="emailconfirm">Send me booking confirmation via email</label>
                                <input type="checkbox" id="emailconfirm" name="emailconfirm" value="emailconfirm"/>
                            </div>
                        </div>
                        <button>Reserve a table</button>
                    </form>
                </div>
            </div>
            <div className="footeWhite"><FooterWhite/></div>
        </div>
    )
}

export default PaymemtSection;