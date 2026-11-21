const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get('firstname'));
console.log(myInfo.get('lastname'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('business'));
console.log(myInfo.get('timestamp'));

document.querySelector('#results').innerHTML = `<p>First Name: ${myInfo.get('firstname')}</p>
<p>Last Name: ${myInfo.get('lastname')}</p>
<p>Email: ${myInfo.get('email')}</p>
<p>Mobile Phone: ${myInfo.get('phone')}</p>
<p>Business Name: ${myInfo.get('business')}</p>
<p>Time of submission: ${myInfo.get('timestamp')}</p>`