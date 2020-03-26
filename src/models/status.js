const status = (sequelize, DataTypes) => {
    const Status = sequelize.define('status', {
        name: {
            type: DataTypes.STRING,
        },
    });

    Status.associate = models => {
        Status.hasMany(models.Ticket, { foreignKey: 'status_id', onDelete: 'CASCADE' });
    };

    return Status;
};

export default status;
