// https://www.npmjs.com/package/ftp-deploy

var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    user: "paintingplacer",                   
    password: "Aci$q122",                      
    host: "188.166.164.26",
    port: 21,
    localRoot: __dirname + '/dist',
    remoteRoot: '/httpdocs',
    include: ['*', '**/*'],      
    exclude: ['test/**', 'fotos/**', 'media/**'], // nicht jedes mal alle bilder neu uploaden
    deleteRemote: false,             
    forcePasv: true                
}
 
// use with promises
ftpDeploy.deploy(config)
    .then(res => console.log('finished:', res))
    .catch(err => console.log(err))
    
