
/*
x = `Fuck You you dirty bastard`
x.length


function fuckOff():{
    const oldValue = textInput.value;
    const newValue = oldValue.toUpperCase();
    textInput.value = newValue;
}

// transform on every change the input value to uppercase letters
textInput.addEventListener(fuckOff());

*/

console.log('I!')

const form = document.querySelector('[data-js="form"]');
/*
form.addEventListener("submit", onCaseOfSubmit());

function onCaseOfSubmit(event){
    console.log('hahahah');
    event.preventDefault();
}

*/  

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const keyValuePair = [
        ["cow", "🐮"],
        ["pig", "🐷"],
    ];
    
    const formElements = event.target.elements
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    
    for (let i = 0; i < keyValuePair.length; i++){

        if(data.firstName==keyValuePair[i][0]){
            formElements.age.value=keyValuePair[i][1];
        }
    }


 

    /*
    console.log(formElements.name.value);
    console.log(formElements.age.value);
    */
    //console.log(event.target)
  });

const link = document.querySelector("a");
link.addEventListener("click", (e) => {
    if (confirm("are you sure you want to leave the page?")) {
        console.log("leaving");
        return;
    }
    console.log("staying on the page");
    e.preventDefault();
});




/*
x = 78


function blabla():{
    x=5
    return x
}

blabla()

*/