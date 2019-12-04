const Sequelize = require('sequelize');

module.exports = {
  type: Sequelize.UUID,
  allowNull: false,
  defaultValue: Sequelize.literal( 'uuid_generate_v4()' ),
  primaryKey: true,
};
