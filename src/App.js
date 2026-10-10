import { useMemo, useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const initialContacts = [
  {
    id: 1,
    name: 'Jane Cooper',
    title: 'Senior Product Designer',
    company: 'Northstar Labs',
    phone: '(415) 555-0147',
    email: 'jane@northstarlabs.com',
    bio: 'Design leader focused on product strategy, UX systems, and customer insight design.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    name: 'Ronald Richards',
    title: 'Account Executive',
    company: 'BrightPath Inc.',
    phone: '(212) 555-0189',
    email: 'ronald@brightpath.com',
    bio: 'Helps B2B teams build stronger client relationships and expanding strategic accounts.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 3,
    name: 'Savannah Nguyen',
    title: 'Marketing Manager',
    company: 'Harbor & Co.',
    phone: '(303) 555-0112',
    email: 'savannah@harborco.com',
    bio: 'Builds campaigns and brand partnerships that connect product launches to real growth.',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80'
  }
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return contacts;
    }

    return contacts.filter((contact) => {
      const searchText = `${contact.name} ${contact.company}`.toLowerCase();
      return searchText.includes(query);
    });
  }, [contacts, searchTerm]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Business Directory</p>
          <h1>Contact Cards Manager</h1>
        </div>

        <label className="search-box" htmlFor="search">
          <span>Search</span>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by name or company"
          />
        </label>
      </header>

      <ContactForm onAddContact={addContact} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
