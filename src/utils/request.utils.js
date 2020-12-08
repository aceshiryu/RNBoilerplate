/* For REST API */
export const urlencode = (str) => {
  str = (str + '').toString();

  return encodeURIComponent(str)
    .replace(' ', '%20')
    .replace('!', '%21')
    .replace('(', '%28')
    .replace(')', '%29')
    .replace('*', '%2A')
    .replace('{', '%7B')
    .replace(':', '%3A')
    .replace('"', '%22')
    .replace('{', '%7D')
    .replace('[', '%5B')
    .replace(']', '%5D')
    .replace('+', '%20');
};

export const requestFormat = (params) => {
  let with_params = false;
  let newParams = '';
  for (const prop in params) {
    if (params.hasOwnProperty(prop)) {
      if (params[prop] != null && params[prop] !== '') {
        with_params = true;
        if (typeof params[prop] === 'object' || params[prop] instanceof Array) {
          if (params[prop] instanceof Array) {
            params[prop].forEach((value) => {
              if (prop === 'filters') {
                value.key = urlencode(value.key);
                if (!(value.value instanceof Array)) {
                  value.value = urlencode(value.value);
                }
                if (value.hasOwnProperty('condition')) {
                  if (value.condition !== null && value.condition !== '')
                    value.condition = urlencode(value.condition);
                }
                newParams = newParams.concat(
                  `&filters${urlencode('[]')}=` +
                    urlencode(JSON.stringify(value)),
                );
              } else if (prop === 'fields') {
                newParams = newParams.concat(
                  `&fields${urlencode('[]')}=` + urlencode(value),
                );
              } else if (prop === 'sort') {
                value.key = urlencode(value.key);
                value.direction = urlencode(value.direction);
                newParams = newParams.concat(
                  `&sort${urlencode('[]')}=`,
                  urlencode(JSON.stringify(value)),
                );
              }
            });
          } else {
            // typeof params[prop] === 'object'
            newParams = newParams.concat(
              '&' + prop + '=' + JSON.stringify(urlencode(params[prop])),
            );
          }
        } else {
          newParams = newParams.concat(
            '&' + prop + '=' + urlencode(params[prop]).toString(),
          );
        }
      }
    }
  }
  if (with_params) {
    return '?'.concat(newParams.slice(1));
  }
  return newParams;
};
