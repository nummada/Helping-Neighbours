import { useState, Component } from "react";
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

class Form extends Component {
    // here props should be data from the database, not placeholders
    constructor(props) {
        super(props)
        this.state = {
            email: 'example@gmail.com',
            name: '',
            address: '',
            phoneNo: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        const { name, email, address, phoneNo } = this.state
        event.preventDefault()

        if (name.length > 25) {
            console.log("numele e prea lung")
        }

        alert(`
        ____Your Details____\n
        Name : ${name}
        Email : ${email}
        Address : ${address}
        Phone No : ${phoneNo}
      `)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        // console.log(event)
    }

    render() {
        return (
            <form className="fields" onSubmit={this.handleSubmit}>
                <FormData name='email' placeholder='Email'
                    value={this.state.email} onChange={this.handleChange} />

                <FormData name='name' placeholder='Name'
                    value={this.state.name} onChange={this.handleChange} />

                <FormData name='address' placeholder='Address'
                    value={this.state.address} onChange={this.handleChange} />

                <FormData name='phoneNo' placeholder='Phone number'
                    value={this.state.phoneNo} onChange={this.handleChange} />

                <div className='profile-save-wrapper'>
                    <Button text="Save" bg_color="bkg-green" type="medium-button" />
                </div>
            </form>
        )
    }
}

export default ProfileContent;
