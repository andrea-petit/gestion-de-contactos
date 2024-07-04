class Contacto {
    constructor(nombre, telefono, email){
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }
    
}
  
let listaContactos = [];
  
function agregarContacto(nombre, telefono, email) {
    let nuevoContacto = new Contacto(nombre, telefono, email);
    listaContactos.push(nuevoContacto);
    mostrarContactos();
}
  
function eliminarContacto(nombre) {
    let index = listaContactos.findIndex(contacto => contacto.nombre === nombre);
    if (index !== -1) {
      let contactoEliminado = listaContactos.splice(index, 1)[0];
      mostrarContactos();
    }
}
  
function mostrarContactos() {
    let contactList = document.getElementById("contact-list");
    contactList.innerHTML = "";
  
    listaContactos.forEach(contacto => {
      let li = document.createElement("li");
      li.textContent = `Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}, Email: ${contacto.email}`;
  
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      deleteButton.addEventListener("click", () => eliminarContacto(contacto.nombre));
      li.appendChild(deleteButton);
  
      contactList.appendChild(li);
    });
}
  
let contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
event.preventDefault();
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    agregarContacto(name, phone, email);
    contactForm.reset();
  });
  
mostrarContactos();