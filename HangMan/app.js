
const letters = document.querySelector('#letters');
const ul = document.querySelector('.set');


let question = ['Turkish twitch in streamer','English football team','The Walking Dead villan','2018 Best of Game awards ?',
'2020 game of the year ?','Best RPG Game'];

let answer = ['jahrein','chealse','negan','godofwar','lastofus','darksouls'];


let letterArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','v','w','x','y','z'];

let list;
let btn;

for(let i =0;i<letterArray.length;i++){
     list = document.createElement('li');
     btn = document.createElement('button');

    btn.setAttribute('class','btn');
    btn.textContent = letterArray[i];

    list.appendChild(btn);
    ul.appendChild(list);

}
const answerTag = document.querySelector('.answer');
const resultAppendLine = document.querySelector('.resultAppendLine');


let rand = Math.floor(Math.random()*question.length);


let resultAppend = document.querySelector('.resultAppend');

resultAppend.textContent=question[rand];
answerTag.textContent = answer[rand];

for(let i =0;i<answer[rand].length;i++){
    let p = document.createElement('p');
    p.setAttribute('class','line');
    resultAppendLine.appendChild(p);
}
let line = document.getElementsByTagName("p");  

let c;
let temp;    
let count = 10;
const h = document.querySelector('.h');



ul.addEventListener('click',(e)=>{
    let cc;

    if(e.target.classList.value=='btn'){
        e.target.setAttribute('class','btn-disabled');
       for(let i =0;i<answer[rand].length;i++){
            c = answer[rand].indexOf(e.target.innerHTML,temp+1);
            temp =c;
            if(c!=-1){
                cc=c;
                line[c].textContent=e.target.innerHTML;                
            }    
        }
    }
    e.target.disabled="true";

    if(cc==undefined){
        count--;
        h.textContent =  `You have ${count} lives`;
    }
    if(count<=0){
        h.textContent = `Game Over`;
        btnAllDisabled();
    }
    if(pAll()==answer[rand].length){
        h.textContent = `You Won`;
        btnAllDisabled();
    }    

});
const again = document.querySelector('#again');

again.addEventListener('click',()=>{
    document.location.reload(true);    

});

function pAll(){
    let count =0;
    for(let i =0;i<line.length;i++){
        if(line[i].textContent!=""){
            count++;
        }        
    }
    return count;
}

function btnAllDisabled(){
    ul.childNodes.forEach((element)=>{
        element.childNodes.forEach((btn)=>{
            btn.setAttribute('class','btn-disabled');
            btn.disabled="true";

        });
    });
}

