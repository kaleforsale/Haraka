// record_envelope_addresses

// documentation via: haraka -c /usr/lib/node_modules/Haraka -h plugins/record_envelope_addresses

exports.hook_rcpt = function (next, connection, params) {
    var txn = connection.transaction;
    if (txn) {
        txn.add_header('X-Envelope-To', params[0].address());
    }
    next();
}

exports.hook_mail = function (next, connection, params) {
    var txn = connection.transaction;
    if (txn) {
        txn.add_header('X-Envelope-From', params[0].address());
    }
    next();
}
