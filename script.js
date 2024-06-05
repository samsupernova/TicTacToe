let player1;
let player2;

let score=[0,0];
let ref_val;
let ind_btn;
let screen_val=0;

const first = document.querySelector('.first');
const body=document.querySelector('body');
const main_ht=document.querySelector('.main');
const about=document.querySelector('.about');
const entry_screen=document.querySelector('.entry-screen');
const ttt=document.querySelector('.first-ttt');

const btn_clear=document.querySelector('#btn-clear');
const btn_again=document.querySelector('.btn-again');
const btn_reset=document.querySelector('#btn-reset');
const btn_about=document.querySelector('#btn-about');
const btn_close_about=document.querySelector('#btn-close-about');
const result=document.querySelector('.result');
const btn_1=document.querySelector('#btn-1');
const btn_2=document.querySelector('#btn-2');
const btn_3=document.querySelector('#btn-3');
const btn_4=document.querySelector('#btn-4');
const btn_5=document.querySelector('#btn-5');
const btn_6=document.querySelector('#btn-6');
const btn_7=document.querySelector('#btn-7');
const btn_8=document.querySelector('#btn-8');
const btn_9=document.querySelector('#btn-9');

const btn_collection=[btn_1,btn_2,btn_3,btn_4,btn_5,btn_6,btn_7,btn_8,btn_9];

let game_val = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
let count=1;
let decider=0;

let r0 = [7,8,9];
let r1 = [7,8,9];
let r2 = [7,8,9];

let c0 = [7,8,9];
let c1 = [7,8,9];
let c2 = [7,8,9];

let cross1=[7,8,9];
let cross2=[7,8,9];

//btn 1 to 9
btn_1.addEventListener('click',function(){
    ind_btn=0;
    main();
    num_en_dis(ind_btn,true);
})
btn_2.addEventListener('click',function(){
    ind_btn=1;
    main();
    num_en_dis(ind_btn,true);
})
btn_3.addEventListener('click',function(){
    ind_btn=2;
    main();
    num_en_dis(ind_btn,true);
})
btn_4.addEventListener('click',function(){
    ind_btn=3;
    main();
    num_en_dis(ind_btn,true);
})
btn_5.addEventListener('click',function(){
    ind_btn=4;
    main();
    num_en_dis(ind_btn,true);
})
btn_6.addEventListener('click',function(){
    ind_btn=5;
    main();
    num_en_dis(ind_btn,true);
})
btn_7.addEventListener('click',function(){
    ind_btn=6;
    main();
    num_en_dis(ind_btn,true);
})
btn_8.addEventListener('click',function(){
    ind_btn=7;
    main();
    num_en_dis(ind_btn,true);
})
btn_9.addEventListener('click',function(){
    ind_btn=8;
    main();
    num_en_dis(ind_btn,true);
})

function num_en_dis(ind,bol){
    btn_collection[ind].disabled=bol;
}
function same_ele(a){
    if(a[0]==a[1]&&a[1]==a[2]){
        decider=1;
    }
}
function hide(class_name){
    class_name.classList.add('hidden');
}
function display(class_name){
    class_name.classList.remove('hidden');
}
function main(){
    if(count%2==0){
        ref_val=1;
        document.querySelector(`#btn-${ind_btn+1}`).textContent='O';
    }else{
        ref_val=0;
        document.querySelector(`#btn-${ind_btn+1}`).textContent='X';
    }
    let r;
    let c;
    [r,c]=game_val[ind_btn];

    switch (r){
        case 0:
            r0[c]=ref_val;
            break;
        case 1:
            r1[c]=ref_val;
            break;
        case 2:
            r2[c]=ref_val;
            break;
    }
    switch (c){
        case 0:
            c0[r]=ref_val;
            break;
        case 1:
            c1[r]=ref_val;
            break;
        case 2:
            c2[r]=ref_val;
            break;
    } 
    
    if(r==c){
        cross1[r]=ref_val;
    }
    if (r==0&c==2){
        cross2[r]=ref_val;
    }else if(r==1&&c==1){
        cross2[r]=ref_val;
    }else if(r==2&&c==0){
        cross2[r]=ref_val;
    }
    same_ele(r0); 
    same_ele(r1); 
    same_ele(r2); 
    
    same_ele(c0); 
    same_ele(c1); 
    same_ele(c2); 

    same_ele(cross1);
    same_ele(cross2);

    if(decider){
        hide(first);
        display(result);
        const players=[player1,player2];
        result.textContent=`${players[ref_val]} WON!`;
        body.style.backgroundColor='#3dff5ab7';
        btn_clear.disabled=true;
        display(btn_again);
    }
    if(count==9&&decider!=1){
        hide(first);
        display(result);
        display(btn_again);
        result.textContent='DRAW!';
    }
    count ++;
}

document.querySelector('#btn-ent').addEventListener('click',function(){
    player1=document.querySelector('#ent-inp-1').value;
    player2=document.querySelector('#ent-inp-2').value;
    if(player1==''||player2==''){
        alert('this field can not be empty');
    }else{
        document.querySelector('#name-1').textContent=player1;
        document.querySelector('#name-2').textContent=player2;

        display(main_ht);
        hide(entry_screen);
        screen_val=1;
    }
})
function reset(){
    game_val = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
    count=1;
    decider=0;

    r0 = [7,8,9];
    r1 = [7,8,9];
    r2 = [7,8,9];

    c0 = [7,8,9];
    c1 = [7,8,9];
    c2 = [7,8,9];

    cross1=[7,8,9];
    cross2=[7,8,9];
    
    for(let i=1; i<=9; i++){
        document.querySelector(`#btn-${i}`).textContent='';
        num_en_dis(i-1,false);
    }
    body.style.backgroundColor='#222';
    display(first);
    hide(result);
    hide(btn_again);
    btn_clear.disabled=false;
}
document.querySelector('#btn-clear').addEventListener('click',function(){
    reset();
})
btn_reset.addEventListener('click',function(){
    main_ht.classList.add('hidden');
    display(entry_screen);
    document.querySelector('#ent-inp-1').value='';
    document.querySelector('#ent-inp-2').value='';
    document.querySelector('#score-1').textContent=0;
    document.querySelector('#score-2').textContent=0;
    score=[0,0];
    screen_val=0;
    reset();
})
btn_again.addEventListener('click',function(){
    if(decider){
        score_inc(ref_val);
    }
    reset();
    hide('btn_again');
})
function score_inc(a){
    score_ht=document.querySelector(`#score-${a+1}`);
    score[a]+=1;
    score_ht.textContent=score[a];
} 
btn_about.addEventListener('click',function(){
    hide(ttt);
    display(about);
    if(screen_val){
        hide(main_ht);
    }else{
        hide(entry_screen);
    }
})

btn_close_about.addEventListener('click',function(){
    hide(about);
    display(ttt);
    if(screen_val){
        display(main_ht);
    }else{
        display(entry_screen);
    }
})