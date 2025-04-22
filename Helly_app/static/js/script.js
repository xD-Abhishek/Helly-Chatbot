// function to get the csrf token
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


// function to format the response text
function formatText(text) {
    // code block formatter
    let codeBlockRegex = /```([a-zA-Z]*)\n([\s\S]*?)\n```/g;
    text = text.replace(codeBlockRegex, (match, p1, p2) => {
        if (typeof Prism !== 'undefined' && Prism.languages[p1]) {
            let highlightedCode = Prism.highlight(p2, Prism.languages[p1], p1);
            return `<div class="code-block"><div class="code-header">${p1.toUpperCase()}<button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre class="language-${p1}">${highlightedCode}</pre></div>`;
        } else {
            return `<div class="code-block"><div class="code-header">${p1.toUpperCase()}<button class="copy-btn" onclick="copyCode(this)">Copy</button></div><pre><code>${p2}</code></pre></div>`;
        }
    });

    // inline code formatter
    text = text.replace(/`([\s\S]*?)`/g, '<code class="inline-code">$1</code>');

    // new line formatter
    text = text.replace(/\n/g, "<br>");

    // bold text formatter
    text = text.replace(/\*{2}(.*?)\*{2}/g, "<b>$1</b>");

    return text;
}


// function to copy the content inside code block
function copyCode(btn) {
    let code = btn.parentNode.nextElementSibling.innerText;
    navigator.clipboard.writeText(code);
    btn.innerText = 'Copied!';
    setTimeout(() => {
        btn.innerText = 'Copy';
    }, 1000);
}
