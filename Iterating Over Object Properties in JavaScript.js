let object={
    laptop:"core i7 third generation",
    model:"Hp",
    Graphiccard:"AMD reazon 9656",
    Ram:"16 GB",
    Harddrive:"256gb",
    SSD:"120gb"
}
for(let key in object){
    if(object.hasOwnProperty(key)){
        console.log(key +":"+ object[key])
        }
}