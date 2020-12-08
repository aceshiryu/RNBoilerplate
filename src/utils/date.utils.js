import {numConverted} from './common.helper';

export const datePickerToString = (date) => {
  if (date) {
    const converted_date =
      new Date(date).getFullYear() +
      '-' +
      numConverted(new Date(date).getMonth() + 1) +
      '-' +
      numConverted(new Date(date).getDate());
    return converted_date;
  } else {
    const converted_date =
      new Date().getFullYear() +
      '-' +
      numConverted(new Date().getMonth() + 1) +
      '-' +
      numConverted(new Date().getDate());
    return converted_date;
  }
};

export const dateToString = (date) => {
  if (date) {
    const explode = date.split(' ');
    const explode_date = explode[0].split('-'); // For Date
    return (
      explode_date[0] +
      '-' +
      numConverted(+explode_date[1]) +
      '-' +
      numConverted(+explode_date[2])
    );
  } else {
    const converted_date =
      new Date().getFullYear() +
      '-' +
      numConverted(new Date().getMonth() + 1) +
      '-' +
      numConverted(new Date().getDate());
    return converted_date;
  }
};

export const dateTimePickerToString = (date) => {
  if (date) {
    const convertedTime =
      numConverted(new Date(date).getHours()) +
      ':' +
      numConverted(new Date(date).getMinutes()) +
      ':' +
      numConverted(new Date(date).getSeconds());
    return convertedTime;
  } else {
    const convertedTime =
      numConverted(new Date().getHours()) +
      ':' +
      numConverted(new Date().getMinutes()) +
      ':' +
      numConverted(new Date().getSeconds());
    return convertedTime;
  }
};

export const timeToString = (date) => {
  if (date) {
    const explode = date.split(' ');
    console.log('explode timeToString', explode);
    const explode_date = explode[1].split('-'); // For Time
    return (
      explode_date[0] +
      ':' +
      numConverted(+explode_date[1]) +
      ':' +
      numConverted(0)
    );
  } else {
    const convertedTime =
      numConverted(new Date().getHours()) +
      ':' +
      numConverted(new Date().getMinutes()) +
      ':' +
      numConverted(new Date().getSeconds());
    return convertedTime;
  }
};
