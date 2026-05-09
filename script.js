function startWebsite(){

    document.getElementById("first-screen").style.display = "none";
    document.getElementById("choice-screen").classList.remove("hidden");

    const music = document.getElementById("bg-music");
    music.volume = 0.5;
    music.play();
}

function chooseLove(){

    document.getElementById("choice-screen").style.display = "none";
    document.getElementById("memory-screen").classList.remove("hidden");
}

function breakupOption(){
    alert("Error... I can't accept this 💔");
    location.reload();
}

function goToEnvelope(){

    document.getElementById("memory-screen").style.display = "none";
    document.getElementById("envelope-screen").classList.remove("hidden");
}

function openLetter(){

    document.getElementById("envelope-screen").style.display = "none";
    document.getElementById("final-screen").classList.remove("hidden");

    typeLetter();
}

/* TYPEWRITER */
function typeLetter(){

    const text = `I know I hurt you...

I know I didn’t understand you when I should have.

You never asked for perfection...
You only asked for love, presence and reassurance.

And I failed in those moments.

But I understand now...

And I don’t want to lose you.`;

    let i = 0;
    const speed = 40;

    function typing(){
        if(i < text.length){
            document.getElementById("typed-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

/* HEARTS */
setInterval(createHeart, 300);

function createHeart(){

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(()=>heart.remove(),6000);
}