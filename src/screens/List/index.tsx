import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {getLists, insertList} from '../../services';
import {useDBContext} from '../../context/DBContext';
import {SQLiteDatabase} from 'react-native-sqlite-storage';

const List = () => {

  const db = useDBContext() as SQLiteDatabase;
  console.log('db en app: ', db);

  const insert = async () => {
    try {
      const data = await insertList(db, `Hola que tal ${Math.random()}`, 'una nueva descripcion');
      console.log('data: ', data);
    } catch (error) {
      console.log('error; ', {error});
    }
  };

  const getList = async () => {
    try {
      const data = await getLists(db);
    } catch (error) {
      console.log('error; ', {error});
    }
  };
  return (
    <SafeAreaView>
      <Text>Hello</Text>
      <Button title="insertar lista" onPress={insert} />
      <Button title="obtener lista" onPress={getList} />
    </SafeAreaView>
  );
};

export default List;