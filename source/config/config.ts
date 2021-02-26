import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 1337;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

const server = {
  hostname: HOSTNAME,
  port: PORT
};

const config = {
  server: server // server: {hostname: 'localhost', port: 1337}
};

export default config; // config { server: {hostname: 'localhost', port: 1337} };
