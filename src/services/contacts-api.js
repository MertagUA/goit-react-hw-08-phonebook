import axios from 'axios';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContacts({ name, number }) {
  const response = await axios.post('/contacts', { name, number });
  return response.data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
