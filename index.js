module.exports = function encodeUrl(url){
    return url.split('/').map(encodeURIComponent).join('/')
}