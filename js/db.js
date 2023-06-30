import Dexie from 'dexie';

export const db = new Dexie('kinkDB');
db.version(1).stores({
    
})