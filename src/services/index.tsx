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
  return await db.executeSql(query);
}

export async function createTables(db: SQLiteDatabase) {
  await createTable(
    db,
    'CREATE TABLE IF NOT EXISTS "group"(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(255), created_at DATETIME DEFAULT CURRENT_TIMESTAMP, is_fav BOOLEAN DEFAULT false)',
  );
  await createTable(
    db,
    'CREATE TABLE IF NOT EXISTS lists(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR, ischeck BOOLEAN DEFAULT false, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, id_group INTEGER, FOREIGN KEY (id_group) REFERENCES "group"(id) )',
  );
}

export async function insertList(db: SQLiteDatabase, title: string) {
  const insertQuery = `INSERT INTO "group" (title) values ('${title}')`;
  const result = await db.executeSql(insertQuery);
  return result;
}

export async function insertItem(
  db: SQLiteDatabase,
  title: string,
  id_group: number,
) {
  const insertQuery = `INSERT INTO "lists" (title, id_group) values ('${title}', ${id_group})`;
  const result = await db.executeSql(insertQuery);
  return result;
}

export async function getLists(
  db: SQLiteDatabase,
  table: string,
  isWhere?: boolean,
  fieldWhere?: string,
  valueWhere?: any,
) {
  const lists: any[] = [];
  const query = isWhere
    ? `SELECT * FROM "${table}" WHERE ${fieldWhere}='${valueWhere}' ORDER BY created_at DESC`
    : `SELECT * FROM "${table}" ORDER BY created_at DESC`;
  const results = await db.executeSql(query);
  results.forEach(result => {
    for (let index = 0; index < result.rows.length; index++) {
      lists.push(result.rows.item(index));
    }
  });
  // console.log('lists: ', lists);
  return lists;
}

export async function getInformationById(
  db: SQLiteDatabase,
  table: string,
  id: number,
) {
  const result = await db.executeSql(`SELECT * FROM "${table}" WHERE id=${id}`);
  return result[0].rows.item(0);
}
