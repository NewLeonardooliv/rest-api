const database = require('../infra/database');

exports.getPosts = function () {
    return database.query('SELECT * FROM blog.post ORDER BY id ASC');
};

// exports.deletePosts = function () {
//     return database.query('DELETE FROM blog.post WHERE id=1');
// }