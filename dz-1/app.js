// const InnInput = document.querySelector(".InnInput");
// const InnCheck = document.getElementsByClassName("InnCheck");
// const InnResult = document.querySelector(".InnResult");

// const InnValidate = /^0\d{13}$|1\d{13}$/;

// InnCheck[0].addEventListener("click", () => {
//   if (InnValidate.test(InnInput.value)) {
//     InnResult.innerText = "ok";
//     InnResult.style.color = "green";
//   } else {
//     InnResult.innerText = "not  ok";
//   }
// });


const miniBox = document.querySelector('.red_box')
const click = document.querySelector('.click')

let position = 0;

const moveBox = () => {
    position ++;
    miniBox.style.marginTop = `${position}px`
    if (position < 30){
        return moveBox();
    }else if (position >= 450){
        position = 0
    }else {
        position += 30
    }
    console.log(position)
}
click.addEventListener('click', () => {
    moveBox()
})