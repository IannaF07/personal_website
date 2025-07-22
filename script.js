const projects = [
  {
    title: "Snake Game",
    shortDesc: "Created a Snake Game using AI.",
    fullDesc: "I utlitized AI to generate and modify a snake to gain knowledge on how to work with AI."
  },
  {
    title: "Good Deeds",
    shortDesc: "Created a mock-up of a community service app.",
    fullDesc: "This app was created collabrating with AI to see how it functions with certain input. The app was created to potentially solve the problem of reaching out to help homeless people, while gaining more community service."
  },
  {
    title: "Project TBA",
    shortDesc: "...",
    fullDesc: "...."
  }
];

function renderProjects() {
  const container = document.getElementById('projectsContainer');
  projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.shortDesc}</p>
      <p id="full-${index}" style="display: none;">${project.fullDesc}</p>
      <button onclick="toggleDescription(${index})">Read More</button>
    `;
    container.appendChild(card);
  });
}

function toggleDescription(index) {
  const desc = document.getElementById(`full-${index}`);
  const button = desc.nextElementSibling;
  if (desc.style.display === 'none') {
    desc.style.display = 'block';
    button.innerText = 'Show Less';
  } else {
    desc.style.display = 'none';
    button.innerText = 'Read More';
  }
}

window.onload = renderProjects;
