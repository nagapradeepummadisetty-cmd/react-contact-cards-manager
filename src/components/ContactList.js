import ContactCard from './ContactCard';

function ContactList({ contacts }) {
  if (!contacts.length) {
    return (
      <section className="panel empty-state">
        <h2>No matching contacts</h2>
        <p>Try a different name or company search term.</p>
      </section>
    );
  }

  return (
    <section className="contact-list">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </section>
  );
}

export default ContactList;
