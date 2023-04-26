"use strict";

const textInput: HTMLTextAreaElement = document.querySelector("textarea");
const wordsContainer: HTMLDivElement = document.querySelector(".words");

textInput.addEventListener("keyup", (e: KeyboardEvent) => {
    let words = textInput.value.split(",");
    if (isEnterClicked(e)) {
        textInput.value = "";
        selectRandom();
    } else {
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
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);
    }, quantity * 100);
}

const pickRandomTag = (): HTMLParagraphElement => {
    let element = wordsContainer.children[Math.floor(Math.random() * wordsContainer.children.length)] as HTMLParagraphElement;
    return element;
}

const isEnterClicked = (event: KeyboardEvent): boolean => {
    if (event.key == "Enter") {
        return true;
    }
    return false;
};

const highlightTag = (tag: HTMLParagraphElement): void => {
    tag.classList.add('active');
}

const unHighlightTag = (tag: HTMLParagraphElement): void => {
    tag.classList.remove('active');
}