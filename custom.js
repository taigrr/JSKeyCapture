//Custom Ho
addShortcut(function(){
    console.log("You pressed the keys Control, X, and Enter.");    
},[key.CTRL,key.X,key.ENTER]);

addShortcut(function(){
    console.log("You pressed 1, 2, and 4 at the same time.");    
},[key.ONE, key.TWO, key.FOUR]);
//keep in mind that alert() blocks the keyup event, so if you have problems, include the followingin your code:
//to release all keys:

addShortcut(function(){
    alert("You pressed the keys Control, Y, and Enter.");
    releaseAllKeys();
},[key.CTRL,key.Y,key.ENTER]);
//This may not be desireable, as the user might still have keys pressed on the keyboard, and this would require the user to let up all keys.
//It might be better to only release one key, but check out how only releasing select keys might be problematic:
addShortcut(function(){
    alert("You pressed the keys 1, 2, and 3.");
    keyStrokes[key.ONE] = false;
    keyStrokes[key.TWO] = false;
//   keyStrokes[key.THREE] = false;
},[key.ONE,key.TWO,key.THREE]);
