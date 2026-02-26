import { useRef, useState } from 'react';
import { faArrowUp, faCheck, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContactInput from '@/components/contact/ContactInput';
import Button from '@/components/Button';
import Text from '@/components/Text';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(0);
  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const response = await fetch('https://formspree.io/f/mwpbnqad', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });

    const submitVal = response.ok ? 2 : 1;
    setSubmitted(submitVal);
    setLoading(false);
  };

  if (submitted === 1) {
    return (
      <div className="flex items-center justify-center gap-5 mt-5 w-full p-5 border border-red-900 rounded-lg bg-red-700 bg-opacity-10">
        <FontAwesomeIcon className="text-red-400" icon={faClose} />
        <div>
          <Text Type="p" color="text-red-400">
            There was an issue, please try again later or contact me through mail:
          </Text>
          <a href="mailto:sebastien.bacs1@gmail.com">
            <Text Type="p" color="text-blue-400" extraClass="underline">
              sebastien.bacs1@gmail.com
            </Text>
          </a>
        </div>
      </div>
    );
  }

  if (submitted === 2) {
    return (
      <div className="flex items-center justify-center gap-5 mt-5 w-full p-5 border border-green-900 rounded-lg bg-green-700 bg-opacity-10">
        <FontAwesomeIcon className="text-green-400" icon={faCheck} />
        <Text Type="p" color="text-green-400">
          Message successfully sent
        </Text>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
      <ContactInput
        Tag="input"
        value={form.email}
        label="Email address"
        type="email"
        name="email"
        placeholder="ex. hello@gmail.com"
        onChange={handleChange}
      />
      <ContactInput
        Tag="textarea"
        value={form.message}
        label="Your message"
        type="text"
        name="message"
        placeholder="Requests, questions and feedback appreciated !"
        onChange={handleChange}
      />

      <Button
        label={'Send Message'}
        loading={loading}
        icon={<FontAwesomeIcon icon={faArrowUp} className="text-white rotate-45 w-3 h-3" />}
        position="right"
        type="submit"
      />
    </form>
  );
}
