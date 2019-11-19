module.exports = {
    validateAuthBody
}

function validateAuthBody(user) {
    let errors = [];

    if(!user.username || user.username.length < 4) {
        errors.push('Please provide a username with at least 4 characters')
    }
    if(!user.password || user.password.length < 8) {
        errors.push('Please provide a password with at least 8 characters')
    }

    return {
        isSuccessful: errors.length > 0 ? false : true,
        errors
    }
}