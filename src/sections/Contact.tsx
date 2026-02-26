import ContactForm from '@/components/contact/ContactForm';
import ContactBox from '@/components/contact/ContactBox';
import Section from '@/components/Section';
import Text from '@/components/Text';

const Contact = () => {
  return (
    <Section id="contact">
      <ContactBox>
        <Text Type="h2" weight="semibold" color="bg-title-gradient bg-clip-text text-transparent">
          Let&apos;s talk
        </Text>

        <Text Type="p" color="text-white-600" extraClass="mt-3">
          Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
          life, I’m here to help!
        </Text>

        <ContactForm />
      </ContactBox>
    </Section>
  );
};

export default Contact;
