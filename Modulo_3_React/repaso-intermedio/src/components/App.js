import '../styles/App.scss';
import contactList from '../data/contacts.json'
import { useState } from 'react';

function App() {

  //creamos la variable de estado de las búsquedas de la usuaria
  const [search, setSearch] = useState('');

  //creamos la variable de estado de la lista de contactos ya que va a ser modificada y repintada
  //dentro de useState ponemos la lista de contactos que ya tenemos hecha e importada
  //cuando se carga la página, nuestra variable de estado DATA ya debería tener todo lo que contiene ContactList
  const [data, setData] = useState(contactList);

  //Crear tantas variables de estado como inputs tengamos
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  //Creamos las funciones manejadoras a las que llamamos desde cada input con el ONCHANGE
  const handleChangeSearch = (ev) => {
    setSearch(ev.currentTarget.value);
  };

  const handleChangeName = (ev) =>
    setName(ev.currentTarget.value);

  const handleChangeLastName = (ev) =>
    setLastName(ev.currentTarget.value);

  const handleChangeEmail = (ev) =>
    setEmail(ev.currentTarget.value);

  const handleChangePhone = (ev) =>
    setPhone(ev.currentTarget.value);

  //Creamos la función para el botón de enviar
  const handleClick = (ev) => {
    ev.preventDefault();
    //creamos una variable que va a contener el objeto que va a ser el nuevo contacto, con el formato que queremos (que es el formato del resto de los contactos)
    const newContact = {
      "name": name,
      "lastname": lastName,
      "phone": phone,
      "email": email
    };

    //Vamos a modificar el array, añadiendo un nuevo objeto al array. lo vamos a hacer con el spread operator, que nos da el valor actual y luego sumamos el nuevo objeto.
    setData([...data, newContact]);

    //Limpiamos los inputs
    setName('');
    setLastName('');
    setPhone('');
    setEmail('');
  };

  //Antes de mapear y renderizar vamos a filtrar los datos que ya tenemos. 
  //con FILTER vamos a filtrar los datos de mis contactos que estan guardados en DATA.
  //La función FILTER recibe como parámetro OTRA FUNCIÓN de tipo arrow.
  //Del lado izquierdo de la función de tipo arrow vamos a tener cada elemento del array.
  //Una vez tenemos cada elemento del array, a la derecha del arrow definimos las condiciones que tiene que cumplir el listado para ser mostrado.
  //Para filtrados tipo nombre o título, solemos usar INCLUDE.
  const filterData = data.filter((oneContact) => oneContact.name.toLowerCase().includes(search.toLowerCase())
  );

  //SE PODRIA CONCATENER EL FILTER CON EL DATA, INCLUSO VARIOS FILTERS, SIEMPRE TENIENDO EN CUENTA QUE map ES LA ULTIMA FUNCION A EJECUTAR, PORQUE ES EL QUE VA A DIBUJAR EL HTML
  /*const htmlContact = data
  .filter((oneContac)oneContact.name.toLowerCase().includes(search.toLowerCase()))
  oneContact.name.toLowerCase().includes(search.toLowerCase())
  ); ETCETERA
*/


  //La función map recibe como parámetro otra función de tipo arrow.
  const htmlContact = filterData.map((contact, index) => (
    < li className="contact__item" key={index}>
      <p className="contact__name">
        <label className="contact__label">Nombre:</label>{contact.name} {contact.lastname}
      </p>
      <p className="contact__phone">
        <label className="contact__label">Teléfono:</label>
        {/* poner variable dentro de atributo de html, SIEMPRE CON LLAVES, y en este caso con comillas francesas y signo de dolar */}
        <a href={`tel:${contact.phone}`} title="Pulsa aquí para llamar a Lola">
          {contact.phone}
        </a>
      </p>
      <p className="contact__mail">
        <label className="contact__label">Email:</label>
        {/* poner variable dentro de atributo de html, SIEMPRE CON LLAVES, y en este caso con comillas normales y concatenación usando el + */}
        <a href={'mailto:' + contact.email} title="Pulsa aquí para escribir a Lola">
          {contact.email}
        </a>
      </p>
    </li >
  ));

  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Mi agenda de contactos</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre"
            onChange={handleChangeSearch}
            //corroborar que está funcionando con la extensión de chrom (app hooks)
            value={search}
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className="contact__list">
          {htmlContact}
        </ul>

        {/* new contact */}
        <form className="new-contact__form">
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            onChange={handleChangeName}
            value={name}//ESTE VALUE NOS AYUDA A CONTROLAR EL INPUT
          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
            onChange={handleChangeLastName}
            value={lastName}
          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
            onChange={handleChangePhone}
            value={phone}
          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChangeEmail}
            value={email}
          />
          <input className="new-contact__btn" type="submit" value="Añadir" onClick={handleClick} />
        </form>
      </main>
    </div>
  );
}

export default App;
