import React from "react";
import { Dialog, Pane, Textarea, TextInput, Label } from "evergreen-ui";
import * as emailjs from "emailjs-com";

const Contact = ({ isShown, closeDialog }) => {
  const [contactName, setContactName] = React.useState("");
  const [contactEmail, setContactEmail] = React.useState("");
  const [contactMessage, setContactMessage] = React.useState("");

  const handleContactEmail = () => {
    closeDialog();

    let templateParams = {
      from_name: contactEmail,
      to_name: "ladhruv04@gmail.com",
      subject: "No subject",
      message: contactMessage,
    };
    return (
      emailjs
        .send(
          "service_adb08vl",
          "template_oev3qlk",
          templateParams,
          "user_pWT24LfC8Q68lGSRfjmZS"
        )
        .then(function (response) {
          console.log("success");
        }),
      function (error) {
        console.log(error);
      }
    );
  };

  return (
    <div>
      <Pane>
        <Dialog
          isShown={isShown}
          title="Contact Form"
          onCloseComplete={closeDialog}
          confirmLabel="Submit"
          onConfirm={handleContactEmail}
        >
          <Label
            style={{ display: "flex", width: "90%", margin: "auto" }}
            htmlFor="textarea-2"
            marginBottom={4}
            display="block"
          >
            Name
          </Label>
          <TextInput
            style={{ display: "flex", width: "90%", margin: "auto" }}
            name="text-input-name"
            placeholder="Joe Doe"
            onChange={(e) => setContactName(e.target.value)}
            value={contactName}
          />
          <Label
            style={{ display: "flex", width: "90%", margin: "auto" }}
            htmlFor="textarea-2"
            marginBottom={4}
            display="block"
          >
            Email
          </Label>
          <TextInput
            style={{ display: "flex", width: "90%", margin: "auto" }}
            name="text-input-email"
            placeholder="joe@example.com"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
          <Label
            style={{ display: "flex", width: "90%", margin: "auto" }}
            htmlFor="textarea-2"
            marginBottom={4}
            display="block"
          >
            Message
          </Label>
          <Textarea
            style={{ display: "flex", width: "90%", margin: "auto" }}
            name="textarea-1"
            placeholder="Message you would like to share.."
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
          />
        </Dialog>
      </Pane>
    </div>
  );
};

export default Contact;
