// Experience Section
const professionalExp = [
  {
    title: 'Frontend Engineer Intern',
    company: 'D-Order',
    image: 'd-order-logo.png',
    time: 'Jun 2020 - Aug 2020',
    description: 'Developed the frontend of d-order.com website using Vue.js and Nuxt.js in an agile teamwork'
  },
  {
    title: 'Expedition Company Database Project',
    company: 'PT. Anugerah Catur Putra Santoso',
    image: 'profile-logo.png',
    time: 'Jun 2020 - Now',
    description: 'Developed the frontend, backend, and database of an expedition company using React.js, Express.js, and MySQL'
  }
]

const educationExp = [
  {
    title: 'Informatics Engineering',
    company: 'ITB',
    image: 'itb-logo.png',
    time: 'Aug 2018 - Now',
    description: 'Expected to graduate at July 2022. Active at Himpunan Mahasiswa Informatika ITB and has good grades.'
  },
]

const organizationalExp = [
  {
    title: 'Deputy Head of Community Service Division',
    company: 'HMIF ITB',
    image: 'hmif-logo.png',
    time: 'Mar 2020 - Now',
    description: "Manage HMIF ITB's Community Service Division from the members to the activities"
  },
  {
    title: 'Staff of Social Movement Infrastructure Ministry',
    company: 'Kabinet KM ITB',
    image: 'kabinet-logo.png',
    time: 'Jun 2019 - Apr 2020',
    description: "Taking part in managing ITB's student association's community service division"
  }
]

const experienceList = document.querySelector('.experience-list')

function updateExp(exp) {
  let expList = []
  if (exp === 'Professional') {
    expList = [...professionalExp]
  } else if (exp === 'Education') {
    expList = [...educationExp]
  } else {
    expList = [...organizationalExp]
  }

  experienceList.innerHTML = ''

  expList.forEach(exp => {
    experienceList.innerHTML += `
    <div class="experience-item">
      <img src="assets/${exp.image}" width=75 height=75/>
      <div class="experience-text">
        <div class="experience-header">
          <span class="experience-title">${exp.title}</span>
          <span class="experience-time"><i>${exp.time}</i></span>
        </div>
        <span class="experience-company">${exp.company}</span>
        <span class="experience-description">${exp.description}</span>
      </div>
    </div>
    `
  })
}

const buttons = document.querySelectorAll('.experience-button')

function resetBtn() {
  buttons.forEach(button => {
    button.classList.remove('green-button')
  })
}


buttons.forEach(button => {
  button.addEventListener('click', () => {
    resetBtn()
    updateExp(button.textContent)
    button.classList.add('green-button')
  })
})

updateExp('Professional')