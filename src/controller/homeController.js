let getHomePage = (req, res) => {
    return res.render('index.ejs')
}
let getAa = (req, res) => {
    return res.send(`aa`)
}

module.exports = {
    a: getHomePage,
    b: getAa
}
