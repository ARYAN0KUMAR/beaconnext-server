const Student = require('../models/student');
const jwt = require('jsonwebtoken');

exports.authCheck = async (req, res, next) =>{
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized - Missing Authorization header' });
      }
      jwt.verify(token, process.env.signingkey, (err, student) => {
        if (err) {
          return res.status(403).json({ error: 'Forbidden - Invalid token' });
       }
       //teacher role remaining
       req.student = student;
       next();
    });
};
