var arr= ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];


document.getElementById('click').addEventListener('click',()=>{
    var str= "";
    
    for (let index = 0; index < 6; index++) {
    
        num= arr[Math.floor(Math.random()*arr.length)];
        str += num;
         
    }
    console.log(str);
    document.getElementById('code').innerHTML= str;

    document.getElementsByTagName('body')[0].style.backgroundColor= "#" + str;

})