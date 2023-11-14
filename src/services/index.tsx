import {
  SQLiteDatabase,
  enablePromise,
  openDatabase,
} from 'react-native-sqlite-storage';
import {Lists} from '../interfaces/Lists';

enablePromise(true);

const DATABASE_NAME = 'checkList.db';

export async function getDBConnection() {
  const db = await openDatabase({name: DATABASE_NAME, location: 'default'});
  return db;
}

export async function createTable(db: SQLiteDatabase) {
  const query =
    'CREATE TABLE IF NOT EXISTS lists(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(255), description VARCHAR)';
  return await db.executeSql(query);
}

export async function initDataBase() {
  try {
    const db = await getDBConnection();
    await createTable(db);
    db.close();
  } catch (error) {
    console.log(error);
  }
}

export async function insertList(db: SQLiteDatabase, title: string, description?: string) {
  const insertQuery = `INSERT INTO lists (title, description) values ('${title}', '${description}')`;
  const result = await db.executeSql(insertQuery);
  return result;
}

export async function getLists(db: SQLiteDatabase) {
  const lists: Lists[] = [];
  const results = await db.executeSql('SELECT * FROM lists');
  console.log('results: ', results);
  results.forEach(result => {
    for (let index = 0; index < result.rows.length; index++) {
      lists.push(result.rows.item(index));
    }
  });
  console.log('lists: ', lists);
  return lists;
}
