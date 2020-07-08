const autoGrow = (textArea) => {
    if(textArea instanceof HTMLTextAreaElement) {
        textArea.style.height = 0;
        textArea.style.height = `${textArea.scrollHeight}px`;
    }
};

const initializeTextAreaAutoGrow = (textArea) => {
    if(textArea instanceof HTMLTextAreaElement) {
        textArea.style.resize = "none";
        textArea.addEventListener("input", e => {
            autoGrow(textArea);
        });

        autoGrow(textArea);
    }
};

export default autoGrow;
export {initializeTextAreaAutoGrow};