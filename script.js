let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let upperCase = document.getElementById("uppercase");
let lowerCase = document.getElementById("lowercase");
let digits = document.getElementById("digits");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copy_icon");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () =>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', ()=>{
      passBox.value = generatePassword();
});

//Function to generate generatePassword

let UpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LowerChars = "abcdefghijklmnoprstuvwxyz";
let symbolChars = "!@#$%^&*-/_+|";
let digitChars = "0123456789";
function generatePassword()
{
    let genPassword = "";
    let allChars = "";
    allChars += lowerCase.checked ? LowerChars : "";
    allChars += upperCase.checked ? UpperChars : "";
    allChars += digits.checked ? digitChars : "";
    allChars += symbols.checked ? symbolChars : "";

    if(allChars == "" || allChars.length == 0)
    {
        return genPassword;
    }

    let i = 1;
    while(i <= inputSlider.value)
    {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
    }
    return genPassword;
}

copyIcon.addEventListener('click', ()=>
{
    if(passBox.value != "" || passBox.value.length >= 1)
    {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "✔";
    copyIcon.title = "Password Copied";
    }

    setTimeout(()=>{
        copyIcon.innerHTML = "content_copy";
        copyIcon.title = "";
    }, 2000)
})