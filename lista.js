function clique(){
    var li = document.createElement('LI');
    var input = document.form_p.tarefa.value;
    var input_text = document.createTextNode(input);

    li.appendChild(input_text);
    document.querySelector('ul').appendChild(li);
    document.form_p.tarefa.value = "";

    createCloseButton(li);


    function createCloseButton(li){
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");

        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        span.onclick = () =>
        span.parentElement.style.display = "none";
    }

    document.querySelectorAll('li').forEach(createCloseButton);
    
    document.querySelector('ul').addEventListener('click',(e) => {
        if(e.target.tagName === 'LI')
        e.target.classList.toggle('checked');
      });


}