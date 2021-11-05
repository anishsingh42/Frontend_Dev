//adding the rock img
let image_rock = document.createElement('img');
image_rock.src = "./img/rock1.PNG";
image_rock.width = 150;
image_rock.height = 150;
let div_r = document.getElementById('rock');
div_r.appendChild(image_rock);

//adding the paper img 
let image_paper = document.createElement('img');
image_paper.src = "./img/paper1.PNG";
image_paper.height = 150;
image_paper.width = 150;
let div_p = document.getElementById('paper');
div_p.appendChild(image_paper);

//adding the scissors img
let image_scissors = document.createElement('img');
image_scissors.src = "./img/scissors1.PNG";
image_scissors.height = 150;
image_scissors.width = 150;
let div_s = document.getElementById('scissors');
div_s.appendChild(image_scissors);