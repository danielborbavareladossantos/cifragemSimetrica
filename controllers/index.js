const Blowfish = require('egoroof-blowfish');
const hexToArrayBuffer = require('hex-to-array-buffer');

var postE = (req, res, next) => {

  const bf = new Blowfish('ABCDE', Blowfish.MODE.CBC, Blowfish.PADDING.PKCS5);
  bf.setIv('abcdefgh');
  
  const encoded = bf.encode(req.body.texto);
  const encodedBuffer = Buffer.from(encoded);
  const encrypted = encodedBuffer.toString('hex');

  return res.render('index', { result: encrypted });
}

var postD = (req, res, next) => {

  const bf = new Blowfish('ABCDE', Blowfish.MODE.CBC, Blowfish.PADDING.PKCS5);
  bf.setIv('abcdefgh');

  //var campo = req.body.texto.split(",");
  // const decoded = bf.decode(new Uint16Array(campo), Blowfish.TYPE.STRING);

  const decoded = bf.decode(hexToArrayBuffer(req.body.texto), Blowfish.TYPE.STRING);

  return res.render('index', { result: decoded });
}

module.exports = {
    postE:postE,
    postD:postD
}