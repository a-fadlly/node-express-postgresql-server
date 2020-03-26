const priority = (sequelize, DataTypes) => {
    const Priority = sequelize.define('priority', {
        name: {
            type: DataTypes.STRING,
        },
    });

    Priority.associate = models => {
        Priority.hasMany(models.Ticket, { foreignKey: 'priority_id', onDelete: 'CASCADE' });
    };

    return Priority;
};

export default priority;
