function ContactCard({ contact }) {
  return (
    <article className="contact-card">
      <div className="card-avatar-wrap">
        <img
          className="card-avatar"
          src={contact.avatar}
          alt={contact.name}
          onError={(event) => {
            event.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(contact.name)}&background=4f46e5&color=fff&size=200`;
          }}
        />
      </div>

      <div className="card-main">
        <h3>{contact.name}</h3>
        <p className="role-line">{contact.title}</p>
        <p className="company-line">{contact.company}</p>
      </div>

      <div className="contact-meta">
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>

      <p className="bio">{contact.bio}</p>
    </article>
  );
}

export default ContactCard;
