import * as React from "react";

interface EmailTemplateProps {
  message: FormDataEntryValue | null;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ message }) => (
  <div>
    <p>Welcome</p>
  </div>
);

export default EmailTemplate;
