const myName = document.getElementById("myname");
const button = document.getElementById("mybtn");


function makeTextSizer(size) {
    function changeSize() {
        myName.style.fontSize = `${size}px`;
    }

    return changeSize;
}

const size12 = makeTextSizer(12);
const size20 = makeTextSizer(20);
const size52 = makeTextSizer(52);
const size5 = makeTextSizer(5);


button.addEventListener('click', size20);