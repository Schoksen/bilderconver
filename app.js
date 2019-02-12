  const sharp = require('sharp');
  const fs = require('fs');
  const exportpath = 'images/';
  const importpath = '//vv2/WWS_Apollo_Artikel_Bild/';
  const scriptpath = process.argv[2] || "";
  const pictureheight = parseInt(process.argv[3]) || 120;

  foldercheck(`${importpath}${scriptpath}`);

  function foldercheck(path) {
    fs.readdir(path, (err, files) => {
      files.forEach(file => {
        sh(path, file);
      });
    });
  }

  function sh(path, file) {
    sharp(`${path}/${file}`)
      .resize( {height: pictureheight} )
      .toBuffer()
      .then(data => {fs.writeFileSync(exportpath + file, data);})
      .catch(err => {console.log(`${err}: ${file}`);});
  }
