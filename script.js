(function(){
    
    function TrollKill(field, restrictedWords){

        this._field = field;
        this._words = restrictedWords.split(/, */);
        this._regEx = new RegExp(`(${this._words.join('|')})`, 'gim');

        this._assignEvents();
    }


    // events engine 

    TrollKill.prototype._assignEvents = function(){
        this._field.addEventListener('keyup', this._filterMessage.bind(this));
    }

    // filter and replace engine 

    TrollKill.prototype._filterMessage = function(e){
        console.log(e);

        this._field.value = this._field.value.replace(this._regEx, function(match){

            const _char = '#';
            let _res = "";

            for (let i =0; i<match.length; i++){
                _res += _char
            }

            return _res;

        })
    }

    new TrollKill(document.querySelector('[name="message-field"]'), 'bird, dog, cat');

})();

