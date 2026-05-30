const jobs = [
{
title:"Frontend Developer Intern",
company:"Google",
location:"Hyderabad"
},
{
title:"MERN Stack Intern",
company:"Microsoft",
location:"Remote"
},
{
title:"Web Developer Intern",
company:"Amazon",
location:"Bangalore"
}
];

const jobsContainer = document.getElementById("jobs");

function displayJobs(data){

jobsContainer.innerHTML="";

data.forEach(job=>{

jobsContainer.innerHTML += `
<div class="card">
<h2>${job.title}</h2>
<p>${job.company}</p>
<p>${job.location}</p>

<button onclick="saveJob('${job.title}')">
Save Job
</button>

</div>
`;

});

}

function saveJob(title){

let saved =
JSON.parse(localStorage.getItem("savedJobs"))
|| [];

saved.push(title);

localStorage.setItem(
"savedJobs",
JSON.stringify(saved)
);

alert("Job Saved");

}

displayJobs(jobs);

document
.getElementById("search")
.addEventListener("input",e=>{

const filtered = jobs.filter(job =>
job.title.toLowerCase()
.includes(
e.target.value.toLowerCase()
)
);

displayJobs(filtered);

});
