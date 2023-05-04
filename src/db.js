import Dexie from 'dexie'

const db = new Dexie('myDatabase')

db.version(1).stores({
  users: '++id, email, password'
});

export default db