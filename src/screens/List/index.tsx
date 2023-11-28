import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {getLists, insertList} from '../../services';
import {useDBContext} from '../../context/DBContext';
import {SQLiteDatabase} from 'react-native-sqlite-storage';
import {CardGroup, FloatingButton, ScreenComponent} from '../../components';
import {styles} from './styles';
import {ListScreenNavigationProp, Lists} from '../../interfaces/screen/Lists';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const List = () => {
  const db = useDBContext() as SQLiteDatabase;

  const [dataList, setDataList] = useState<Lists[]>([]);
  // console.log('dataList ', dataList);

  const navigation = useNavigation<ListScreenNavigationProp>();

  useFocusEffect(
    useCallback(() => {
      getList();
    }, []),
  );

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
            return (
              <CardGroup key={item.id} item={item} navigation={navigation} />
            );
          }}
        />
        <FloatingButton onPress={() => navigation.navigate('NewList', {})} />
      </View>
    </ScreenComponent>
  );
};

export default List;
