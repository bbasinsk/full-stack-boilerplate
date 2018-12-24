import db from './models/connection';

export default callback => {
  // connect to a database, then pass it to `callback`:

  //   db.sequelize.sync({ force: true });
  db.sequelize.sync();

  callback(db);
};
