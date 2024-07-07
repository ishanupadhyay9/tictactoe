const boxes = document.querySelectorAll('.box');
const reset = document.querySelector('.restart');
const message = document.querySelector('.vicmessage');
const cs = document.querySelector('.cplayer');
let current = 'X';
cs.innerText=current;
reset.style.scale=0;
let c= 0;

boxes.forEach((box)=>{box.addEventListener('click',
    (e)=>{ if(current==""){return;}
        if(box.innerText=="")
            {box.innerText=current; 
                c++; 
                
         checkwin();
        }
    }
)});
reset.addEventListener('click',()=>{
    boxes.forEach((box)=>{box.innerText=""; box.classList.remove("st");});
    message.style.scale=0;
    reset.style.scale=0;
    current='X';
    cs.innerText=current;
})
function change()
{if(current=='X'){current='O';} 
else{current='X';} 
cs.innerText=current;
return;}

function victory()
{
 message.style.scale=1;
 message.innerText=current+" Wins !!";
 c=0;
 reset.style.scale=1;
 current='';
  console.log(current);
  return;
}
function checkwin(){
const b00 = document.querySelector('.b00');
const b01 = document.querySelector('.b01');
const b02 = document.querySelector('.b02');
const b10 = document.querySelector('.b10');
const b11 = document.querySelector('.b11');
const b12 = document.querySelector('.b12');
const b20 = document.querySelector('.b20');
const b21 = document.querySelector('.b21');
const b22 = document.querySelector('.b22');

if(c<5){ change(); return;}

if(b00.innerText==current && b00.innerText==b01.innerText && b01.innerText==b02.innerText)
    {
        victory();
        b00.classList.add('st');
        b01.classList.add('st');
        b02.classList.add('st');
        return;
    }
    if(b10.innerText==current && b10.innerText==b11.innerText && b11.innerText==b12.innerText)
        {
            victory();
            b10.classList.add('st');
            b11.classList.add('st');
            b12.classList.add('st');
            return;
        }
        if(b20.innerText==current && b20.innerText==b21.innerText && b21.innerText==b22.innerText)
            {
                victory();
                b20.classList.add('st');
                b21.classList.add('st');
                b22.classList.add('st');
                return;
            }
            
            if(b00.innerText==current && b00.innerText==b10.innerText && b10.innerText==b20.innerText)
                {
                    victory();
                    b00.classList.add('st');
                    b10.classList.add('st');
                    b20.classList.add('st');
                    return;
                }
                if(b01.innerText==current && b01.innerText==b11.innerText && b11.innerText==b21.innerText)
                    {
                        victory();
                        b01.classList.add('st');
                        b11.classList.add('st');
                        b21.classList.add('st');
                        return;
                    }
                    if( b02.innerText==current && b02.innerText==b12.innerText && b12.innerText==b22.innerText)
                        {
                            victory();
                            b02.classList.add('st');
                            b12.classList.add('st');
                            b22.classList.add('st');
                            return;
                        }
                        if(b00.innerText==current && b00.innerText==b11.innerText && b11.innerText==b22.innerText)
                            {
                                victory();
                                b00.classList.add('st');
                                b11.classList.add('st');
                                b22.classList.add('st');
                                return;
                            }
                            if( b02.innerText==current && b02.innerText==b11.innerText && b11.innerText==b20.innerText)
                                {  
                                    victory();
                                    b02.classList.add('st');
                                    b11.classList.add('st');
                                    b20.classList.add('st');
                                    return;
                                }

 change();
 if(c==9)
    {
        message.style.scale=1;
        message.innerText=" Game Tied";
        c=0;
        reset.style.scale=1;
        current='';
         console.log(current);
         return;
    }

}
