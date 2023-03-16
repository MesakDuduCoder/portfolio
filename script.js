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

// popup section
const project1 = {
  name: 'Tonic',
  titleHead: ['CANOPY', 'Back&nbsp;End&nbsp;Dev', '2015'],
  description:
    'A daily selection of privately personalized reads; no accounts <br> or sign-ups required.',
  image1: './images/Portfolio-1.png',
  image2: './images/Snapshoot Portfolio1.png',
  technologies: ['html', 'css', 'javascript'],
  liveLink: ['See live', './icons/LiveBtn.png'],
  sourceLink: ['See source', './icons/GithubBtn.png'],
};

const project2 = {
  name: 'Multi-Post&nbsp;Stories',
  titleHead: ['FACEBOOK', 'Full&nbsp;Stack&nbsp;Dev', '2015'],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image1: './images/Portfolio-2.png',
  image2: './images/Snapshoot Portfolio2.png',
  technologies: ['html', 'css', 'javascript'],
  liveLink: ['See live', './icons/LiveBtn.png'],
  sourceLink: ['See source', './icons/GithubBtn.png'],
};
const project3 = {
  name: 'Tonic',
  titleHead: ['FACEBOOK', 'Full&nbsp;Stack&nbsp;Dev', '2015'],
  description:
    'A daily selection of privately personalized reads; no accounts <br> or sign-ups required.',
  image1: './images/Portfolio-3.png',
  image2: './images/Snapshoot Portfolio3.png',
  technologies: ['html', 'css', 'javascript'],
  liveLink: ['See live', './icons/LiveBtn.png'],
  sourceLink: ['See source', './icons/GithubBtn.png'],
};

const project4 = {
  name: 'Multi-Post&nbsp;Stories',
  titleHead: ['Uber', 'Lead&nbsp;Developer', '2015'],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image1: './images/Portfolio-4.png',
  image2: './images/Snapshoot Portfolio4.png',
  technologies: ['html', 'css', 'javascript'],
  liveLink: ['See live', './icons/LiveBtn.png'],
  sourceLink: ['See source', './icons/GithubBtn.png'],
};

// Store project objects in array
const projects = [];
projects.push(project1);
projects.push(project2);
projects.push(project3);
projects.push(project4);

// Create html elements using JavaScript
const projectBg = document.createElement('div');
const seeProject = document.createElement('div');
const titleList = document.createElement('div');
const titleItemDot1 = document.createElement('div');
const titleItemDot2 = document.createElement('div');
const titleItemP1 = document.createElement('p');
const titleItemP2 = document.createElement('p');
const titleItemP3 = document.createElement('p');
const projectCard = document.createElement('div');
const projectCardHead = document.createElement('div');
const projectName = document.createElement('h1');
const projectClose = document.createElement('button');
const projectCloseImg = document.createElement('div');
const projectImage = document.createElement('img');
const projectCardBot = document.createElement('div');
const projectDescription = document.createElement('p');
const projectCardBotRight = document.createElement('div');
const projectTech = document.createElement('ul');
const projectTechItem1 = document.createElement('li');
const projectTechItem2 = document.createElement('li');
const projectTechItem3 = document.createElement('li');
const projectButtons = document.createElement('div');
const projectButtonLink = document.createElement('a');
const projectButtonSource = document.createElement('a');
const projectButtonText1 = document.createElement('p');
const projectButtonText2 = document.createElement('p');
const projectButtonLogo1 = document.createElement('img');
const projectButtonLogo2 = document.createElement('img');

// Give class and id to created elements
seeProject.id = 'see-project';
projectCard.classList.add('project-card');
projectBg.classList.add('project-bg');
projectCardHead.classList.add('project-card-head');
projectImage.classList.add('project-card-image');
projectClose.id = 'project-close';
projectCardBot.classList.add('project-card-bot');
projectCardBotRight.classList.add('project-card-bot-right');
projectTech.classList.add('project-technologies');
projectButtons.classList.add('project-buttons');
titleList.classList.add('title-list');
titleItemP1.classList.add('title-listp1');
titleItemP2.classList.add('title-listp2');
titleItemP3.classList.add('title-listp2');
projectButtonLink.id = 'project-button1';
projectButtonSource.id = 'project-button2';

