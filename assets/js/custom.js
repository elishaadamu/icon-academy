(function($) {

	$(document).ready(function() {
	  $('body').addClass('js');
	  var $menu = $('#menu'),
	    $menulink = $('.menu-link');
	  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});});


	videoPopup();


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        550:{
	            items:2
	        },
	        750:{
	            items:3
	        },
	        1000:{
	            items:4
	        },
	        1200:{
	            items:5
	        }
	    }
	})


	$(".Modern-Slider").slick({
	    autoplay:true,
	    autoplaySpeed:10000,
	    speed:600,
	    slidesToShow:1,
	    slidesToScroll:1,
	    pauseOnHover:false,
	    dots:true,
	    pauseOnDotsHover:true,
	    cssEase:'fade',
	   // fade:true,
	    draggable:false,
	    prevArrow:'<button class="PrevArrow"></button>',
	    nextArrow:'<button class="NextArrow"></button>', 
	});


	$("div.features-post").hover(
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    },
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    }
	 );


	$( "#tabs" ).tabs();


	(function init() {
	  function getTimeRemaining(endtime) {
	    var t = Date.parse(endtime) - Date.parse(new Date());
	    var seconds = Math.floor((t / 1000) % 60);
	    var minutes = Math.floor((t / 1000 / 60) % 60);
	    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	    var days = Math.floor(t / (1000 * 60 * 60 * 24));
	    return {
	      'total': t,
	      'days': days,
	      'hours': hours,
	      'minutes': minutes,
	      'seconds': seconds
	    };
	  }
	  
	  function initializeClock(endtime){
	  var timeinterval = setInterval(function(){
	    var t = getTimeRemaining(endtime);
	    document.querySelector(".days > .value").innerText=t.days;
	    document.querySelector(".hours > .value").innerText=t.hours;
	    document.querySelector(".minutes > .value").innerText=t.minutes;
	    document.querySelector(".seconds > .value").innerText=t.seconds;
	    if(t.total<=0){
	      clearInterval(timeinterval);
	    }
	  },1000);
	}
	initializeClock(((new Date()).getFullYear()+1) + "/1/1")
	})()

})(jQuery);

        //according to loftblog tut
        $('.nav li:first').addClass('active');

        var showSection = function showSection(section, isAnimate) {
          var
          direction = section.replace(/#/, ''),
          reqSection = $('.section').filter('[data-section="' + direction + '"]'),
          reqSectionPos = reqSection.offset().top - 0;

          if (isAnimate) {
            $('body, html').animate({
              scrollTop: reqSectionPos },
            800);
          } else {
            $('body, html').scrollTop(reqSectionPos);
          }

        };

        var checkSection = function checkSection() {
          $('.section').each(function () {
            var
            $this = $(this),
            topEdge = $this.offset().top - 80,
            bottomEdge = topEdge + $this.height(),
            wScroll = $(window).scrollTop();
            if (topEdge < wScroll && bottomEdge > wScroll) {
              var
              currentId = $this.data('section'),
              reqLink = $('a').filter('[href*=\\#' + currentId + ']');
              reqLink.closest('li').addClass('active').
              siblings().removeClass('active');
            }
          });
        };

        $('.main-menu, .scroll-to-section').on('click', 'a', function (e) {
          if($(e.target).hasClass('external')) {
            return;
          }
          e.preventDefault();
          $('#menu').removeClass('active');
          showSection($(this).attr('href'), true);
        });

        $(window).scroll(function () {
          checkSection();
        });
		var currentTab = 0; // Current tab is set to be the first tab (0)
		showTab(currentTab); // Display the current tab
		
		function showTab(n) {
		  // This function will display the specified tab of the form...
		  var x = document.getElementsByClassName("tab");
		  x[n].style.display = "block";
		  //... and fix the Previous/Next buttons:
		  if (n == 0) {
			document.getElementById("prevBtn").style.display = "none";
		  } else {
			document.getElementById("prevBtn").style.display = "inline";
		  }
		  if (n == (x.length - 1)) {
			document.getElementById("nextBtn").style.display = "none";
			
		  } else {
			document.getElementById("nextBtn").innerHTML = "Next";
		  }
		  //... and run a function that will display the correct step indicator:
		  fixStepIndicator(n)
		}
		
		function nextPrev(n) {
		  // This function will figure out which tab to display
		  var x = document.getElementsByClassName("tab");
		  // Exit the function if any field in the current tab is invalid:
		  if (n == 1 && !validateForm()) return false;
		  // Hide the current tab:
		  x[currentTab].style.display = "none";
		  // Increase or decrease the current tab by 1:
		  currentTab = currentTab + n;
		  // if you have reached the end of the form...
		  if (currentTab >= x.length) {
			// ... the form gets submitted:
			document.getElementById("regForm").submit();
			return false;
		  }
		  // Otherwise, display the correct tab:
		  showTab(currentTab);
		}
		
		function validateForm() {
		  // This function deals with validation of the form fields
		  var x, y, i, valid = true;
		  x = document.getElementsByClassName("tab");
		  y = x[currentTab].getElementsByTagName("input");
		  // A loop that checks every input field in the current tab:
		  for (i = 0; i < y.length; i++) {
			// If a field is empty...
			if (y[i].value == "") {
			  // add an "invalid" class to the field:
			  y[i].className += " invalid";
			  // and set the current valid status to false
			  valid = false;
			}
		  }
		  // If the valid status is true, mark the step as finished and valid:
		  if (valid) {
			document.getElementsByClassName("step")[currentTab].className += " finish";
		  }
		  return valid; // return the valid status
		}
		
		function fixStepIndicator(n) {
		  // This function removes the "active" class of all steps...
		  var i, x = document.getElementsByClassName("step");
		  for (i = 0; i < x.length; i++) {
			x[i].className = x[i].className.replace(" active", "");
		  }
		  //... and adds the "active" class on the current step:
		  x[n].className += " active";
		}
		// document.addEventListener('DOMContentLoaded', function () {
		// 	const addSubjectButton = document.getElementById('addSubject');
		// 	const subjectsContainer = document.getElementById('subjects');
		// 	const subjectCounter = document.getElementById('subjectCounter');
		
		// 	const subjectsList = ["COMMERCE", "FINANCIAL ACCOUNTING", "CHRISTIAN RELIGIOUS STUDIES", "ECONOMICS", "GEOGRAPHY", "GOVERNMENT", "HISTORY", "ISLAMIC STUDIES",
		// 	"LITERATURE IN ENGLISH", "CIVIC EDUCATION", "ARABIC", "	ENGLISH LANGUAGE", "FRENCH", "HAUSA", "IGBO", "YORUBA",
		//    "FURTHER MATHEMATICS", "GENERAL MATHEMATICS", "AGRICULTURAL SCIENCE", "BIOLOGY", "CHEMISTRY", "HEALTH EDUCATION/HEALTH SCIENCE",
		//    "PHYSICAL EDUCATION", "PHYSICS", "AUTO MECHANICS", "BUILDING CONSTRUCTION", "METAL WORK", "TECHNICAL DRAWING",
		// 	"WOODWORK", "BASIC ELECTRICITY", "BASIC ELECTRONICS", "CLOTHING AND TEXTILES", "FOODS AND NUTRITION",
		// 	 "HOME MANAGEMENT", "MUSIC", "VISUAL ART" ];
		// 	const gradesList = ["A1", "B2", "B3", "C4", "C5", "C6", "D7", "E8", "F9"];
		// 	const addedSubjects = new Set();
		// 	let count = 0;
		
		// 	addSubjectButton.addEventListener('click', function () {
		// 		if (addedSubjects.size < subjectsList.length) {
		// 			const subjectDiv = document.createElement('div');
		// 			subjectDiv.classList.add('subject');
		
		// 			const subjectNameSelect = document.createElement('select');
		// 			subjectNameSelect.name = 'subject'; // Set the name attribute

		// 			subjectNameSelect.innerHTML = '<option value="" disabled selected>Select Subject</option>';
							
		// 			// Sort subjects in alphabetical order
		// 			const sortedSubjects = subjectsList.slice().sort();
		// 			sortedSubjects.forEach(function (subject) {
		// 				if (!addedSubjects.has(subject)) {
		// 					const option = document.createElement('option');
		// 					option.value = subject; // Set value to subject name
		// 					option.text = subject;
		// 					subjectNameSelect.appendChild(option);
		// 				}
		// 			});
		
		// 			const gradeSelect = document.createElement('select');
		// 			gradeSelect.name = 'grade'; // Set the name attribute
		// 			gradesList.forEach(function (grade) {
		// 				const option = document.createElement('option');
		// 				option.value = grade;
		// 				option.text = grade;
		// 				gradeSelect.appendChild(option);
		// 			});
		
		// 			subjectDiv.appendChild(subjectNameSelect);
		// 			subjectDiv.appendChild(gradeSelect);
		
		// 			subjectNameSelect.addEventListener('change', function () {
		// 				if (addedSubjects.has(subjectNameSelect.value)) {
		// 					alert('This subject has already been selected.');
		// 					return;
		// 				}
		
		// 				addedSubjects.add(subjectNameSelect.value);
		// 				subjectNameSelect.disabled = true;
		
		// 				if (addedSubjects.size === subjectsList.length) {
		// 					addSubjectButton.textContent = 'All Subjects Added';
		// 					addSubjectButton.disabled = true;
		// 					alert('All subjects are added.');
		// 				}
		
		// 				count++;
		// 				subjectCounter.textContent = `Subjects Added: ${count}`;
		
		// 				if (count === 9) {
		// 					Swal.fire({
		// 						title: 'Maximum Subjects Reached',
		// 						text: 'You have selected the maximum number of subjects.',
		// 						icon: 'warning'
		// 					});
		// 					addSubjectButton.disabled = true;
		// 				}
		// 			});
		
		// 			subjectsContainer.appendChild(subjectDiv);
		// 		}
		// 	});
		
		// 	// Listen for changes in subject selection to update grade selection
		// 	subjectsContainer.addEventListener('change', function (event) {
		// 		const subjectSelect = event.target;
		// 		if (subjectSelect.name === 'subject') {
		// 			const gradeSelect = subjectSelect.nextElementSibling;
		// 			const selectedSubject = subjectSelect.value;
					
		// 			// Modify the value of the selected grade
		// 			const selectedGrade = gradeSelect.value;
		// 			gradeSelect.value = `${selectedSubject} - ${selectedGrade}`;
		// 		}
		// 	});
		// });
		
		function successMessage(){
			const Toast = Swal.mixin({
				toast: true,
				position: 'top-end',
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
				title: 'Application successful'
		
			  })
		}
		
		const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack() {


	let fname = document.getElementById("firstname").value;
	let surname = document.getElementById("surname").value;
	
  let fullname = fname + surname;
  let handler = PaystackPop.setup({
    key: 'pk_test_1db996ca9c92eb22d291b838b1646fb9171d806a', // Replace with your public key
    first_name: fullname,
    email: document.getElementById("emailaddress").value,
    amount: document.getElementById("amount").value * 100,
    phone: document.getElementById("phonenumber").value,
    ref: 'IIPPSA'+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
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
      window.location = "apply.html?reference=" + response.reference;
      let message = 'Reference: '+ "  "+ response.reference;
      let sent_to_database = response.reference;
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
	//   var formData = {title: title, fname:fname, surname:surname, mname: mname, status: status, email: email, residentialaddress: residentialaddress, phonenumber: phonenumber, dateofbirth: dateofbirth, nationality: nationality, state: state, course: course, studentsignature: studentsignature, dateofsignature: dateofsignature, amount: amount, sent_to_database:sent_to_database }; 
	//   $.ajax({
	// 	   url:"localhost/icon-academy-1/connect-database.php",
	// 	   type: "GET",
	// 	   data: formData,
	// 	   success: function (response)
	// 	   {
   
	// 	   }
	// 	 })
    }
  });
  
 
  handler.openIframe();
}