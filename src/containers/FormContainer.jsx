import React, { Component } from "react";

/* Import Components */
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";

const proxy = require("http-proxy-middleware");

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newBRC: {
        firstName: "",
        lastName: "",
        gender: "",
        streetAddress: "",
        city: "",
        stateChoice: "",
        zipCode: "",
        phoneNumber: "",
        emailAddress: ""
      },
      genderOptions: ["Male", "Female", "Other"]
    };
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleStreetAddress = this.handleStreetAddress.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleStateChoice = this.handleStateChoice.bind(this);
    this.handleZipCode = this.handleZipCode.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handleEmailAddress = this.handleEmailAddress.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFirstName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newBRC: {
          ...prevState.newBRC,
          firstName: value
        }
      }),
      () => console.log(this.state.newBRC)
    );
  }

  handleLastName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newBRC: {
          ...prevState.newBRC,
          lastName: value
        }
      }),
      () => console.log(this.state.newBRC)
    );
  }

  handleGender(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newBRC: {
          ...prevState.newBRC,
          gender: value
        }
      }),
      () => console.log(this.state.newBRC)
    );
  }

  handleStreetAddress(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newBRC: {
          ...prevState.newBRC,
          streetAddress: value
        }
      }),
      () => console.log(this.state.newBRC)
    );
  }

  handleCity(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newBRC: {
          ...prevState.newBRC,
          city: value
        }
      }),
      () => console.log(this.state.newBRC)
    );
  }

  handleStateChoice(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newBRC: {
          ...prevState.newBRC,
          stateChoice: value
        }
      }),
      () => console.log(this.state.newBRC)
    );
  }

  handleZipCode(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newBRC: {
          ...prevState.newBRC,
          zipCode: value
        }
      }),
      () => console.log(this.state.newBRC)
    );
  }

  handlePhoneNumber(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newBRC: {
          ...prevState.newBRC,
          phoneNumber: value
        }
      }),
      () => console.log(this.state.newBRC)
    );
  }

  handleEmailAddress(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newBRC: {
          ...prevState.newBRC,
          emailAddress: value
        }
      }),
      () => console.log(this.state.newBRC)
    );
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newBRC: {
        firstName: "",
        lastName: "",
        gender: "",
        streetAddress: "",
        city: "",
        stateChoice: "",
        zipCode: "",
        phoneNumber: "",
        emailAddress: ""
      }
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let BRCData = this.state.newBRC;

    fetch(
      "https://army.azure-api.net/brc-forms/BRC_form_to_accession_info",
      {
        method: "POST",
        body: JSON.stringify(BRCData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Ocp-Apim-Subscription-Key": "ea4dfd93562647108a7222cdb338fe9b"
        }
      },
      { mode: "no-cors" }
    ).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"First Name"}
          name={"firstName"}
          value={this.state.newBRC.firstName}
          placeholder={"Enter your first name"}
          handleChange={this.handleFirstName}
        />
        {/* First Name of the user */}
        <Input
          inputType={"text"}
          title={"Last Name"}
          name={"lastName"}
          value={this.state.newBRC.lastName}
          placeholder={"Enter your last name"}
          handleChange={this.handleLastName}
        />
        {/* Last Name of the user */}
        <Select
          title={"Gender"}
          name={"gender"}
          options={this.state.genderOptions}
          value={this.state.newBRC.gender}
          placeholder={"Select Gender"}
          handleChange={this.handleGender}
        />{" "}
        {/* Gender Selection */}
        <Input
          inputType={"text"}
          title={"Street Address"}
          name={"streetAddress"}
          value={this.state.newBRC.streetAddress}
          placeholder={"Enter your street address"}
          handleChange={this.handleStreetAddress}
        />
        {/* Street Address of the user */}
        <Input
          inputType={"text"}
          title={"City"}
          name={"city"}
          value={this.state.newBRC.city}
          placeholder={"Enter your city"}
          handleChange={this.handleCity}
        />
        {/* City of the user */}
        <Input
          inputType={"text"}
          title={"State"}
          name={"state"}
          value={this.state.newBRC.stateChoice}
          placeholder={"Enter your state"}
          handleChange={this.handleStateChoice}
        />
        {/* State of the user */}
        <Input
          inputType={"text"}
          title={"Zip"}
          name={"zip"}
          value={this.state.newBRC.zipCode}
          placeholder={"Enter your zip"}
          handleChange={this.handleZipCode}
        />
        {/* Zip of the user */}
        <Input
          inputType={"text"}
          title={"Phone Number"}
          name={"phoneNumber"}
          value={this.state.newBRC.phoneNumber}
          placeholder={"Enter your phone number"}
          handleChange={this.handlePhoneNumber}
        />
        {/* Phone Number of the user */}
        <Input
          inputType={"text"}
          title={"Email Address"}
          name={"emailAddress"}
          value={this.state.newBRC.emailAddress}
          placeholder={"Enter your email address"}
          handleChange={this.handleEmailAddress}
        />
        {/* Email Address of the user */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
