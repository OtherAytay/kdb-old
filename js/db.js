import Dexie from 'dexie';

export const db = new Dexie('kinkDB');
db.version(1).stores({
    // Organizational
    categories: '++id, &name',
    brands: '++id, name',
    kinks: '++id, name',
    groups: '++id, name',
    labels: '++id, name',

    // Items
    dildos: '++id, name, brand, price',
    anal_toys: '++id, name, brand, price',
    bdsm: '++id, name, brand, price',
    clothing: '++id, name, brand, price',
    cosmetics: '++id, name, brand, price'
})