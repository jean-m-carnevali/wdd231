const cards = document.querySelector('#cards');

async function getBusinessData() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) {
            throw new Error("Failed to fetch business data.")
        }

        const data = await response.json();
        
        displayBusiness(data);

    }   catch (error) {
        console.error(error);   
    }
}

const displayBusiness = (business) => {
    business.forEach((business) => {
        const card = document.createElement('div');
        const businessInfo = document.createElement('div');
        const name = document.createElement('h2');
        const tagline = document.createElement('p');

        const cardInfo = document.createElement('div');
        const image = document.createElement('img');
        const cardDetails = document.createElement('div');

        const email = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('p');
        const address = document.createElement('p');
        const membership = document.createElement('p');

        const levels = {
            1: "Members",
            2: "Silver",
            3: "Gold"
        };
        membership.textContent = `MEMBERSHIP: ${levels[business.membership]}`;

        card.classList.add("business-card");
        businessInfo.classList.add("business-info");
        cardInfo.classList.add("card-info");
        cardDetails.classList.add("card-details");
        email.classList.add("business-email");
        address.classList.add("business-address");
        phone.classList.add("business-phone");
        website.classList.add("business-website");
        membership.classList.add("membership");
        membership.classList.add(`membership-${business.membership}`)

        name.textContent = business.name;
        tagline.textContent = business.tagline;

        image.setAttribute('src', `images/${business.image}`);
        image.setAttribute('alt', `${business.name} Logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', '300');

        email.textContent = `${business.email}`;
        phone.textContent = `${business.phone}`;
        website.textContent = `${business.website}`;

        address.textContent = business.address;

        businessInfo.appendChild(name);
        businessInfo.appendChild(tagline);
        cardDetails.appendChild(email);
        cardDetails.appendChild(address);
        cardDetails.appendChild(phone);
        cardDetails.appendChild(website);
        cardDetails.appendChild(membership);
        cardInfo.appendChild(image);
        cardInfo.appendChild(cardDetails);
        card.appendChild(businessInfo);
        card.appendChild(cardInfo);
        cards.appendChild(card);
    });
};

const gridButton = document.querySelector("#grid-button");
const listButton = document.querySelector("#list-button");

gridButton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");

    gridButton.classList.add("active");
    listButton.classList.remove("active");
});

listButton.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");

    listButton.classList.add("active")
    gridButton.classList.remove("active");
});

getBusinessData();