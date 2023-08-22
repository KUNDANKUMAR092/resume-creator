import './Login.css';
function Login() {
    return ( 
        <>
            <div className='login_singup_main_container'>
                <div className='login_signup_box'>
                <div className="login_form">
                        <div className='form_heding'><h2>Login WIth Google</h2></div>
                        <form>
                            <div className='google_btn_cont'>
                                <button class="button">
                                    <img src="https://img.icons8.com/color/48/undefined/google-logo.png" alt="google logo" class="img" />
                                    <p>Sign in with Google</p>
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* <div className="login_form">
                        <div className='form_heding'><h2>Login</h2></div>
                        <form>
                            <div className="input-container">
                                <label for="Email" className="jss89">Email Id</label>
                                <input placeholder="John@doe.com" type="email" name="Email" className="form-input jss87" />
                            </div>
                            <div className="input-container">
                                <label for="Name" className="jss89">Password</label>
                                <input placeholder="**********" type="password" name="password" className="form-input jss87" />
                            </div>
                            <div className='condition_cont'>
                                <div className='forgot_pass_text'>
                                    <a href=''>Forgot Password</a>
                                </div>
                            </div>
                            <div className="submit-btn">
                                <button type="submit" className="jss92">
                                    <p>Submit</p>
                                    <div className="submit-icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1569683742680" viewBox="0 0 1024 1024" version="1.1" className="send-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                            <defs></defs>
                                            <path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            
                            <div className='or_sec'><p>or</p></div>
                            <div className='google_btn_cont'>
                                <button class="button">
                                    <img src="https://img.icons8.com/color/48/undefined/google-logo.png" alt="google logo" class="img" />
                                    <p>Sign in with Google</p>
                                </button>
                            </div>
                            <div class="signup_link">
                                <span>Not a member? </span> <a href=""> Signup now</a>
                            </div>
                        </form>
                    </div>

                    <div className="login_form">
                        <div className='form_heding'><h2>Sign Up</h2></div>
                        <form>
                            <div className="input-container">
                                <label for="Email" className="jss89">Email Id</label>
                                <input placeholder="John@doe.com" type="email" name="Email" className="form-input jss87" />
                            </div>
                            <div className="input-container">
                                <label for="Name" className="jss89">Password</label>
                                <input placeholder="**********" type="password" name="password" className="form-input jss87" />
                            </div>
                            <div className="input-container">
                                <label for="Name" className="jss89">Conform Password</label>
                                <input placeholder="**********" type="password" name="conformpassword" className="form-input jss87" />
                            </div>
                            <div className="submit-btn">
                                <button type="submit" className="jss92">
                                    <p>Submit</p>
                                    <div className="submit-icon">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1569683742680" viewBox="0 0 1024 1024" version="1.1" className="send-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                                            <defs></defs>
                                            <path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            
                            <div class="signup_link">
                                <span>Allready member? </span> <a href=""> Login</a>
                            </div>
                        </form>
                    </div> */}
                </div>
            </div>
        </>
     );
}

export default Login;