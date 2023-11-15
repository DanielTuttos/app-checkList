import React, {createContext, useContext, useState, useEffect} from 'react';
import {createTables, getDBConnection} from '../services';
import {SQLiteDatabase} from 'react-native-sqlite-storage';
import {Text} from 'react-native';

const DbContext = createContext({});

export function useDBContext() {
  return useContext(DbContext);
}

export function DbContextProvider({children}: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [db, setDb] = useState<SQLiteDatabase>({} as SQLiteDatabase);
  useEffect(() => {
    let _db: SQLiteDatabase;
    const getConnection = async () => {
      try {
        _db = await getDBConnection();
        await createTables(_db);
        setDb(_db);
        setIsLoading(false);
      } catch (error) {
        console.log('DbContextProvider', {error});
      }
    };
    getConnection();
    return function () {
      _db.close();
      setDb({} as SQLiteDatabase);
    };
  }, []);

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return <DbContext.Provider value={db}>{children}</DbContext.Provider>;
}
