class Contact {
    name;
    address; // This is an Address object
    phone;

    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    updateContactHandler() {
        console.log(this.name);
    }

    render() {
        const randomID = Math.random().toString();
        const newContactElement = document.createElement('div');
        const addressHtml = this.address.render();

        newContactElement.innerHTML = `
      <div class='contact-element'>
        <b>${this.name}</b>
         ${addressHtml}
        <p>${this.phone}</p>
        <button class= "deleteContactButton" id="deleteContactButton${randomID}">Delete</button>
        <button class="updateContactButton" id="updateContactButton${randomID}">Update</button>
      </div>
    `;
        const contactsList = document.getElementById('contacts');
        contactsList.append(newContactElement);

        const updateContactButton = document.getElementById('updateContactButton' + randomID);
        updateContactButton.addEventListener('click', this.updateContactHandler.bind(this));

        const deleteContactButton = document.getElementById('deleteContactButton' + randomID);
        deleteContactButton.addEventListener('click', deleteContactHandler.bind(null, this.name));
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

    render() {
        const innerHTML = `
        <p>${this.street}</p>
        <p>${this.city}</p>
        <p>${this.state}</p>
        <p>${this.zip}</p>
      `;
      return innerHTML;
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

const deleteContactHandler = (name) => {
    let contactIndex = 0;
    for (const contact of contacts) {
        if (contact.name === name) {
            break;
        }
        contactIndex++;
    }
    contacts.splice(contactIndex, 1);
    const listRoot = document.getElementById('contacts');
    listRoot.children[contactIndex].remove();

    console.log(name);
}

const showAllContacts = () => {
    for (i = 0; i < contacts.length; i++) {
        contacts[i].render();
    }
}

showAllContacts();