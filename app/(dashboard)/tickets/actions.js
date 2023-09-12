'use server';

export async function addTicket(formData) {
  // console.log('hello from the server action');

  // Will create something like {title: 'xxx', body: 'yyy', priority: 'zzz'}
  const ticket = Object.fromEntries(formData);
  console.log('ticket=', ticket);
}
