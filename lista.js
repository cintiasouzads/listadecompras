function clique(){
    var li = document.createElement('li');
    var input = document.form_p.tarefa.value;
    var input_text = document.createTextNode(input);
    li.appendChild(input_text);
    document.querySelector('ul').appendChild(li);
    document.form_p.tarefa = "";

    createCloseButton(li);

    function createCloseButton(li){
        var span = document.createElement('span');
        var txt = document.createElement('txt1');
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        span.onclick = () =>
        span.parentElement.style.display = "none";
    }

    document.querySelectorAll('li').forEach(createCloseButton);
    document.querySelector('ul').addEventListener('click',(e) => {
        if(e.target.tagName === 'li')
        e.target.classList.toggle('checked');
    });

}
