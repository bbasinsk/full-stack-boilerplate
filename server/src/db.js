import db from './models/connection';

export default callback => {
    // connect to a database, then pass it to `callback`:

    // db.sequelize.sync({ force: true }); // will delete all data
    db.sequelize.sync();

    callback(db);
};
