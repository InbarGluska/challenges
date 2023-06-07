/* assigment 1.1 */

// function activateButtons(){
    const button = document.querySelector('[data-js="bookmark"]');

    button.addEventListener("click", (event) => {

        button.classList.toggle('white-image');

    });
    
    /* assigment 1.2 */

    const cardButton = document.querySelector('[data-js="card-button"]');
    const displaying = document.querySelector('[data-js="card__answer"]');

    function toggling() {
        if(cardButton.textContent==="Show answer"){
            cardButton.textContent="Hide answer";}
            else  {
                cardButton.textContent="Show answer";
            }
            displaying.classList.toggle("card__answer--active")  
            };

        
    cardButton.addEventListener("click", toggling);
// }

// activateButtons();



// function hidden() {
//     if(cardButton.textContent==="Hide answer")
//     displaying.textContent = "";

// };

// hidden();

// console.log(hidden);

    // const hideAnswer = cardButton.textContent;





    
//     if (document.getElementById("").style.color=='black'){
//         document.getElementById("fullBookmark").style.color = 'white';
//     }
// else {
//     document.getElementById("fullBookmark").style.color = 'black';
// }

//     document.getElementById("fullBookmark").value = document.getElementById("emptyBookmark").value;





    // cardButton.classList.toggle('hidden');

    // console.log(cardButton.innerHTML);











// if (x==1){
//     button.classList.add('white-image');
//     x=0
// }
// else{
//     button.classList.remove('white-image');
//     x=1
// }


//     if (document.getElementById("fullBookmark").style.color=='black'){
//         document.getElementById("fullBookmark").style.color = 'white';
//     }
// else {
//     document.getElementById("fullBookmark").style.color = 'black';
// }

    //document.getElementById("fullBookmark").value = document.getElementById("emptyBookmark").value;





/*
const uppercaseButtonIm = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
}); */

    

  



// /*

// /*
// x = `Fuck You you dirty bastard`
// x.length


// function fuckOff():{
//     const oldValue = textInput.value;
//     const newValue = oldValue.toUpperCase();
//     textInput.value = newValue;
// }

// // transform on every change the input value to uppercase letters
// textInput.addEventListener(fuckOff());

// */

// console.log('I!')

// const form = document.querySelector('[data-js="form"]');
// /*
// form.addEventListener("submit", onCaseOfSubmit());

// function onCaseOfSubmit(event){
//     console.log('hahahah');
//     event.preventDefault();
// }

// */  

// form.addEventListener("submit", (event) => {

//     event.preventDefault();

//     const keyValuePair = [
//         ["cow", "🐮"],
//         ["pig", "🐷"],
//     ];
    
//     const formElements = event.target.elements
    
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData);

//     console.log(data);
    
//     for (let i = 0; i < keyValuePair.length; i++){

//         if(data.firstName==keyValuePair[i][0]){
//             formElements.age.value=keyValuePair[i][1];
//         }
//     }

//     /*
//     console.log(formElements.name.value);
//     console.log(formElements.age.value);
//     */
//     //console.log(event.target)
//   });

// const link = document.querySelector("a");
// link.addEventListener("click", (e) => {
//     if (confirm("are you sure you want to leave the page?")) {
//         console.log("leaving");
//         return;
//     }
//     console.log("staying on the page");
//     e.preventDefault();
// });




// /*
// x = 78


// function blabla():{
//     x=5
//     return x
// }

// blabla()

// */

