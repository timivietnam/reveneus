import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateEditProject from 'screens/project/CreateEditProject';
import ProjectDetails from 'screens/project/ProjectDetails';
import ProjectList from 'screens/project/ProjectList';
import { ProjectStackParamList } from './types';

const Stack = createStackNavigator<ProjectStackParamList>();

const ProjectNavigator: React.FC = React.memo(() => {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName="ProjectList"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="ProjectList" component={ProjectList} />
        <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
        <Stack.Screen
          name="CreateEditProject"
          component={CreateEditProject}
          initialParams={{ project: undefined }}
        />
      </Stack.Navigator>
    </View>
  );
});

export default ProjectNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
