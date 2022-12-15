import { useState } from 'react';
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([
      ...contacts,
      {
        ...contact,
        id: Date.now(),
        img: require('./assets/images/avatar.png'),
      },
    ]);
  };

  const deleteContactHandler = (id) => {
    const filteredContact = [...contacts].filter(
      (contact) => contact.id !== id
    );
    setContacts(filteredContact);
  };

  return (
    <div className="App">
      <main>
        <Layout>
          <HomePage
            contacts={contacts}
            addContact={addContact}
            deleteContactHandler={deleteContactHandler}
          />
        </Layout>
      </main>
    </div>
  );
}

export default App;
