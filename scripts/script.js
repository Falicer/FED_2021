// JavaScript Document
const html = document.querySelector('html');
const text = document.querySelector('h2');

html.addEventListener('scroll', () => {
    text.style.webkitAnimation = 'none';
    setTimeout(function () {
        text.style.webkitAnimation = '';
    }, 10);
});


document.getElementById("agent_Button").onclick = function () {
    location.href = "pages/agents.html";
}

function agent_Change(value){
    if(value == "Killjoy"){
        document.getElementById("agent_Image").src = "../images/killjoy_Image.png";
        document.getElementById("agent_RoleText").innerHTML = "Sentinel <img src='../images/Sentinel.png' id='agent_Tag'>";
        document.getElementById("agent_BioText").innerHTML = "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.";
    }else if(value == "Yoru"){
        document.getElementById("agent_Image").src = "../images/yoru_Image.png"
        document.getElementById("agent_RoleText").innerHTML = "Duelist <img src='../images/Duelist.png' id='agent_Tag'>";
        document.getElementById("agent_BioText").innerHTML = "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.";
        
    }else if(value == "Skye"){
        document.getElementById("agent_Image").src = "../images/skye_Image.png"
        document.getElementById("agent_RoleText").innerHTML = "Initiator <img src='../images/Initiator.png' id='agent_Tag'>";
        document.getElementById("agent_BioText").innerHTML = "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side.";
    }
}