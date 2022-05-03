document.getElementById('generate-jokes').addEventListener('click', generateJokes);

function generateJokes(e){
    const xhr = new XMLHttpRequest();
    const number = document.getElementById('number').value;
    console.log(number);
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            console.log(response);
            let output = '';
            if(response.type === 'success'){
                    response.value.forEach(function(r){
                    output += `
                    <li>${r.joke}</li>
                    `
                });
            }else{
                output += `<li>Something went wrong</li>`
            }
            

            document.getElementById('output-jokes').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}