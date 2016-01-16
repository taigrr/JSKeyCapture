var keyStrokes = [];
window.callDefinedFunction = function(callback,keyCodeValues){
    if(typeof callback !== "function")
        throw new TypeError("Expected callback as first argument");
    if(typeof keyCodeValues !== "object" && (!Array.isArray || Array.isArray(keyCodeValues)))
        throw new TypeError("Expected array as second argument");
    var pressedKeysValid = true;
    for(var i = 0; i < keyCodeValues.length; ++i)
        pressedKeysValid = pressedKeysValid && keyStrokes[keyCodeValues[i]];
    if(pressedKeysValid)
        callback();
};
window.addShortcut = function(callback,keyCodeValues){
    if(typeof keyCodeValues === "number")
        keyCodeValues = [keyCodeValues];
    var funct = function(cb,val){
        return function(e){
            keyStrokes[e.keyCode] = true;
            callDefinedFunction(cb,val);
        };        
    }(callback,keyCodeValues);
    window.addEventListener('keydown',funct);
    return funct;
};
window.addEventListener('keyup',function(e){
    keyStrokes[e.keyCode] = false;
});
function releaseAllKeys()
{
	for(var i=0;i< keyStrokes.length;i++)
    {
      keyStrokes[i] = false;
    }
}
function releaseKeys(toRelease)
{
	if(typeof toRelease !== "object" && (!Array.isArray || Array.isArray(toRelease)))
        throw new TypeError("Expected array");
	for(var i=0;i< toRelease.length;i++)
    {
      keyStrokes[toRelease[i]] = false;
    }
}
function releaseKey(toRelease)
{
	keyStrokes[toRelease] = false;
}
var key = {
    A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,
    ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,
    SHIFT:16,CTRL:17,ALT:18,
    ENTER:13,
    LEFT:37,UP:38,RIGHT:39,DOWN:40
};
