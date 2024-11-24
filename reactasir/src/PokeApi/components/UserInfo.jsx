import React from 'react';
import { useParams } from 'react-router-dom';

const UserInfo = () => {
  const { username } = useParams();

  // Capitalizar el nombre de usuario para mostrarlo correctamente
  const capitalizedName = username.charAt(0).toUpperCase() + username.slice(1);

 // Definir la imagen del avatar según el nombre del usuario
 const avatarImages = {
    antonio: "/Antonio.jpg",  // Ruta a la imagen de Antonio
    domingo: "/Domingo.jpg",  // Ruta a la imagen de Domingo
  };

  // Si el nombre del usuario no está en el objeto, usamos una imagen predeterminada
  const avatarUrl = avatarImages[username.toLowerCase()];

  return (
    <div className="user-info">
      <img src={avatarUrl} alt={`Avatar de ${capitalizedName}`} />
      <h3>{capitalizedName}</h3>
      <p>
        ¡Hola {capitalizedName}! Esta es tu información de contacto personalizada. <br />
        Si necesitas ayuda, por favor contáctanos. ¡Estamos aquí para ayudarte!
      </p>
    </div>
  );
};

export default UserInfo;
