'use strict';
alert('działa?');
    // function TrollKill(field, restrictedWords){
    //     this._field = field;
    //     this._words = restrictedWords.split(/, */);
    // }

    let button = document.querySelector('button');
    let text = document.querySelector('textarea');
    console.log(button, text);
    button.addEventListener('click',()=>{
        console.log(text.value);
    })

