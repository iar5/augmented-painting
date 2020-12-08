// https://www.npmjs.com/package/ftp-deploy

var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    user: "paintingplacer",                   
    password: "Aci$q122",                       // optional, prompted if none given
    host: "188.166.164.26",
    port: 21,
    localRoot: __dirname + '/dist',
    remoteRoot: '/httpdocs',
    include: ['*', '**/*'],      // this would upload everything except dot files
    exclude: ['/test/*', '/fotos/*'], // TODO not working fix                 // e.g. exclude sourcemaps ['dist/**/*.map'] - ** exclude: [] if nothing to exclude **
    deleteRemote: false,              // delete ALL existing files at destination before uploading, if true
    forcePasv: true                 // Passive mode is forced (EPSV command is not sent)
}
 
// use with promises
ftpDeploy.deploy(config)
    .then(res => console.log('finished:', res))
    .catch(err => console.log(err))
    
