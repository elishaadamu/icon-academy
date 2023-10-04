const tab = document.querySelectorAll('.tab-option')
const coursesContainer = document.querySelector('.courses .container')

let selectedCourseType = 0


const courses = {
    CC: [
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'computer science',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'computer science',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'computer science',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'computer science',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'computer science',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'computer science',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'computer science',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'computer science',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf2 ',
        },
    ],
    DC: [
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'agriculture',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'agriculture',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'agriculture',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'agriculture',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'agriculture',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'agriculture',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'agriculture',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },

    ],
    ADC: [
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'robotics',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'robotics',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'robotics',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'robotics',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'robotics',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'robotics',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'robotics',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'robotics',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'robotics',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },
        {
            courseImg: './assets/images/courses-02.jpg',
            courseName: 'robotics',
            desc: 'lasdfads fadsf asdf asdf asdfal sdflasdf asdf asdf asdf adf ad tyt asdfladf adf adf asdf sdf sdf ',
        },

    ],
}

// RENDER THE COURSE LIST FOR THE FIRST TIME
courses.CC.forEach(course => {
    return (
        coursesContainer.innerHTML += `
        <div class="course">
            <img src=${course.courseImg} alt="">
        
            <div class="course-info">
                <h4>${course.courseName}</h4>
                <p>${course.desc} </p>
                <button>Learn more</button>
            </div>
        </div>

    `
    )
})



// CHENGE THE COURSES ON CLICK
tab.forEach(tabOption => {
    tabOption.addEventListener('click', event => {
        let clickedTabOption = event.target;

        if (clickedTabOption == tab[0]) {
            tab[2].classList.remove('active')
            tab[1].classList.remove('active')
            clickedTabOption.classList.add('active')

            coursesContainer.innerHTML = ''

            courses.CC.forEach(course => {
                return (
                    coursesContainer.innerHTML += `
                    <div class="course">
                        <img src=${course.courseImg} alt="">
                    
                        <div class="course-info">
                            <h4>${course.courseName}</h4>
                            <p>${course.desc} </p>
                            <button>Learn more</button>
                        </div>
                    </div>
            
                `
                )
            })
        }

        if (clickedTabOption == tab[1]) {
            tab[0].classList.remove('active')
            tab[2].classList.remove('active')
            clickedTabOption.classList.add('active')

            coursesContainer.innerHTML = ''

            courses.DC.forEach(course => {
                return (
                    coursesContainer.innerHTML += `
                    <div class="course">
                        <img src=${course.courseImg} alt="">
                    
                        <div class="course-info">
                            <h4>${course.courseName}</h4>
                            <p>${course.desc} </p>
                            <button>Learn more</button>
                        </div>
                    </div>
            
                `
                )

            })
        }

        if (clickedTabOption == tab[2]) {
            tab[0].classList.remove('active')
            tab[1].classList.remove('active')
            clickedTabOption.classList.add('active')

            coursesContainer.innerHTML = ''

            courses.ADC.forEach(course => {
                return (

                    coursesContainer.innerHTML += `
                    <div class="course">
                        <img src=${course.courseImg} alt="">
                    
                        <div class="course-info">
                            <h4>${course.courseName}</h4>
                            <p>${course.desc} </p>
                            <button>Learn more</button>
                        </div>
                    </div>
            
                `
                )
            })
        }


    });
});

