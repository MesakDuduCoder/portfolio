// menu section
const btn = document.querySelector('#header-btn2');
const btn2 = document.querySelector('#close-menu');

function display() {
  document.getElementById('header-top').style.filter = 'blur(8px)';
  document.getElementById('menu').style.visibility = 'visible';
  document.getElementById('menu-items').style.visibility = 'visible';
  document.body.style.overflow = 'hidden';
}

function closeDisplay() {
  document.getElementById('header-top').style.filter = 'blur(0)';
  document.getElementById('menu').style.visibility = 'hidden';
  document.getElementById('menu-items').style.visibility = 'hidden';
  document.body.style.overflow = 'scroll';
}

btn.addEventListener('click', display);
btn2.addEventListener('click', closeDisplay);

// work section
const project1 = {
  name: "Currency app",
  titleHead: ["React", "API", "2023"],
  description:
    "This is a currency exchange site where you can view conversion rates of different currencies. It is a React app which gets data from API.",
  image: "./images/CE-1.png",
  tags: ["html", "css", "javascript"],
  liveLink: [
    "https://currency-exchange-1gpu.onrender.com",
    "./icons/LiveBtn.png",
  ],
  sourceLink: [
    "https://github.com/MesakDuduCoder/currency-exchange",
    "./icons/GithubBtn.png",
  ],
};

const project2 = {
  name: "Cash App",
  titleHead: ["Finance", "Full&nbsp;Stack&nbsp;Dev", "2023"],
  description:
    "Cash app is a budgeting app that helps you keep track of your expenses your budget, you can categorize your expenses and see a list of payments made to that category",
  image: "./images/BA-2.png",
  tags: ["html", "css", "javascript", "ruby", "rails", "postgresql"],
  liveLink: ["https://budget-app-917z.onrender.com", "./icons/LiveBtn.png"],
  sourceLink: [
    "https://github.com/MesakDuduCoder/budget_app",
    "./icons/GithubBtn.png",
  ],
};

const project3 = {
  name: 'Zomato&nbsp;Clone',
  titleHead: ['React', 'Full&nbsp;Stack&nbsp;Dev', '2022'],
  description:
    'Zomato clone is a website in which you can see different type of restaurants and their menus built using the Zomato api, ReactJs, NodeJs, ExpressJs, MongoDB and CSS',
  image: './images/ZC-1.png',
  tags: ['React', 'NodeJS/ExpressJS', 'MongoDB'],
  liveLink: ['https://stunning-meringue-0eb6da.netlify.app/', './icons/LiveBtn.png'],
  sourceLink: ['https://github.com/MesakDuduCoder/zomato-clone', './icons/GithubBtn.png'],
};

const project4 = {
  name: 'Space&nbsp;Travellers',
  titleHead: ['React', 'Front&nbsp;End&nbsp;Developer', '2023'],
  description:
    "Space travellers is a website in which you can see different type of rockets and missions from SpaceX company built using the SpaceX api, ReactJs, Redux, JavaScript and CSS",
  image: './images/ST-1.png',
  tags: ['React', 'Redux', 'API'],
  liveLink: ['https://space-travellers-ebui.onrender.com/', './icons/LiveBtn.png'],
  sourceLink: ['https://github.com/MesakDuduCoder/space-traveller-hub', './icons/GithubBtn.png'],
};

// Store project objects in array
const projects = [];
projects.push(project1);
projects.push(project2);
projects.push(project3);
projects.push(project4);

const projectContainer = document.querySelector('.works');

projects.forEach((project) => {
  const projectCard = document.createElement('div');
  projectCard.className = 'project-card';
    
  projectCard.innerHTML = `
  <img class="work-snapshot" alt="project-image" src=${project.image} width="544" height="448"/>
  <div class="work-block">
    <div class="primary-text">
      <h2 class="project-title">${project.name}</h2>
      <div class="frame">
        <div class="client"><p>${project.titleHead[0]}</p></div>
        <div>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
        </svg>
        </div>
        <div class="role"><p>${project.titleHead[1]}</p></div>
        <div>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
        </svg>
        </div>
        <div class="year"><p>${project.titleHead[2]}</p></div>
      </div>
    </div>
    <p class="project-details">
      ${project.description}
    </p>
    <ul class="tags">
      <li class="tags-list"><a class="tags-text" href="">${project.tags[0]}</a></li>
      <li class="tags-list"><a class="tags-text" href="">${project.tags[1]}</a></li>
      <li class="tags-list"><a class="tags-text" href="">${project.tags[2]}</a></li>
    </ul>
    <div class="actions">
      <a class="live" href=${project.liveLink[0]} target="_blank" rel="noopener noreferrer">
        <img class="live-icon" src=${project.liveLink[1]} alt="live-icon" width="24" height="24"/>
        <p class="live-text">Live</p>
      </a>
      <a class="source" href=${project.sourceLink[0]} target="_blank" rel="noopener noreferrer">
        <img class="source-icon" src=${project.sourceLink[1]} alt="source-icon" width="24" height="24"/>
        <p class="source-text">Source</p>
      </a>
    </div>
  </div>
  `
  projectContainer.appendChild(projectCard);
})


// Validate form

const emailEl = document.querySelector('#mail');
const messageEl = document.querySelector('#formMessage');
const form = document.querySelector('.contact-form');

const isRequired = (value) => value !== '';

const isEmailValid = (email) => {
  const re = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

  return re.test(email);
};

const showError = (input, message) => {
  const error = document.querySelector('#formMessage');
  error.textContent = message;
};

const showSuccess = () => {
  const error = document.querySelector('#formMessage');
  error.textContent = '';
};
const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
    showError(emailEl, 'Email should be in lowercase.');
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const isEmailValid = checkEmail();
  const isFormValid = isEmailValid;

  if (isFormValid) {
    messageEl.style.backgroundColor = '#6070ff';
    form.submit();
  } else {
    messageEl.style.backgroundColor = '#fff';
  }
});

// Local storage
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#mail');
const messageInput = document.querySelector('#message');
function updateFormData() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}
[nameInput, emailInput, messageInput].forEach((input) => {
  input.addEventListener('input', updateFormData);
});
const savedFormData = JSON.parse(localStorage.getItem('formData'));

if (savedFormData) {
  nameInput.value = savedFormData.name;
  emailInput.value = savedFormData.email;
  messageInput.value = savedFormData.message;
}