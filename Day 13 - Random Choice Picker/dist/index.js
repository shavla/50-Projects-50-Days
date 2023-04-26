"use strict";
const textInput = document.querySelector("textarea");
const wordsContainer = document.querySelector(".words");
textInput.addEventListener("keyup", (e) => {
    let words = textInput.value.split(",");
    if (isEnterClicked(e)) {
        textInput.value = "";
        selectRandom();
    }
    else {
        let paragraph = "";
        for (let word of words) {
            if (word) {
                paragraph += `<p>${word}</p>`;
            }
        }
        wordsContainer.innerHTML = paragraph;
    }
});
const selectRandom = () => {
    const quantity = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);
    }, quantity * 100);
};
const pickRandomTag = () => {
    let element = wordsContainer.children[Math.floor(Math.random() * wordsContainer.children.length)];
    return element;
};
const isEnterClicked = (event) => {
    if (event.key == "Enter") {
        return true;
    }
    return false;
};
const highlightTag = (tag) => {
    tag.classList.add('active');
};
const unHighlightTag = (tag) => {
    tag.classList.remove('active');
};
