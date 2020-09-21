class Contact {
    name;
    address;
    phone;

    constructor(name /* String */, address /* Address object */, phone /* String */) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    renderUpdate() {
        const updateContactElement = document.createElement('div');
        updateContactElement.innerHTML = `
        <div id="addForm">
        <form id="form">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" value="${this.name}"/>
            <label for="street">Street</label>
            <input type="text" name="street" id="street" value="${this.address.street}"/>
            <label for="city">City</label>
            <input type="text" name="city" id="city" value="${this.address.city}"/>
            <label for="state">State</label>
            <input type="text" name="state" id="state" value="${this.address.state}"/>
            <label for="zip">Zip Code</label>
            <input type="text" name="zip" id="zip" value="${this.address.zip}"/>
            <label for="phone">Phone</label>
            <input type="text" name="phone" id="phone" value="${this.phone}"/>
        </form>
        <div class="actions">
            <button id="cancelUpdateContactButton">Cancel</button>
            <button id="saveUpdateContactButton">Save</button>
        </div>
    </div>
    `;

        const updateForm = document.getElementById('updateForm');
        updateForm.append(updateContactElement);

// Making cancelUpdateContactButton works:
        const cancelUpdateContactButton = document.getElementById('cancelUpdateContactButton');
        cancelUpdateContactButton.addEventListener('click', showAllContacts);

// Making saveUpdateContactButton works:
        const saveUpdateContactButton = document.getElementById('saveUpdateContactButton');
        saveUpdateContactButton.addEventListener('click', this.saveUpdatedContactHandler);
    }
    
    saveUpdatedContactHandler = () => {
        this.name = document.getElementById('name').value;
        this.address.street = document.getElementById('street').value;
        this.address.city = document.getElementById('city').value;
        this.address.state = document.getElementById('state').value;
        this.address.zip = document.getElementById('zip').value;
        this.phone = document.getElementById('phone').value;

        showAllContacts();
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
        updateContactButton.addEventListener('click', this.renderUpdate.bind(this));

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
  //  const updateList = document.getElementById('contacts');
    removeAllChildNodes('contacts');
   // const updateForm = document.getElementById('updateForm');
    removeAllChildNodes('updateForm');
    for (i = 0; i < contacts.length; i++) {
        contacts[i].render();
    }
}

const removeAllChildNodes = (nodeID /* string */) => {
    const parent = document.getElementById(nodeID);
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

showAllContacts();