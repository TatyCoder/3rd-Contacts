class Contact {
    name;
    address; // This is an Address object
    phone;

    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    render() {
        const randomID = Math.random().toString();
        const newContactElement = document.createElement('div');
        newContactElement.innerHTML = `
      <div class='contact-element'>
        <b>${this.name}</b>
        <p>${this.address.street}</p>
        <p>${this.address.city}</p>
        <p>${this.address.state}</p>
        <p>${this.address.zip}</p>
        <p>${this.phone}</p>
        <button id="deleteContactButton" onclick="deleteContactHandler('${this.name}')">Delete</button>
        <button class="updateContactButton" id="updateContactButton${randomID}">Update</button>
      </div>
    `;
        const contactsList = document.getElementById('contacts');
        contactsList.append(newContactElement);

        // const updateContactButton = document.getElementById('updateContactButton' + randomID);
        // updateContactButton.addEventListener('click', updateContactHandler.bind(null, this.name));
    }
}

class Address {
    street;
    city;
    state;
    zip;

    constructor(street, city, state, zip) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}

const contacts = [
    new Contact(
        'Carl',
        new Address('Ruby', 'Dawn', 'Ga', '30534'),
        '6785551212'
    ),
    new Contact(
        'Taty',
        new Address('Lane', 'Ville', 'Ga', '30477'),
        '4703187267'
    ),
    new Contact(
        'Lila',
        new Address('Rock', 'Garden', 'Ga', '77422'),
        '7707707700'
    )
];

console.log(contacts);

// An alternative way of doing it:
// const contacts2 = {};
// const contactsArray = [];

// const myAddress = new Address('Ruby', 'Dawn','Ga', '30534');
// const myContact = new Contact ('Carl', myAddress, '6785551212');
// contactsArray.push(myContact);
// //const contacts2 = {contacts: contactsArray}; or
// contacts2.contacts = contactsArray;

const showAllContacts = () => {
    for (i = 0; i < contacts.length; i++) {
        contacts[i].render();
    }
}

showAllContacts();