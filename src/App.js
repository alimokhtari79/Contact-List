import { useState } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  return (
    <div className="App">
      <Layout>
        <HomePage contacts={contacts} addContact={addContact} />
      </Layout>
    </div>
  );
}

export default App;
