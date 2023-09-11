
		const paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
    e.preventDefault()
	let fullname = document.getElementById("full-name").value;
	let email = document.getElementById("email-address").value;
	let phonenumber = document.getElementById("phonenumber").value
  let handler = PaystackPop.setup({
    key: 'pk_test_1db996ca9c92eb22d291b838b1646fb9171d806a', // Replace with your public key
    first_name: fullname,
    email: email,
    amount: document.getElementById("amount").value * 100,
    phone: phonenumber,
    ref: 'IIPPSA'+Math.floor((Math.random() * 1000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      let timerInterval
      Swal.fire({
        title: 'Cancelled Payment?',
        html: 'Payment will be cancelled in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
    },
    callback: function(response){
      window.location = "dashboard.php?reference="+ response.reference;
      let message = 'Reference: '+ "  "+ response.reference;
      let reference = response.reference;
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Payment successful' + "<br>" +  message 
        
      })
	  var formData = {fullname:fullname, email:email, phonenumber:phonenumber, amount:amount, reference:reference }; 
	  $.ajax({
		   url:"localhost/icon-academy-1/connect-dashboard.php",
		   type: "GET",
		   data: formData,
		   success: function (response)
		   {
   
		   }
		 })
    }
  });
  
 
  handler.openIframe();
}