// Set values for some elements
projectButtonText1.innerHTML = 'See live';
projectButtonText2.innerHTML = 'See Source';
projectCloseImg.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#67798E"/>
</svg>
`;
titleItemDot1.innerHTML = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
</svg>
`;
titleItemDot2.innerHTML = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
</svg>
`;

// Arrange child of the main project-card
projectCardHead.appendChild(projectName);
projectCardHead.appendChild(projectClose);
projectClose.appendChild(projectCloseImg);
titleList.appendChild(titleItemP1);
titleList.appendChild(titleItemDot1);
titleList.appendChild(titleItemP2);
titleList.appendChild(titleItemDot2);
titleList.appendChild(titleItemP3);
projectTech.appendChild(projectTechItem1);
projectTech.appendChild(projectTechItem2);
projectTech.appendChild(projectTechItem3);
projectCardBotRight.appendChild(projectTech);
projectButtonLink.appendChild(projectButtonText1);
projectButtonLink.appendChild(projectButtonLogo1);
projectButtonSource.appendChild(projectButtonText2);
projectButtonSource.appendChild(projectButtonLogo2);
projectButtons.appendChild(projectButtonLink);
projectButtons.appendChild(projectButtonSource);
projectCardBotRight.appendChild(projectButtons);
projectCardBot.appendChild(projectDescription);
projectCardBot.appendChild(projectCardBotRight);

// Add child nodes to project-card
projectCard.appendChild(projectCardHead);
projectCard.appendChild(titleList);
projectCard.appendChild(projectImage);
projectCard.appendChild(projectCardBot);

// Add project-card to main pop-up div
seeProject.appendChild(projectCard);

// Function to close project
function closeProjectBtn() {
  document.getElementById('header-top').style.filter = 'blur(0)';
  document.getElementById('portfolio').style.filter = 'blur(0)';
  document.body.removeChild(projectBg);
  document.body.removeChild(seeProject);
  document.body.style.overflow = 'scroll';
}

// Set media query for project image
const mediaQuery = window.matchMedia('(max-width: 768px)');

// Dunction to open project
function openProject(i) {
  document.getElementById('header-top').style.filter = 'blur(8px)';
  document.getElementById('portfolio').style.filter = 'blur(8px)';
  projectName.innerHTML = projects[i].name;
  projectDescription.innerHTML = projects[i].description;
  if (mediaQuery.matches) {
    projectImage.src = projects[i].image1;
  } else {
    projectImage.src = projects[i].image2;
  }
  const liveLink1 = projects[i].liveLink[1];
  const sourceLink1 = projects[i].sourceLink[1];
  const tech1 = projects[i].technologies[0];
  const tech2 = projects[i].technologies[1];
  const tech3 = projects[i].technologies[2];
  const liveLink2 = projects[i].liveLink[0];
  const sourceLink2 = projects[i].sourceLink[0];
  const titleP1 = projects[i].titleHead[0];
  const titleP2 = projects[i].titleHead[1];
  const titleP3 = projects[i].titleHead[2];
  projectButtonLogo1.src = liveLink1;
  projectButtonLogo2.src = sourceLink1;
  projectTechItem1.innerHTML = tech1;
  projectTechItem2.innerHTML = tech2;
  projectTechItem3.innerHTML = tech3;
  titleItemP1.innerHTML = titleP1;
  titleItemP2.innerHTML = titleP2;
  titleItemP3.innerHTML = titleP3;
  projectButtonLink.href = liveLink2;
  projectButtonSource.href = sourceLink2;
  document.body.appendChild(projectBg);
  document.body.appendChild(seeProject);
  document.body.style.overflow = 'hidden';
  const closeProject = document.getElementById('project-close');
  closeProject.addEventListener('click', closeProjectBtn);
}

// Get buttons for opening projects
const openProject1 = document.querySelector('#open-project1');
const openProject2 = document.querySelector('#open-project2');
const openProject3 = document.querySelector('#open-project3');
const openProject4 = document.querySelector('#open-project4');

// Set event listeners to project buttons
openProject1.addEventListener('click', openProject.bind(null, '0'), false);
openProject2.addEventListener('click', openProject.bind(null, '1'), false);
openProject3.addEventListener('click', openProject.bind(null, '2'), false);
openProject4.addEventListener('click', openProject.bind(null, '3'), false);

// Validate form

const emailEl = document.querySelector("#mail");
console.log(emailEl)
const form = document.querySelector(".contact-form");
form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();
    let isEmailValid = checkEmail();
    let isFormValid = isEmailValid;

        if (isFormValid) {
          form.submit()
        }
});

const isRequired = (value) => (value === "" ? false : true);

const isEmailValid = (email) => {
  const re =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
 
    return re.test(email);
  
  
};

console.log(isEmailValid)

const showError = (input, message) => {
   const error = document.querySelector("#formMessage");
  error.textContent = message;
};

const showSuccess = (input) => {

  // hide the error message
  const error = document.querySelector("#formMessage");
  error.textContent = "";
};

