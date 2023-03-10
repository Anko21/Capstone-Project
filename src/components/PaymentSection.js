import React from "react";
import '../App.css'
import FooterWhite from './FooterWhite.js'

function PaymentSection(){

    return (
        <div className="paymentpage">
            <div className="payment">
                <div className="payside">
                    <div className="paytitle">
                        <h1>Little Lemon</h1>
                        <p>Chicago</p>
                        <h3>Booking details</h3>
                    </div>
                    <div className="payaddinfo">
                        <fieldset id="paybookingconf">
                            {/* boc shadow :inset 1px 1px 3px #3333 */}
                            <p>Date: 26/02/2023 <br/>
                            Time: 20:00<br/>
                            Number of diners: 0-2<br/>
                            Ocassion: dinner<br/>
                            </p>
                        </fieldset>
                        <textarea
                        name="comments"
                        rows="5"
                        cols="10"
                        maxLength={250}
                        placeholder="Add any allergies/special request etc. regarding your booking"> 
                        </textarea>
                    </div>
                </div>
                <div className="payform">
                    <form >
                        <h3>Credit Card details</h3>
                        <div className="payfield">
                            <input 
                            type="tel"
                            id="cardnumber"
                            name="cardnumber"
                            placeholder="xxxx xxxx xxxx xxxx"
                            maxLength="19"
                            autoComplete="cc-number"
                            required
                            inputMode="numeric"
                            />
                            <label htmFor="cardnumber">Card number is required</label>
                        </div>
                        <div className="payfield">
                            <input type="text" id="name" name="name" placeholder="*First Name/Last Name" required/>
                            <label htmFor="name">CardHolder's name is required</label>
                        </div>
                        <div className="paycvv">
                            <div className="payfield">
                                <label htmFor="expdate">Exp. Date</label>
                                <input type="date" id="expdate" name="expdate" placeholder="*MM/YY" required/>
                            </div>
                            <div className="payfield">
                                <label htmFor="cvv">CVV</label>
                                <input
                                type="tel"
                                id="cvv"
                                name="cvv"
                                placeholder="xxx"
                                maxLength="3"
                                autoComplete="cc-number"
                                required
                                />
                            </div>
                        </div>
                        <div className="payconfirmation">
                            <div  className="payconf">
                                <label htmFor="textconfirm">Send me booking confirmation via text</label>
                                <input type="checkbox" id="textconfirm" name="textconfirm" value="textconfirm"/>
                            </div>
                            <div className="payconf">
                                <label htmFor="emailconfirm">Send me booking confirmation via email</label>
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

export default PaymentSection;