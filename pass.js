const passwordBox = document.getElementById("Password");
const length = 12;

    const uppercase = "ABCDEFGHIJKLMNNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const allchar = uppercase + lowercase + number;
    function generate(){
        let Password="";
        Password += uppercase[Math.floor(Math.random() * uppercase.length)];
        Password += lowercase[Math.floor(Math.random() * lowercase.length)];
        Password += number[Math.floor(Math.random() * number.length)];
    
        while(Password.length<length){
         Password += allchar[Math.floor(Math.random() * allchar.length)];
     }
        passwordBox.value = Password;
}
function copy(){
    passwordBox.select();
    document.execCommand("copy");
}
