function animation(obj, target,callback) {      //callback回调函数

    clearInterval(obj.timer);
    obj.timer = setInterval(function () {       /*div是函数所以创建.timer*/
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            if(callback){
                callback();
            }
            clearInterval(obj.timer);
        } else {
            // obj.style.left = obj.offsetLeft+1+'px' 匀速前进
            obj.style.left = obj.offsetLeft + step + 'px';
        }

    }, 15)
}