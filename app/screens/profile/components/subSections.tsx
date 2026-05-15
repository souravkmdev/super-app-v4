import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from '../../../globalComponents/CustomText';

const SubSections = () => {
  return (
    <View style = {{flexDirection : 'row' , justifyContent : 'center'}} >
      <Icon name="rocket" size={30} color="#900" />
      <Text>Profile</Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
};

export default SubSections;
