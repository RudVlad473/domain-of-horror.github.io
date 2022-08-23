function apiCall() {
    const userInput = getUserInput()
    if (!validateUserInput(userInput)) {
        inputField.classList.add('shakeY');
        setTimeout(() => {
            inputField.classList.remove('shakeY');
        }, 300);
        return;
    }
    fetch(`https://api.shrtco.de/v2/shorten?url=${userInput}`)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            else {
                validationSpan.innerHTML = 'Something went wrong';
            }
        })
        .then(data => {
            if (!data) {
                validationSpan.innerHTML = 'Server is not responding';
                return;
            }

            buttonTimeOut();

            const shortedLinkId = `shorted_link${linksCount}`;
            const copyBtnId = `shorted_link-copybtn${linksCount}`;

            resultList.innerHTML += `
            <li class="url-result__links__link">
                <div class="small-container">
                    <span class="input-link">${userInput}</span>
                    <div class="result-wrapper">
                        <span id="${shortedLinkId}" class="result">${data.result.short_link}</span>
                        <div>
                            <button id="${copyBtnId}" class="copy-btn">Copy</button>
                        </div>
                    </div>
                </div>
            </li>
            `;

            const copyBtn = document.getElementById(`${copyBtnId}`);
            copyBtn.addEventListener('click', () => {
                copyBtn.innerHTML = 'Copied!';
                copyBtn.style.backgroundColor = 'grey';
                copyBtn.disabled = true;
                
            })
            const shortedLinkCopyBtn = document.getElementById(`${copyBtnId}`);
            shortedLinkCopyBtn.addEventListener('click', () => {
                const shortenedLink = document.getElementById(`${shortedLinkId}`);
                navigator.clipboard.writeText(shortenedLink.innerHTML);
                alert(`Your copied link is ${shortenedLink.innerHTML}`);
            })

            linksCount++;
            validationSpan.innerHTML = inputField.value = '';
        })
        .catch(error => console.log(error))
}