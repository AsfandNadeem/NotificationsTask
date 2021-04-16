const User = require("../models/user.model");
const Notification = require("../models/notifications.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const mongoF = require("../middleware/mongoFunctions");


/* This function is used for registering a user
   fullname, email and password are required in request's body
*/
module.exports.register = (req, res, next) => {
        try {
            const user = new User({
                fullName: req.body.fullName,
                email: req.body.email,
                password: req.body.password
            });
            user.save((err, doc) => {
                if (!err)
                    return res.status(201).json({ success: true, message: 'user added' });
                else {
                    if (err.code == 11000)
                        return res.status(422).json({ success: false, message: 'Email Already Exists' });
                    else
                        return next(err)
                }
            });
        } catch {
            return res.status(500).json({
                success: false,
                message: "failed"
            });
        }
    }
    /* This function is used for login a user
       email and password are required in request's body
    */
module.exports.login = async(req, res, next) => {
    try {
        let fetchedUser;
        const user = await mongoF.findOneMongoObject(User, { 'email': req.body.email });
        if (user) {
            fetchedUser = user;
            const passwordValidated = await bcrypt.compareSync(req.body.password, user.password);
            if (!passwordValidated) {
                return res.status(401).json({
                    success: false,
                    message: "Auth failed"
                });
            } else {
                const token = jwt.sign({ email: fetchedUser.email, userId: fetchedUser._id },
                    process.env.JWT_SECRET, { expiresIn: '1h' }
                );
                return res.status(200).json({
                    token: token,
                    expiresIn: 3600000
                });

            }
        } else {
            return res.status(401).json({
                success: false,
                message: "Auth failed"
            });
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "failed"
        });
    }
}

/* This function is used for creating a notification
   header, body and type are required in request's body
   user's ID is extracted by decoding the token from header
*/
module.exports.createNotification = async(req, res, next) => {
    try {
        const user = await mongoF.findOneMongoObject(User, { _id: req.userData.userId });
        if (user) {
            const notification = new Notification({
                header: req.body.header,
                body: req.body.body,
                type: req.body.type,
                userId: req.userData.userId
            });

            notification.save((err) => {
                if (err) {
                    res.status(400).json({ success: false, message: 'something went wrong' });
                } else {
                    res.status(201).json({ success: true, message: 'notification added' });
                }
            });
        } else {
            res.status(404).json({ success: false, message: 'user not Found' });
        }
    } catch {
        return res.status(500).json({
            message: "failed"
        });
    }

}

/* This function is used for retrieving all notifications of a user
   user's ID is extracted by decoding the token from header
*/
module.exports.getNotifications = async(req, res, next) => {
    try {
        const notifications = await mongoF.findMultipleMongoObjetcs(Notification, { userId: req.userData.userId }, { 'created_at': -1 });
        if (notifications.length > 0) {
            res.status(200).json({
                message: "Notifications fetched successfully!",
                notifications: notifications,
                maxNotifications: notifications.length
            });
        } else {
            return res.status(500).json({
                success: false,
                message: "failed"
            });
        }
    } catch {
        return res.status(500).json({
            success: false,
            message: "failed"
        });
    }
}

/* This function is used for deleting a notifications of a user
   The notification id is a query parameter
   user's ID is extracted by decoding the token from header
*/
module.exports.deleteNotification =
    (req, res, next) => {
        try {
            Notification.deleteOne({ _id: req.params.id, userId: req.userData.userId }).then(result => {
                if (result.n > 0) {
                    res.status(200).json({ message: "Deleted successful!" });
                } else {
                    res.status(401).json({
                        success: false,
                        message: "Not authorized to delete!"
                    });
                }
            });
        } catch {
            return res.status(500).json({
                success: false,
                message: "failed"
            });
        }
    }

/* This function is used for editing a notifications of a user
   The notification id is a query parameter
   user's ID is extracted by decoding the token from header
*/
module.exports.updateNotification = async(req, res, next) => {
    try {
        const notificationObj = await mongoF.findOneMongoObject(Notification, { _id: req.params.id });
        if (notificationObj) {
            const notification = ({
                _id: notificationObj._id,
                header: req.body.header,
                body: req.body.body,
                type: req.body.type
            });
            const updated = await Notification.updateOne({ _id: notification._id, userId: req.userData.userId }, notification);
            if (updated.nModified > 0) {
                return res.status(201).json({ success: true, message: 'Notification Updated' });
            } else {
                res.status(401).json({
                    success: false,
                    message: "Unable to update!"
                });
            }
        } else {

            res.status(404).json({ success: false, message: 'notification not Found' });
        }
    } catch {
        return res.status(500).json({
            success: false,
            message: "failed"
        });
    }
}