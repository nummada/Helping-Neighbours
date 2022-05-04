import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Button from "../Button";

const ProfileContent = () => {
    return (
        <div className="profile-page-content">
            <div className="profile-title">
                {"Edit information"}
            </div>
            <div className="change-image">

            </div>

            <div className="form-layout">
                <div className="form-title">
                    Account information
                </div>
                <Form />
            </div>
        </div>
    );
}


const FormData = (props) => {
    const name = props.name
    const placeholder = props.placeholder
    const value = props.value
    const onChange = props.onChange

    return (
        <div className="title-and-field">
            {/* <label htmlFor={name}> */}
            <div className="form-field-title">
                {placeholder}
            </div>
            {/* </label> */}
            <input className="input-layout"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

const Form = () => {

    var { isLoading, isAuthenticated, user } = useAuth0();

    var email = user?.email ?? "your email"
    var email = user?.email ?? "your email"
    var initialName = user?.nickname ?? "gigi"
    var [name, setName] = useState(initialName)
    var [phoneNo, setPhoneNo] = useState(user?.phone_number ?? "phone number")
    const [refugee, setRefugee] = useState(false);

    // setName(user.nickname ?? "gigi")

    const toggleRefugee = () => {
        setRefugee(!refugee)
        console.log("Hei, ", refugee)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // TODO: call la server API
        if (name.length > 25) {
            console.log("numele e prea lung")
        }

        alert(`
        ____Your Details____\n
        Name : ${name}
        Email : ${email}
        Phone No : ${phoneNo}
        Refugee: ${refugee}
      `)

        console.log(user)
    }

    const handleNameChange = (event) => {
        event.preventDefault()
        setName(event.target.value)
    }

    const handlePhoneNoChange = (event) => {
        event.preventDefault()
        setPhoneNo(event.target.value)
    }

    // if (isLoading) {
    //     return (isLoading &&
    //         <div className="items-center">
    //             <ReactLoading type="spinningBubbles" color="#0000FF" height={100} width={50} />
    //         </div>
    //     )
    // }

    return (isAuthenticated &&
        <form className="fields" onSubmit={handleSubmit}>
            <FormData name='email' placeholder='Email'
                value={email} onChange={() => { }} />

            <FormData name='name' placeholder='Name'
                value={name} onChange={handleNameChange} />

            {/* <FormData name='address' placeholder='Address'
                value={address} onChange={handleChange} /> */}

            <FormData name='phoneNo' placeholder='Phone number'
                value={phoneNo} onChange={handlePhoneNoChange} />

            <div className="form-field-title">
                {"Select whether you are a refugee or a benefactor"}
            </div>
            
            <div className="center-anything">
                <button type="button" onClick={toggleRefugee} className={'toggle--button ' + (refugee ? 'toggle--close' : '')}>
                    {refugee ? 'I am a refugee' : 'I am a benefactor'}
                </button>
            </div>


            <div className='profile-save-wrapper'>
                <Button text="Save" bg_color="bkg-green" type="medium-button" />
            </div>
        </form>
    )
}

// export default ProfileContent;
export default ProfileContent;
