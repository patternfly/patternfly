module.exports = {
  errorsExceedThreshold: (errors, limit) => errors > limit,
  dec: r => {
    let e;
    const n = r.match(/.{1,4}/g) || [];
    let t = '';
    for (e = 0; e < n.length; e++) t += String.fromCharCode(parseInt(n[e], 16));
    return t;
  }
};
