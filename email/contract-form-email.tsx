import * as React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
interface EmailTemplateProps {
  message: string;
  senderEmail: string;
}

const ContractFormEmailTemplate: React.FC<EmailTemplateProps> = ({
  message,
  senderEmail,
}) => (
  <Html>
    <Preview>New message form your portfolio site</Preview>
    <Tailwind>
      <Body className="bg-gray-100 text-black">
        <Container>
          <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
            <Heading className="leading-tight">
              You received the following messages form your portfolio site.
            </Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>The sender's email is {senderEmail}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ContractFormEmailTemplate;
