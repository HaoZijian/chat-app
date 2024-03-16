import React, { useState } from 'react';
import './admin.css';

const Admin = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Linda', email: 'linda@example.com', createTime: '09:09 2024/5/22' },
    { id: 2, name: 'James', email: 'james@example.com', createTime: '08:09 2024/5/21' },
    { id: 3, name: 'Robert', email: 'robert@example.com', createTime: '07:09 2024/5/20' },
  ]);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [newContact, setNewContact] = useState({ name: '', email: '' });

  const handleAddContact = () => {
    if (!newContact.name || !newContact.email) {
      alert('Please fill in all fields.');
      return;
    }
    setContacts([...contacts, { ...newContact, id: Date.now(), createTime: new Date().toLocaleString() }]);
    setNewContact({ name: '', email: '' });
    setShowModal(false);
  };

  const handleDeleteContact = (contactId) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      setContacts(contacts.filter(contact => contact.id !== contactId));
    }
  };



  return (
    <div className="admin-container">
      <div className="controls">
        <button className="add-contact-button" onClick={() => setShowModal(true)}>
          Add Contact
        </button>
        {/* <button className="export-button" onClick={() => { }}>
          Export
        </button> */}
      </div>
      <table className="contacts-table">
        <thead>
          <tr>
            <th>Contact</th>
            <th>Email</th>
            <th>Create Time</th>
            <th>Operate</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.createTime}</td>
              <td className="operate-cell">
                <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Contact</h2>
            <input
              type="text"
              placeholder="Contact Name"
              value={newContact.name}
              onChange={e => setNewContact({ ...newContact, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={newContact.email}
              onChange={e => setNewContact({ ...newContact, email: e.target.value })}
            />
            <div className='modal-button-area'> 
              <button className='save' onClick={handleAddContact}>Save</button>
              <button className='cancel' onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {/* 分页组件放在这里 */}
    </div>
  );
};

export default Admin;
