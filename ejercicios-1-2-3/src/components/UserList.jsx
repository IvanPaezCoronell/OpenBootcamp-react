
import Contacto from './contacto/Contacto';
import { ContactoInfo } from './contacto/contacto.class'

const UserList = () => {

    const defaultUser = new ContactoInfo('Ivan', 'Paez', 'ipaez@gmail.com', true);


    return (
        <div>

            <div>
                Informacion de contacto
            </div>
            <Contacto  info={defaultUser} />

        </div>
    )
}

export default UserList
