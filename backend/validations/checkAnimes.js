const checkName = (req, res, next) => {
    if(!req.body.name){
        res.status(400).json({ error: "Name is required" })
    } else {
        return next()
    }
}

const checkDescription = (req, res, next) => {
    if(!req.body.description){
        res.status(400).json({ error: "Description is required" })
    } else {
        return next()
    }
}


module.exports = { checkName, checkDescription }

// if(newAnime.name && newAnime.description || newAnime.name.length == 0 || newAnime.description.length == 0)