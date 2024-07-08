const shareButton = document.getElementById('share-Option')
const mailButton  = document.getElementById('mail-Option')
const callButton  = document.getElementById('call-Option')


document.addEventListener('DOMContentLoaded',function(){
	const shareForm = `
			<div class="sharebox" id="shareBox">
			<i class="fa-solid fa-xmark exit" style="font-size: 50px;" id="closeShareBox"></i>
				<div class="share-option"  >
					<li>
						<a href="#">
							<i class="fa-brands fa-whatsapp" style="font-size: 80px;"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fa-brands fa-instagram" style="font-size: 80px;"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fa-brands fa-facebook" style="font-size: 80px;"></i>
						</a>
					</li>
				</div>
			</div>
	`;
    document.body.insertAdjacentHTML('beforeend', shareForm);

	const closeShareBox = document.getElementById('closeShareBox');
	const shareBox      = document.getElementById('shareBox')
	function showShareBox() {
        shareBox.style.display = 'block';
		console.log("right")
    }

    function hideShareBox() {
        shareBox.style.display = 'none';
    }

    shareButton.addEventListener('click', showShareBox);

    closeShareBox.addEventListener('click', hideShareBox);
})



document.addEventListener('DOMContentLoaded', function () {
    const mailForm = `
        <div class="popup-form" id="mailBox">
            <i class="fa-solid fa-xmark exit" style="font-size: 50px;" id="closeMailBox"></i>
            <form id="contactForm">
                <div class="creat-formjs">
					<div class="contact-detail">
				<div class="comtact-me">
					<div class="email">
						<label for="">To</label>
						<br>
						<a href="mailto:kanishkraj600@gmail.com">kanishkraj600@gmail.com</a>
					</div>
				</div>
				</div>
				<div class="creat-form">
					<div class="name-phone">
						<div class="name">
							<input type="text" placeholder="Subject">
						</div>
					</div>
	
					<div class="email-text-sub">
						<div class="email">
							<input type="email" required placeholder="Email">
						</div>
						<div class="message">
							<textarea required placeholder="Message" rows="4" cols="50"></textarea>
						</div>
						<div class="sub">
							<button>Submit</button>
						</div>
					</div>
				</div>
				</div>
			</div>
            </form>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', mailForm);
    const mailBox = document.getElementById('mailBox');
    const closeMailBox = document.getElementById('closeMailBox');
    function showMilBox() {
        mailBox.style.display = 'block';
    }
    function hideMilBox() {
        mailBox.style.display = 'none';
    }
    mailButton.addEventListener('click', showMilBox);
    closeMailBox.addEventListener('click', hideMilBox);
});

document.addEventListener('DOMContentLoaded',function(){
	const callForm = `
	<div class="call" id="callBox">
            <i class="fa-solid fa-xmark exit" style="font-size: 50px;" id="closeCallBox"></i>
		<div class="call-to">
			<label for="">Call</label>
			<br>
			<a href="tel:+91 86511 99005">+91 86511 99005</a>
		</div>
	 </div>
	`;
	document.body.insertAdjacentHTML('beforeend',callForm)
	const callBox = document.getElementById('callBox')
    const closeCallBox = document.getElementById('closeCallBox');

	function showCallBox() {
        callBox.style.display = 'block';
		console.log('right')
    }
    function hideCallBox() {
        callBox.style.display = 'none';
    }
    callButton.addEventListener('click', showCallBox);
    closeCallBox.addEventListener('click', hideCallBox);

});