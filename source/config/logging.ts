const getTimeStamp = (): string => {
  return new Date().toISOString();
};

const info = (namespace: string, message: string, object?: any) => {
  if (object) {
    return console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
  }
  return console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
};

const warn = (namespace: string, message: string, object?: any) => {
  if (object) {
    return console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object);
  }

  return console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
};

const error = (namespace: string, message: string, object?: any) => {
  if (object) {
    return console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object);
  }
  return console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
};

const debug = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
  } else {
    console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
  }
};

export default {
  info,
  warn,
  error,
  debug
};
