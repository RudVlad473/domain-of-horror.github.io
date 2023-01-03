function getUserInput() {
  return inputField.value.toString()
}

function validateUserInput(input) {
  if (input === "") {
    validationSpan.innerHTML = "Please add a link"
    console.log("empty link")
    return false
  } else if (urlRegex.test(input) === false) {
    validationSpan.innerHTML = "Your link does not seem correct"

    console.log(`wrong link: ${input}`)
    return false
  } else {
    const liList = Array.from(resultList.getElementsByTagName("li"))
    let isShortened = false

    // liList.forEach(li => {
    //     if (li.innerHTML.includes(input)) {
    //         validationSpan.innerHTML = 'This link is already shortened';
    //         return false;
    //     }
    // })
    for (let i = 0; i < liList.length; i++) {
      if (liList[i].innerHTML.includes(`>${input}<`)) {
        isShortened = true
        validationSpan.innerHTML = "This link is already shortened"
        console.log("is shortened")
        break
      }
    }

    return !isShortened
  }
}

function buttonTimeOut() {
  apiCallBtn.disabled = true
  apiCallBtn.style.backgroundColor = "grey"
  setTimeout(() => {
    apiCallBtn.disabled = false
    apiCallBtn.style.backgroundColor = "#25d3d1"
  }, 2000)
}
