const bcrypt = require('bcryptjs')

function hashedPassword(user, options) {
    const SALT_FACTOR = 10
    if (!user.changed('password')) { return }

    return bcrypt.hash(user.password, SALT_FACTOR, null)
                 .then(hash => user.setDataValue('password', hash))
}
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    }, {
        hooks: {
            beforeCreate: hashedPassword,
            beforeUpdate: hashedPassword,
            beforeSave: hashedPassword
        }
    })

    User.prototype.comparePassword = function (password) {
        bcrypt.compare(password, this.password, (err, res) => {
            console.log(password, this.password)
            if (res) {
                console.log(res)
                return true
            } else {
                return false
            }
        })
       
        return true
    }

    return User
}