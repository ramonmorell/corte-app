const sendMail = ()=>{
	return window.Email.send({
    	SecureToken : "e040beee-6e35-45a5-b2cf-ac0e563bc502",
    	To : 'ramonmgomis@gmail.com',
    	From : "you@isp.com",
    	Subject : "This is the subject",
    	Body : "And this is the body"
	});
}

export default sendMail;

