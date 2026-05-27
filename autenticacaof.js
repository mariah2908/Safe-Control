function Entrar(){
    let cpf=document.getElementById("txtcpf").Value
    let senha=document.getElementById("txtsenha").Value

    if(cpf==="" || senha===""){
        alert("Preencha todos os campos!!!")
        return false
    }
}