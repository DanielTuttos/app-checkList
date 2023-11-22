import {
  SQLiteDatabase,
  enablePromise,
  openDatabase,
} from 'react-native-sqlite-storage';
import {Lists} from '../interfaces/screen/Lists';

enablePromise(true);

const DATABASE_NAME = 'checkList.db';

export async function getDBConnection() {
  const db = await openDatabase({name: DATABASE_NAME, location: 'default'});
  return db;
}

export async function createTable(db: SQLiteDatabase, query: string) {
  // const query =
  //   'CREATE TABLE IF NOT EXISTS lists(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(255), description VARCHAR, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)';
  return await db.executeSql(query);
}

export async function createTables(db: SQLiteDatabase) {
  await createTable(
    db,
    'CREATE TABLE IF NOT EXISTS "group"(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(255), description VARCHAR, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, is_fav BOOLEAN DEFAULT false)',
  );
  await createTable(
    db,
    'CREATE TABLE IF NOT EXISTS lists(id INTEGER PRIMARY KEY AUTOINCREMENT, description VARCHAR, ischeck BOOLEAN DEFAULT false, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, id_group INTEGER, FOREIGN KEY (id_group) REFERENCES "group"(id) )',
  );
}

export async function insertList(
  db: SQLiteDatabase,
  title: string,
  description?: string,
) {
  const insertQuery = `INSERT INTO "group" (title, description) values ('${title}', '${description}')`;
  const result = await db.executeSql(insertQuery);
  return result;
}

export async function getLists(db: SQLiteDatabase, table: string) {
  const lists: any[] = [];
  const results = await db.executeSql(`SELECT * FROM "${table}"`);
  results.forEach(result => {
    for (let index = 0; index < result.rows.length; index++) {
      lists.push(result.rows.item(index));
    }
  });
  // console.log('lists: ', lists);
  return lists;
}
