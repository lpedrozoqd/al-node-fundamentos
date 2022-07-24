function seRompe(){
    return 3 + z;
}

function seRompeAsincrona(){
    setTimeout(()=>{
        return 3 + z;
    },2000);
    return 3 + z;
}

try {
    seRompeAsincrona();
} catch (error) {
    console.error("Ago se rompió: " + error);
}
