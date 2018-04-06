var button = document.getElementById('inputItem');
var ul = document.getElementById('dots');

function runresponse(){
	var storeinput = document.getElementById('inputitem').value;
    var item = document.createElement('li');
    item.textContent = storeinput;
    ul.appendChild(item);
    var buttonE = document.createElement('button');
    buttonE.textContent = "delete";
    item.appendChild(buttonE);

    function eliminate(){
        buttonE.parentNode.remove();

    }
buttonE.addEventListener('click', eliminate);
}

button.addEventListener('click', runresponse);
