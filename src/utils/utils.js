import { parse, stringify } from 'qs';

export function saveStorageData(k, v, expire = false) {
  if (typeof Storage !== 'undefined') {
    // 是的! 支持 localStorage  sessionStorage 对象!
    if (expire) {
      sessionStorage.setItem(k, v);
    } else {
      localStorage.setItem(k, v);
    }
  } else {
    // 抱歉! 不支持 web 存储。
  }
}

export function getStorageData(k, expire = false) {
  let result = null;
  if (typeof Storage !== 'undefined') {
    // 是的! 支持 localStorage  sessionStorage 对象!
    if (expire) {
      result = sessionStorage.getItem(k);
    } else {
      result = localStorage.getItem(k);
    }
  } else {
    // 抱歉! 不支持 web 存储。
  }
  return result;
}

export function removeStorageData(k, expire = false) {
  if (typeof Storage !== 'undefined') {
    // 是的! 支持 localStorage  sessionStorage 对象!
    if (expire) {
      sessionStorage.removeItem(k);
    } else {
      localStorage.removeItem(k);
    }
  } else {
    // 抱歉! 不支持 web 存储。
  }
}

export function clearStorageData(expire = false) {
  if (typeof Storage !== 'undefined') {
    // 是的! 支持 localStorage  sessionStorage 对象!
    if (expire) {
      sessionStorage.clear();
    } else {
      localStorage.clear();
    }
  } else {
    // 抱歉! 不支持 web 存储。
  }
}

export function obj2Querys(obj) {
  if (!obj) {
    return '';
  }
  let params = Object.keys(obj).map(k => k + '=' + obj[k]);
  let querys = params.join('&');
  return querys;
}

export function getCurrentQuery() {
  return parse(window.search, { ignoreQueryPrefix: true });
}

export function getQueryVariable(variable) {
  return getCurrentQuery()[variable];
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toGMTString();
  document.cookie = cname + '=' + cvalue + '; ' + expires;
}

function getCookie(cname) {
  if (cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  } else {
    return document.cookie || '';
  }
}

export const cookieUtils = {
  getCookie,
  setCookie,
};
