import React, { useState,useEffect } from "react";import "../styles/signup.css";
import API from '../API';
import question from '../assets/all-images/slider-img/question.jpg';
import Swal from 'sweetalert2';
import Header from "../components/Header/Header";

const Signup = () => {
    const [ name1, setname1] = useState("");
    const [ name2, setname2] = useState("");
    const [ email, setemail] = useState("");
    const [ password, setpassword] = useState("");
    const [ newpassword, setnewpassword] = useState("");
    const [ phno, setphno] = useState("");
    const [ day, setday] = useState("");
    const [ month, setmonth] = useState("");
    const [ year, setyear] = useState("");
    const [ radio, setradio] = useState("");

    useEffect(() => {
        refreshSignup();
    
      }, []);

    
      const refreshSignup = () => {
        API.get("/")
          .then((res) => {
            setname1("");
            setname2("");
            setemail("");
            setphno("");
            setpassword("");
            setnewpassword("");
            setday("");
            setmonth("");
            setyear("");
            setradio("");
          })
          .catch(console.error);
    
        }; 


        function popup(){
            Swal.fire({
              position: 'top-center',
              title: 'Booked Successfully',
              text: '',
              icon: 'success',
              confirmButtonText: false,
              timer:2900
            })
          }


    const onSubmit = (e) => {
        e.preventDefault();
        let item = { name1, name2, email, password, newpassword, phno, day, month, year, radio };
        API.post("/staff/", item).then(() => popup(), refreshSignup()
            // console.log("result", res)
            // refresh()}
        );
    };

    const submitHandler = (event) => {
        event.preventDefault();
      };


    return (
      <div>
          <Header />
        <body className='body'>
            <div id="Outer">
                <div id="Inner">
                    <div class="fld" id="frm">
                        <form action="" method="post" />
                        <div id="header" style={{ marginTop: '-12px' }}>
                            <h2>Sign up</h2>
                        </div>
                        <div class="h2" style={{ marginTop: '-12px' }}>
                            <p>Its quick and easy.</p>
                        </div>
                        <hr />
                        <div class="input">
                            <input id="name1" name="name1" type="text" placeholder="First name" style={{ marginRight: '5px' }} value={name1} onChange={(e) => setname1(e.target.value)} required />

                            <input id="name2" name="name2" type="text" placeholder="Last name" value={name2} onChange={(e) => setname2(e.target.value)} required />
                        </div>
                    </div>
                    <div class="input1">
                        <input id="email" name="email" type="email" placeholder="Email addresss" style={{ backgroundColor: 'rgb(222, 239, 249)' }} value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div class="input1">
                        <input id="ph" name="phno" type="number" placeholder="Phone number" value={phno} onChange={(e) => setphno(e.target.value)} />
                    </div>
                    <div class="input1">
                        <input id="pass1" name="password" type="password" placeholder="New password" value={password} onChange={(e) => setpassword(e.target.value)}/>
                    </div>
                    <div class="input1">
                        <input id="pass2" name="password2" type="password" placeholder="Confirm password" value={newpassword} onChange={(e) => setnewpassword(e.target.value)} />
                    </div>
                    <div class="input2">
                        <p class="p1">Date of birth<img src={question} width="15px"></img></p>
                    </div>
                    <div class="input3">
                        <select class="input31" name="day" id="day" value={day} onChange={(e) => setday(e.target.value)} required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        <select class="input32" name="month" id="month" value={month} onChange={(e) => setmonth(e.target.value)}>
                            <option value="jan">January</option>
                            <option value="feb">February</option>
                            <option value="mar">March</option>
                            <option value="apr">April</option>
                            <option value="may">May</option>
                            <option value="jun">June</option>
                            <option value="jul">July</option>
                            <option value="aug">August</option>
                            <option value="sep">September</option>
                            <option value="oct">October</option>
                            <option value="nov">November</option>
                            <option value="dec">December</option>
                        </select>
                        <select class="input33" name="year" id="year" value={year} onChange={(e) => setyear(e.target.value)}>
                            <option value="">2022</option>
                            <option value="">2021</option>
                            <option value="">2020</option>
                            <option value="">2019</option>
                            <option value="">2018</option>
                            <option value="">2017</option>
                            <option value="">2016</option>
                            <option value="">2015</option>
                            <option value="">2014</option>
                            <option value="">2013</option>
                            <option value="">2012</option>
                            <option value="">2011</option>
                            <option value="">2010</option>
                            <option value="">2009</option>
                            <option value="">2008</option>
                            <option value="">2007</option>
                            <option value="">2006</option>
                            <option value="">2005</option>
                            <option value="">2004</option>
                            <option value="">2003</option>
                            <option value="">2002</option>
                            <option value="">2001</option>
                            <option value="">2000</option>
                            <option value="">1999</option>
                            <option value="">1998</option>
                            <option value="">1997</option>
                            <option value="">1996</option>
                            <option value="">1995</option>
                            <option value="">1995</option>
                            <option value="">1994</option>
                            <option value="">1993</option>
                            <option value="">1992</option>
                            <option value="">1991</option>
                        </select>
                    </div>
                    <div class="input2">
                        <p class="p1">Gender<img src={question} width="15px"></img></p>
                    </div>
                    <div class="input4">
                        <button style={{ width: '100%' }} />
                        <label for="html" >Female</label><input type="radio" name="radio" id="radio" value="female" checked={radio === "female"} onChange={(e) => setradio(e.target.value)} style={{ marginRight: '30px' }}  required />
                        <label for="html">Male</label><input type="radio" name="radio" id="radio" value="male" checked={radio === "male"} onChange={(e) => setradio(e.target.value)}  style={{ marginRight: '30px' }} />
                        <label for="html">Custom</label><input type="radio" name="radio" id="radio" value="custom" checked={radio === "custom"} onChange={(e) => setradio(e.target.value)} style={{ marginRight: '30px' }} />
                    </div>
                    {/* <div class="input7">
                                <button id="signin" onclick="window.location.href='../index'" style={{backgroundColor: 'rgb(8, 186, 61)',color:'white'}}>Sign in</button>
                            </div> */}
                    <div class="input5">
                        <button id="signup" onClick={onSubmit} name="signup" type="submit" style={{ backgroundColor: 'rgb(20, 66, 218)', color: 'white' }}>Sign up</button>
                    </div>
                </div>
            </div>
        </body>
      </div>
    )
}

export default Signup