export const EmailTemplate = ({
  nombre,
  email,
  telefono,
  mensaje,
}) => (
  <div>
    <h1>Nombre: {nombre}</h1>
    <h2>Mail: {email}</h2>
    <h2>Telefono: {telefono}</h2>
    <h3>Mensaje: {mensaje}</h3>
  </div>
);

export default EmailTemplate;
