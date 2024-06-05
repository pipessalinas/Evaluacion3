var juguetes = [];
juguetes.push(new Juguetes(12345, "Auto de Carrera", 3, "China", "AC123", "Plástico", "Electronico", 10, 1990, "Hasbro", "Nuevo", "Autos"));
juguetes.push(new Juguetes(54321, "Muñeca", 5, "España", "MU456", "Maderia", "Educativo", 5, 2990, "Mattel", "Reacondicionado", "Muñeca"));

function listarJuguetes(){
    var filas = "";
    for (let i = 0; i < juguetes.length; i++) {
        var j = juguetes[i];
        filas = filas + "<tr>";
            filas = filas + "<td>" + j.id + "</td>";
            filas = filas + "<td>" + j.nombre.toUpperCase() + "</td>";
            filas = filas + "<td>" + j.edadRecomendada + "</td>";
            filas = filas + "<td>" + j.pais.toUpperCase() + "</td>";
            filas = filas + "<td>" + j.modelo.toUpperCase() + "</td>";
            filas = filas + "<td>" + j.material.toUpperCase() + "</td>";
            filas = filas + "<td>" + j.categoria.toUpperCase() + "</td>";
            filas = filas + "<td>" + j.cantidadEnStock + "</td>";
            filas = filas + "<td>" + j.precio + "</td>";
            filas = filas + "<td>" + j.marca.toUpperCase() + "</td>";
            filas = filas + "<td>" + j.estado.toUpperCase() + "</td>";
            filas = filas + "<td>" + j.tipo.toUpperCase() + "</td>";
        filas = filas + "</tr>";
    }
    document.getElementById("tabladedatos").innerHTML = filas;
}

document.addEventListener("DOMContentLoaded", function(){ listarJuguetes() });

function limpiarCampos(){
    document.getElementById("txtid").value = "";
    document.getElementById("txtnom").value = "";
    document.getElementById("txteda").value = "";
    document.getElementById("txtpai").value = "";
    document.getElementById("txtmod").value = "";
    document.getElementById("cbomat").value = "";
    document.getElementById("txtcan").value = "";
    document.getElementById("txtpre").value = "";
    document.getElementById("cbomar").value = "";
    document.getElementById("cbtip").value = "";
    document.querySelector('input[name="opcat"]:checked').checked = false;
    document.querySelector('input[name="opest"]:checked').checked = false;
}

function consultar(){
    var id = document.getElementById("txtid").value;
    if(id.trim().length === 0){
        limpiarCampos();
    }else{
        let jugueteEncontrado = false;
        for (let i = 0; i < juguetes.length; i++) {
            var j = juguetes[i];
            if(id == j.id){
                jugueteEncontrado = true;
                document.getElementById("txtnom").value = j.nombre;
                document.getElementById("txteda").value = j.edadRecomendada;
                document.getElementById("txtpai").value = j.pais;
                document.getElementById("txtmod").value = j.modelo;
                document.getElementById("cbomat").value = j.material;
                document.getElementById("txtcan").value = j.cantidadEnStock;
                document.getElementById("txtpre").value = j.precio;
                document.getElementById("cbomar").value = j.marca;
                document.getElementById("cbtip").value = j.tipo;
                if (j.categoria === "Educativo" || j.categoria === "Electronico") {
                    document.getElementById("opcat_edu").checked = true;
                } else {
                    document.getElementById("opcat_ele").checked = true;
                }
                if(j.estado === "Nuevo"){
                    document.getElementById("opest_nuevo").checked = true;
                } else {
                    document.getElementById("opest_reacond").checked = true;
                }
                console.log("Juguete encontrado:", j);
                console.log("Material:", j.material);
                console.log("Marca:", j.marca);
                console.log("Tipo:", j.tipo);
                console.log("Categoría:", j.categoria);
                console.log("Estado:", j.estado);
                break;
            }
        }
        if (!jugueteEncontrado) {
            var msg = "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            msg += "<strong>Juguete no encontrado!</strong>"
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg += "</div>"
            document.getElementById("mensajes").innerHTML = msg;
            limpiarCampos();
        }
    }
}

function registrar(){
    var id = document.getElementById("txtid").value;
    var nombre = document.getElementById("txtnom").value;
    var edadRecomendada = document.getElementById("txteda").value;
    var pais = document.getElementById("txtpai").value;
    var modelo = document.getElementById("txtmod").value;
    var material = document.getElementById("cbomat").value;
    var cantidadEnStock = document.getElementById("txtcan").value;
    var precio = document.getElementById("txtpre").value;
    var marca = document.getElementById("cbomar").value;
    var tipo = document.getElementById("cbtip").value;
    
    var categoria = document.querySelector('input[name="opcat"]:checked').value;
    var estado = document.querySelector('input[name="opest"]:checked').value;

    var errores = "";
    if(id.trim().length === 0){
        errores = errores + "Debe ingresar el ID del juguete! \n";
    }else{
        for (let i = 0; i < juguetes.length; i++) {
            var j = juguetes[i];
            if(id == j.id){
                errores = errores + "El ID ya se encuentra registrado!\n";
                break;
            }
        }
    }

    if(nombre.trim().length < 3 || nombre.trim().length > 30){
        errores = errores + "El nombre debe contener entre 3 y 30 caracteres! \n";
    }

    if(edadRecomendada.trim().length === 0 || isNaN(edadRecomendada) || edadRecomendada < 0){
        errores = errores + "Debe ingresar una edad recomendada válida! \n";
    }

    if(pais.trim().length < 3 || pais.trim().length > 30){
        errores = errores + "El país debe contener entre 3 y 30 caracteres! \n";
    }

    if(modelo.trim().length < 3 || modelo.trim().length > 30){
        errores = errores + "El modelo debe contener entre 3 y 30 caracteres! \n";
    }

    if(material.trim().length === 0){
        errores = errores + "Debe ingresar el material! \n";
    }

    if(cantidadEnStock.trim().length === 0 || isNaN(cantidadEnStock) || cantidadEnStock < 0){
        errores = errores + "Debe ingresar una cantidad en stock válida! \n";
    }

    if(precio.trim().length === 0 || isNaN(precio) || precio < 0){
        errores = errores + "Debe ingresar un precio válido! \n";
    }

    if(marca.trim().length < 3 || marca.trim().length > 30){
        errores = errores + "La marca debe contener entre 3 y 30 caracteres! \n";
    }

    if(tipo.trim().length === 0){
        errores = errores + "Debe ingresar el tipo! \n";
    }

    if(errores !== ""){
        alert(errores)
    }else{
        var j = new Juguetes(id, nombre, edadRecomendada, pais, modelo, material, categoria, cantidadEnStock, precio, marca, estado, tipo);
        juguetes.push(j);

        var msg = "";
        msg += "<div class='alert alert-success alert-dismissible fade show' role='alert'>"
        msg += "<strong>Juguete registrado correctamente!</strong>"
        msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
        msg += "</div>"
        
        document.getElementById("mensajes").innerHTML = msg;
        listarJuguetes();
        limpiarCampos();
    }
}

