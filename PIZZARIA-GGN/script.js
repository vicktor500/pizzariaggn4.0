let cont = 0


function cadastrar(){

    let loginStorage = localStorage.getItem("login")
	console.log('estou aqui')
	let entrar = document.gatElementById("login")
	let cadastrar = document.gatElementById("senha")
    if(login === null){
        localStorage.setItem("login","icet2024")
        localStorage.setItem("password","icet2024")  
	
    }  
} 

function userValidation(){

  let loginStorage =   localStorage.getItem('login')

  let passwordStorage = localStorage.getItem('password')

  if(loginStorage === null || passwordStorage === null ){
        alert("realize seu cadastro")
  }

  const loginInput = document.getElementById('login').value

  const passwordInput = document.getElementById('password').value

  if((loginStorage == loginInput  && passwordStorage == passwordInput) &&
    (loginStorage != ''  && passwordStorage != '' )){
        window.location.href="home.html"
  }else{
    if(cont == 0){
      createElementsinId('span','wrongPassword','Login ou Senha errado!')
     cont = 1
    }
  }
}

function newPassword(){
  let password = document.getElementById('new_password').value
  if(password != ''){
    localStorage.setItem('password',password)
    createElementsinId('span','modal_card','Nova senha Gravada')
  }
 
}

function login(){
  let fade = document.querySelector('#fade')
  let modal_card = document.querySelector('#modal_card')
  
  fade.classList.toggle('hide')
  modal_card.classList.toggle('hide')
  
}


function createElementsinId(elementHTML,elementId,message){
    let  spanWrongPassword = document.createElement(elementHTML)

     spanWrongPassword.innerHTML = message

     //spanWrongPassword.style = 'color:red;padding:10px; border:1px solid black;'
     const wrongPasswordId = document.getElementById(elementId)

     //wrongPasswordId.style = 'margin : 20px'
     wrongPasswordId.append(spanWrongPassword)

     console.log(spanWrongPassword)
	 
}


