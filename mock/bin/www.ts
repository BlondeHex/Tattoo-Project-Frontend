import app from '../src/index';
import http from 'http';
import log from 'loglevel';

log.setDefaultLevel('info');
const server = http.createServer(app);
const port = 3004;

const onError = (error: NodeJS.ErrnoException) => {
  const { code, syscall } = error;
  if (syscall !== 'listen') throw error;
  switch (code) {
    case 'EACCESS':
      log.error('Access denied.');
      break;
    case 'EADDRINUSE':
      log.error('Address in use.');
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  log.info('Listening on port', port);
};

const onConnection = (socket: NodeJS.Socket) => {};

const onClose = () => {
  log.info('Client disconnected');
};

const onUnhandledRejection = (reason: any, promise: Promise<any>) => {
  log.error('Unhandle rejection in promise:', reason);
};

const onUnhandleException = (error: Error) => {
  log.error('Unhandle error', error);
};

server.on('error', onError);
server.on('listening', onListening);
server.on('close', onClose);
server.on('connection', onConnection);
process.on('unhandledRejection', onUnhandledRejection);
process.on('uncaughtException', onUnhandleException);

server.listen(port);
