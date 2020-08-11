const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    })

    User.beforeCreate((user, options) => {
        return bcrypt.hash(user.password, 10, null).then(hash => {
            user.password = hash
        }) 
    })

    User.prototype.comparePassword = async function (password) {
        return await bcrypt.compare(password, this.password)
    }

    return User
}