import _ from 'lodash';

export function isMobile(str) {
  if (!_.isEmpty(str)) {
    const reg = /^(\+?0?86\-?)?1[345789]\d{9}$/;
    return reg.test(str);
  }
  return false;
}
