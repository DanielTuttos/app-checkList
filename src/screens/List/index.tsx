import React, {useEffect, useState} from 'react';
import {View, FlatList, Button} from 'react-native';
import {getLists, insertList} from '../../services';
import {useDBContext} from '../../context/DBContext';
import {SQLiteDatabase} from 'react-native-sqlite-storage';
import {CardGroup, FloatingButton, ScreenComponent} from '../../components';
import {styles} from './styles';
import {Lists} from '../../interfaces/screen/Lists';

const List = () => {
  const db = useDBContext() as SQLiteDatabase;

  const [dataList, setDataList] = useState<Lists[]>([]);
  // console.log('dataList ', dataList);

  useEffect(() => {
    getList();
  }, []);

  // const insert = async () => {
  //   try {
  //     const data = await insertList(
  //       db,
  //       `Hola que tal ${Math.random()}`,
  //       'una nueva descripcion',
  //     );
  //     console.log('data: ', data);
  //   } catch (error) {
  //     console.log('error; ', {error});
  //   }
  // };

  const getList = async () => {
    try {
      const data: Lists[] = await getLists(db, 'group');
      setDataList(data);
    } catch (error) {
      console.log('error; ', {error});
    }
  };
  return (
    <ScreenComponent title="Lista">
      <View style={styles.container}>
        {/* <Button title='ingreso' onPress={insert} /> */}
        <FlatList
          style={styles.list}
          data={dataList}
          renderItem={({item}) => {
            return <CardGroup key={item.id} item={item} />;
          }}
        />
        <FloatingButton onPress={() => console.log('presionando nuevo')} />
      </View>
    </ScreenComponent>
  );
};

export default List;
