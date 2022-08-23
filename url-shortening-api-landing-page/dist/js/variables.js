const inputField = document.getElementById('url-input');
const validationSpan = document.getElementById('link-validation');
const resultList = document.getElementsByClassName('url-result__links')[0];
const urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/;
const apiCallBtn = document.getElementById('api-button');
let linksCount = 1;

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('to-collapse');