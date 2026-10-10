import { useState } from 'react';

const emptyForm = {
  name: '',
  title: '',
  company: '',
  phone: '',
  email: '',
  bio: '',
  avatar: ''
};

function ContactForm({ onAddContact }) {
  const [formData, setFormData] = useState(emptyForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const company = formData.company.trim();
    const email = formData.email.trim();

    if (!name || !company || !email) {
      alert('Please fill in name, company, and email.');
      return;
    }

    const newContact = {
      id: Date.now(),
      name,
      title: formData.title.trim() || 'Professional',
      company,
      phone: formData.phone.trim() || 'Not provided',
      email,
      bio: formData.bio.trim() || 'No bio added yet.',
      avatar:
        formData.avatar.trim() ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4f46e5&color=fff&size=200`
    };

    onAddContact(newContact);
    setFormData(emptyForm);
  };

  return (
    <section className="panel form-panel">
      <div className="section-heading">
        <h2>Add Contact</h2>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            <span>Full Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alex Morgan"
            />
          </label>

          <label>
            <span>Job Title</span>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Product Manager"
            />
          </label>

          <label>
            <span>Company</span>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. PixelWorks"
            />
          </label>

          <label>
            <span>Phone</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. (555) 123-4567"
            />
          </label>

          <label className="full-width">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. alex@pixelworks.com"
            />
          </label>

          <label className="full-width">
            <span>Avatar URL</span>
            <input
              type="url"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
              placeholder="Paste an image URL (optional)"
            />
          </label>

          <label className="full-width">
            <span>Short Bio</span>
            <textarea
              name="bio"
              rows="4"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Add a few details about this contact"
            />
          </label>
        </div>

        <button type="submit" className="submit-button">
          Add Contact
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
