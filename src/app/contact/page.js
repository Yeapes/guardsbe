import ContactHero from "./ContactHero/ContactHero";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm";
const baseUrl = process.env.BASE_URL;

const ContactPage = async () => {
  const settingsRes = await fetch(`${baseUrl}/settings`);
  const dataFromSettingsRes = await settingsRes.json();
  const settingsData = dataFromSettingsRes.data[0];
  return (
    <div>
      <ContactHero />
      <ContactInfo settingsData={settingsData} />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
