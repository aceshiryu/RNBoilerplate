import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const NotificationCounter = (props) => {
  const {count} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
    </View>
  );
};

NotificationCounter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default NotificationCounter;
