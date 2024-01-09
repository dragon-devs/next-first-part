import React from 'react';
import {Html, Body, Container, Tailwind, Text, Link, Preview} from "@react-email/components";

const WelcomeTemplate = ({name}: { name: string }) => {
  return (
      <Html>
        <Preview>Welcome Aboard!</Preview>
        <Tailwind>
          <Body className="font-sans">
            <Container>
              <Text className="font-bold text-3xl text-white">Hello {name}</Text>
              <Link href="https://yourwebsite.com">www.yourwebsite.com</Link>
            </Container>
          </Body>
        </Tailwind>
      </Html>
  );
};

export default WelcomeTemplate;
