main();

function main() {
    const tables = document.querySelector('.database-tables');
    const codePlace = document.querySelector('.source code');
    const copyButton = document.querySelector('button.copy-code');

    const htmlCode = tables.innerHTML;
    const formattedHtmlCode = escapeHtml(htmlCode);
    codePlace.innerHTML = formattedHtmlCode;

    copyButton.addEventListener('click', () => {
       navigator.clipboard.writeText(htmlCode).then(r => {
           console.log(r);
           copyButton.textContent = 'Copied!';
           copyButton.setAttribute('disabled', 'disabled');
       });
    });
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/\n( )*\n/g, "<br/>")
        .replace(/\n/g, "<br/>")
        .replace(/  /g, "&nbsp;");
}

