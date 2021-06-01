// let count = 0;

// function increase () {
//     count++;
//     document.getElementById("value").innerHTML = count;
//     if (count) {
//         document.getElementById("value").style.color = "green";
//     }
// }

// function decrease () {
//     count--;
//     document.getElementById("value").innerHTML = count;
//     if (count) {
//         document.getElementById("value").style.color = "red";
//     }
// }

// function reset () {
//     document.getElementById("value").innerHTML = "0";
// }

var i = 0;
document.getElementById('value').style.color = 'yellow';

function increase() {
    i++;
    document.getElementById('value').innerHTML = i;
    if (i > 0) {
        document.getElementById('value').style.color = 'green';
    } else if (i == 0) {
        document.getElementById('value').style.color = 'yellow';
    }
}

function decrease() {
    i--;
    document.getElementById('value').innerHTML = i;
    if (i < 0) {
        document.getElementById('value').style.color = 'red';
    } else if (i == 0) {
        document.getElementById('value').style.color = 'yellow';
    }

}

function reset() {
    i = 0;
    document.getElementById('value').innerHTML = i;
    document.getElementById('value').style.color = 'yellow';
}

let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
