import * as React from "react";

interface EmailTemplateProps {
  message: string;
}

const ContractFormEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ message }) => (
  <p>Welcome</p>
);

export default ContractFormEmailTemplate;
