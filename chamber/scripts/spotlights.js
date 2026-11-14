const spotlights = document.querySelector('#spotlights');

async function getSpotlights() {
    try {
        const response = await fetch('data/members.json');

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displaySpotlights(data);
        }   else {
            throw new Error(await response.text());
        }
    }   catch (error) {
        console.error(error);
        spotlights.textContent = 'Unable to load businesses.'
    }
}

getSpotlights();

function displaySpotlights(data) {
    spotlights.innerHTML = "";

    const members = data.filter(member =>
        member.membership == 2 || member.membership == 3
    );

    members.sort(() => Math.random() - 0.5);

    members.slice(0, 3).forEach(member => {
        const card = document.createElement("section");
        const businessInfo = document.createElement("div");
        const cardInfo = document.createElement("div");
        const cardDetails = document.createElement("div");
        const name = document.createElement("h2");
        const image = document.createElement("img");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("p");
        const membership = document.createElement("span");

        card.classList.add("business-card");
        businessInfo.classList.add("business-info");
        cardInfo.classList.add("card-info");
        cardDetails.classList.add("card-details");
        address.classList.add("business-address");
        phone.classList.add("business-phone");
        website.classList.add("business-website");
        membership.classList.add("membership");
        membership.classList.add(`membership-${member.membership}`)

        name.textContent = member.name;

        image.setAttribute('src', `images/${member.image}`);
        image.setAttribute('alt', `${member.name} Logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '80');
        image.setAttribute('height', '80');

        address.textContent = member.address;
        phone.textContent = member.phone;
        website.textContent = member.website;

        if (member.membership == 3) {
            membership.textContent = "MEMBERSHIP: Gold";
        } else {
            membership.textContent = "MEMBERSHIP: Silver";
        }

        businessInfo.appendChild(name);
        cardDetails.appendChild(address);
        cardDetails.appendChild(phone);
        cardDetails.appendChild(website);
        cardDetails.appendChild(membership);

        cardInfo.appendChild(image);
        cardInfo.appendChild(cardDetails);
        card.appendChild(businessInfo);
        card.appendChild(cardInfo);

        spotlights.appendChild(card);
    });
}