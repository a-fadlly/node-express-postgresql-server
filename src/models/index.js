import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'mysql',
  },
);

const models = {
  User: sequelize.import('./user'),
  Ticket: sequelize.import('./ticket'),
  Status: sequelize.import('./status'),
  Priority: sequelize.import('./priority'),
  Type: sequelize.import('./type'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
