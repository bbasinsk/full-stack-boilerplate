// module.exports = {
//   up: (queryInterface, Sequelize) =>
//     queryInterface.createTable('Posts', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       content: {
//         type: Sequelize.TEXT
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     }),
//   down: queryInterface => queryInterface.dropTable('Posts')
// };