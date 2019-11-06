 

export function Toggle() {
    var x = document.getElementById("mynav");  
    if (x.className === 'nav-items') {
        x.className = 'nav-items-responsive'; 
    }
    else {
        x.className = 'nav-items'; 
    } 
}