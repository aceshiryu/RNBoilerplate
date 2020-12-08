import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './styles';

// React
import PropTypes from 'prop-types';

const ScreenLoadingIndicator = (props) => {
  const {content} = props;
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color="#3399FF" />
      {content !== undefined && (
        <View style={styles.messageContainer}>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      )}
    </View>
  );
};

ScreenLoadingIndicator.propTypes = {
  content: PropTypes.string,
};

export default React.memo(ScreenLoadingIndicator, (prevProps, nextProps) => {
  return nextProps.content === prevProps.content;
});
