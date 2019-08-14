'use strict';
 
module.exports.corsOptions = function getWhitelist(whitelist) {
 return {
 origin(origin, callback) {
 if (whitelist.includes('*') || whitelist.includes(origin)) {
 callback(null, true);
 } else {
 callback(new Error('CORS blocked'));
 }
 }
 ,
 credentials: true,
 maxAge:
 3600,
 }
};