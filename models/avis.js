module.exports = (sequelize, DataTypes) => {
    const Avis = sequelize.define('avis', {
            avis: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        })
        return Avis
}