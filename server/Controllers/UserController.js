module.exports.signup = (req, res) => {
    const {email, login, password} = req.body;
};
module.exports.login = (req, res) => {
    const {login, password} = req.body;
}
module.exports.logout = () => {}