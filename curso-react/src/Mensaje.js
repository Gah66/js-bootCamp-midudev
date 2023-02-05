const Mensaje = (props) =>{
    console.log(props);
    /* el .message proviene del atributo message de app.js, podria ser cualquier nombre */   
     
    return <h1 style={{color:props.color}}> 
        {props.message}
    </h1>
}
export default Mensaje;