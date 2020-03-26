const type = (sequelize, DataTypes) => {
    const Type = sequelize.define('type', {
        name: {
            type: DataTypes.STRING,
        },
    });

    Type.associate = models => {
        Type.hasMany(models.Ticket, { foreignKey: 'type_id', });
    };

    return Type;
};

export default type;
