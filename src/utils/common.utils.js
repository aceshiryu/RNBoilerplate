export const numConverted = (num) => {
  if (num < 10) {
    return '0' + num;
  } else {
    return num.toString();
  }
};

export const numConvertedByHundreds = (num) => {
  if (num < 100) {
    return '0' + num;
  } else if (num < 10) {
    return '00' + num;
  } else {
    return num.toString();
  }
};

export const fullName = (first_name, last_name, middle_name = null) => {
  if (first_name === null && last_name === null && middle_name === null) {
    return 'No Name';
  } else {
    if (middle_name !== null && middle_name !== 'null') {
      return first_name + ' ' + middle_name + ' ' + last_name;
    } else {
      return first_name + ' ' + last_name;
    }
  }
};

export const addressHelper = (address, city, country, zipcode) => {
  let address_val = '';
  if (address !== null) {
    address_val = address_val.concat(address + ', ');
  }
  if (city !== null) {
    address_val = address_val.concat(city + ', ');
  }
  if (country !== null) {
    address_val = address_val.concat(country + ', ');
  }
  if (zipcode !== null) {
    address_val = address_val.concat(zipcode + ', ');
  }
  address_val = address_val.slice(0, address_val.length - 2);
  return address_val !== '' ? address_val : 'N/A';
};

export const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export const normalizeText = (text) => {
  if (text !== null) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  return text;
};