function modificar(){
    var id = document.getElementById("txtid").value;
    var nombre = document.getElementById("txtnom").value;
    var edadRecomendada = document.getElementById("txteda").value;
    var pais = document.getElementById("txtpai").value;
    var modelo = document.getElementById("txtmod").value;
    var material = document.getElementById("cbomat").value;
    var cantidadEnStock = document.getElementById("txtcan").value;
    var precio = document.getElementById("txtpre").value;
    var marca = document.getElementById("cbomar").value;
    var tipo = document.getElementById("cbtip").value;
    
    var categoria = document.querySelector('input[name="opcat"]:checked').value;
    var estado = document.querySelector('input[name="opest"]:checked').value;

    var errores = "";
    if(id.trim().length === 0){
        errores = errores + "Debe ingresar el ID del juguete! \n";
    }

    if(nombre.trim().length < 3 || nombre.trim().length > 30){
        errores = errores + "El nombre debe contener entre 3 y 30 caracteres! \n";
    }

    if(edadRecomendada.trim().length === 0 || isNaN(edadRecomendada) || edadRecomendada < 0){
        errores = errores + "Debe ingresar una edad recomendada válida! \n";
    }

    if(pais.trim().length < 3 || pais.trim().length > 30){
        errores = errores + "El país debe contener entre 3 y 30 caracteres! \n";
    }

    if(modelo.trim().length < 3 || modelo.trim().length > 30){
        errores = errores + "El modelo debe contener entre 3 y 30 caracteres! \n";
    }

    if(material.trim().length === 0){
        errores = errores + "Debe ingresar el material! \n";
    }

    if(cantidadEnStock.trim().length === 0 || isNaN(cantidadEnStock) || cantidadEnStock < 0){
        errores = errores + "Debe ingresar una cantidad en stock válida! \n";
    }

    if(precio.trim().length === 0 || isNaN(precio) || precio < 0){
        errores = errores + "Debe ingresar un precio válido! \n";
    }

    if(marca.trim().length < 3 || marca.trim().length > 30){
        errores = errores + "La marca debe contener entre 3 y 30 caracteres! \n";
    }

    if(tipo.trim().length === 0){
        errores = errores + "Debe ingresar el tipo! \n";
    }

    if(errores !== ""){
        alert(errores)
    }else{
        let sw = 0;
        for (let i = 0; i < juguetes.length; i++) {
            var j = juguetes[i];
            if(id == j.id){
                sw = 1;
                j.nombre = nombre;
                j.edadRecomendada = edadRecomendada;
                j.pais = pais;
                j.modelo = modelo;
                j.material = material;
                j.categoria = categoria;
                j.cantidadEnStock = cantidadEnStock;
                j.precio = precio;
                j.marca = marca;
                j.estado = estado;
                j.tipo = tipo;
                break;
            }
        }

        var msg = "";
        if(sw === 0){
            msg = "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            msg += "<strong>Juguete no encontrado para modificar!</strong>"
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg += "</div>"
        }else if(sw === 1){
            msg = "<div class='alert alert-success alert-dismissible fade show' role='alert'>"
            msg += "<strong>Juguete modificado correctamente!</strong>"
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg += "</div>"
        }
        document.getElementById("mensajes").innerHTML = msg;
        listarJuguetes();
        limpiarCampos();
    }
}

function eliminar(){
    var id = document.getElementById("txtid").value;
    if(id.trim().length === 0){
        alert("Debe digitar un ID para eliminar!");
        document.getElementById("txtid").focus();
    }else{
        let sw = 0;
        for (let i = 0; i < juguetes.length; i++) {
            var j = juguetes[i];
            if(id == j.id){
                sw = 1;
                juguetes.splice(i, 1);
                break;
            }
        }

        var msg = "";
        if(sw === 0){
            msg = "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            msg += "<strong>Juguete no encontrado para eliminar!</strong>"
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg += "</div>"
        }else if(sw === 1){
            msg = "<div class='alert alert-success alert-dismissible fade show' role='alert'>"
            msg += "<strong>Juguete eliminado correctamente!</strong>"
            msg += "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg += "</div>"
        }
        document.getElementById("mensajes").innerHTML = msg;
        listarJuguetes();
        limpiarCampos();
    }
}






