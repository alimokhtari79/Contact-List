import { useEffect, useState } from 'react';
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  const [contacts, setContacts] = useState([]);

  // Get Contacts from localStorage when CDM
  useEffect(() => {
    const saveContacts = JSON.parse(localStorage['contacts']);
    if (saveContacts) return setContacts(saveContacts);
  }, []);

  // Set Contacts to localStorage on contacts changes
  useEffect(() => {
    localStorage['contacts'] = JSON.stringify(contacts);
  }, [contacts]);

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
    <main className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage
              contacts={contacts}
              addContact={addContact}
              deleteContactHandler={deleteContactHandler}
            />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Layout>
    </main>
  );
}

export default App;
