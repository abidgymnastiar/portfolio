import { IoMdMail } from "react-icons/io";
import { ABOUT_ME } from "../utils/Data";
import ContactInfoCard from "../components/ContactInfoCard";

function ContactMe() {
  return (
    <section id="contact" className="bg-tertiary-600">
      <div className="w-full max-w-[1440px] mx-auto p-18 py-10">
        <div className="w-full lg:[60vw] mx-auto">
          <h4 className="section-title">Kontak Saya</h4>

          <p className="text-sm text-center mt-4 leading-6 text-primaryy-300">
            Jangan ragu untuk menghubungi saya melalui informasi kontak berikut
            untuk diskusi lebih lanjut atau kerja sama.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 mt-16">
          <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
          <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.phone} />
          <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.address} />
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
