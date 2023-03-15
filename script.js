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
const seeProject = document.createElement('div');
const projectCard = document.createElement('div');
const projectCardHead = document.createElement('div');
const projectName = document.createElement('h1');
const projectClose = document.createElement('button');
const projectCloseImg = document.createElement('img');
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
projectCardHead.classList.add('project-card-head');
projectImage.classList.add('project-card-image');
projectClose.id = 'project-close';
projectCardBot.classList.add('project-card-bot');
projectCardBotRight.classList.add('project-card-bot-right');
projectTech.classList.add('project-technologies');
projectButtons.classList.add('project-buttons');
projectButtonLink.id = 'project-button1';
projectButtonSource.id = 'project-button2';

// Set values for some elements
projectButtonText1.innerHTML = 'See live';
projectButtonText2.innerHTML = 'See Source';

// Arrange child of the main project-card
projectCardHead.appendChild(projectName);
projectCardHead.appendChild(projectClose);
projectClose.appendChild(projectCloseImg);
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
projectCard.appendChild(projectImage);
projectCard.appendChild(projectCardBot);

// Add project-card to main pop-up div
seeProject.appendChild(projectCard);

// Function to close project
function closeProjectBtn() {
  document.getElementById('header-top').style.filter = 'blur(0)';
  document.getElementById('portfolio').style.filter = 'blur(0)';
  document.body.removeChild(seeProject);
  document.body.style.overflow = 'scroll';
}

// Set media query for project image
const mediaQuery = window.matchMedia('(max-width: 768px)');

// Dunction to open project
function openProject(i) {
  projectCloseImg.src = './icons/closeicon.png';
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
  projectButtonLogo1.src = liveLink1;
  projectButtonLogo2.src = sourceLink1;
  projectTechItem1.innerHTML = tech1;
  projectTechItem2.innerHTML = tech2;
  projectTechItem3.innerHTML = tech3;
  projectButtonLink.href = liveLink2;
  projectButtonSource.href = sourceLink2;
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