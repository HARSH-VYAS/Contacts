import ImageInput from "./image-input";
import { Link } from "react-router-dom";
import serialzeform from "form-serialize";

const CreateContact = (onCreateContact)=>{

    const handleSubmit = (e)=>{
        e.preventDefault();
        const values = serialzeform(e.target, {hash: true});
        if(onCreateContact)
        {
            onCreateContact(values);
        }
    };

    return (
        <div>
            <Link className="close-create-contact" to="/"></Link>
            <form onSubmit={handleSubmit}className="create-contact-form">
                <ImageInput className="create-contact-avatar-input"
                name="avatarURL"
                maxHeight={64}/>
                    <div className="create-contact-details">
                        <input type="text" name = "name" placeholder="name"></input>
                        <input type="text" name = "handle" placeholder="handle"></input>
                        <button>Add Contact</button>
                    </div>

            </form>
        </div>
    );
}

export default CreateContact;