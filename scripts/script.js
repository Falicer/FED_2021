// JavaScript Document
const html = document.querySelector('html');
const text = document.querySelector('h2');

html.addEventListener('scroll', () => {
    text.style.webkitAnimation = 'none';
    setTimeout(function () {
        text.style.webkitAnimation = '';
    }, 10);
});

function agentPage() {
    document.getElementById("agent_Button").onclick = function () {
        location.href = "pages/agents.html";
    }
}

function classDelete() {
    document.getElementById("agent_Image").classList.remove("agent_Animation");
    document.getElementById("agent_BioText").classList.remove("text_Animation");
    document.getElementById("agent_RoleText").classList.remove("text_Animation");
}

function agent_Change(value) {

    var agentImage = document.getElementById("agent_Image");
    var agentBio = document.getElementById("agent_BioText");
    var agentRole = document.getElementById("agent_RoleText");

    if (value == "Killjoy") {
        agentImage.classList.add('agent_Animation');
        agentRole.classList.add('text_Animation');
        agentBio.classList.add('text_Animation');
        agentImage.src = "../images/killjoy_image.png";
        agentRole.innerHTML = "Sentinel <img src='../images/Sentinel.png' id='agent_Tag'>";
        agentBio.innerHTML = "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.";
        agentImage.classList.add('agent_Animation');
        agentRole.classList.add('text_Animation');
        agentBio.classList.add('text_Animation');
    } else if (value == "Yoru") {
        agentImage.classList.add('agent_Animation');
        agentRole.classList.add('text_Animation');
        agentBio.classList.add('text_Animation');
        agentImage.src = "../images/yoru_image.png"
        agentRole.innerHTML = "Duelist <img src='../images/Duelist.png' id='agent_Tag'>";
        agentBio.innerHTML = "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.";

    } else if (value == "Skye") {
        agentImage.classList.add('agent_Animation');
        agentRole.classList.add('text_Animation');
        agentBio.classList.add('text_Animation');
        agentImage.src = "../images/skye_image.png"
        agentRole.innerHTML = "Initiator <img src='../images/Initiator.png' id='agent_Tag'>";
        agentBio.innerHTML = "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side.";

    }

    classremoval = setTimeout(classDelete, 1500);
}