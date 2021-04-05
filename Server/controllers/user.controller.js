const User = require("../models/user.model");
const Notification = require("../models/notifications.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


module.exports.register = (req, res, next) => {
    try {
        const user = new User({
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password
        });
        user.save((err, doc) => {
            if (!err)
                res.send(doc);
            else {
                if (err.code == 11000)
                    res.status(422).send(['Email address already exists']);
                else
                    return next(err)
            }
        });
    } catch {
        return res.status(401).json({
            message: "failed"
        });
    }
}

module.exports.login = (req, res, next) => {
    try {
        let fetchedUser;
        User.findOne({ email: req.body.email })
            .then(user => {
                if (!user) {
                    return res.status(401).json({
                        message: "Auth failed"
                    });
                }
                fetchedUser = user;
                return bcrypt.compareSync(req.body.password, user.password);
            })
            .then(result => {
                if (!result) {
                    return res.status(401).json({
                        message: "Auth failed"
                    });
                }
                const token = jwt.sign({ email: fetchedUser.email, userId: fetchedUser._id },
                    process.env.JWT_SECRET, { expiresIn: '1h' }
                ); //signing token and generating it using JWT, this token will be used for further functions of user and will be used to authenticate user session
                res.status(200).json({
                    token: token,
                    expiresIn: 36000000,
                    userId: fetchedUser._id,
                    userName: fetchedUser.fullName
                });
            })
            .catch(err => {
                console.log(err);
                return res.status(401).json({
                    message: "Auth Failed"
                });
            });
    } catch {
        return res.status(401).json({
            message: "failed"
        });
    }
}


module.exports.createNotification =
    (req, res, next) => {
        try {
            User.findById({ _id: req.userData.userId }, (err, user) => {
                if (err) {
                    console.log("no user");
                    res.status(401).json({ success: false, message: 'soemthing went worng' });
                } else {
                    if (!user) {
                        console.log("no found user");
                        res.status(401).json({ success: false, message: 'user not Found' });
                    } else {
                        const notification = new Notification({
                            header: req.body.header,
                            body: req.body.body,
                            type: req.body.type,
                            userId: req.userData.userId
                        });
                        notification.save((err) => {
                            if (err) {
                                console.log('here');
                                res.status(401).json({ success: false, message: 'something went wrong' });
                            } else {
                                res.status(200).json({ success: true, message: 'notification added' });
                            }
                        });
                    }

                }

            });
        } catch {
            return res.status(401).json({
                message: "failed"
            });
        }

    }


module.exports.getNotifications = (req, res, next) => {

    try {
        const notificationsQuery = Notification.find({ userId: req.userData.userId }).sort({ 'created_at': 1 });
        let fetchedNotifications;

        notificationsQuery
            .then(documents => {
                fetchedNotifications = documents;
                return fetchedNotifications.length;
            })
            .then(count => {
                res.status(200).json({
                    message: "Notifications fetched successfully!",
                    notifications: fetchedNotifications,
                    maxNotifications: count
                });
            });
    } catch {
        return res.status(401).json({
            message: "failed"
        });
    }
}


module.exports.deleteNotification =
    (req, res, next) => {
        try {
            Notification.deleteOne({ _id: req.params.id }).then(result => {
                if (result.n > 0) {
                    res.status(200).json({ message: "Deleted successful!" });
                } else {
                    res.status(401).json({ message: "Not authorized to delete!" });
                }
            });
        } catch {
            return res.status(401).json({
                message: "failed"
            });
        }
    }