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