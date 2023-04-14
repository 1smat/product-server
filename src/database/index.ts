import { DB_HOST, DB_PORT, DB_DATABASE } from '@config';

interface IDbConnection {
  url: string,
  options: {}
}

export const dbConnection: IDbConnection = {
  url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
};
