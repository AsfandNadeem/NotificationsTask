module.exports.findOneMongoObject = async(obj, condition) => {
    const found = await obj.findOne(condition).exec();
    if (found) {
        return found;
    }
}

module.exports.saveMongoObject = async(obj) => {
    obj.save((err, doc) => {
        if (!err) {
            return true;
        } else {
            return false;
        }
    });
}

module.exports.findMultipleMongoObjetcs = async(obj, condition, sortingCondition) => {
    const found = await obj.find(condition).sort(sortingCondition).exec();
    if (found) {
        return found;
    }
}