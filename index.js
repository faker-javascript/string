export default function string(options) {
    options = options || {};
    let length = options.length || 64;
    let keyspace = options.keyspace || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let pieces = [];
    if (length < 0) {
        length = 1;
    }
    for (var i = 0; i < length; i++) {
        pieces.push(keyspace.charAt(Math.floor(Math.random() * keyspace.length)));
    }
    return pieces.join('');
};