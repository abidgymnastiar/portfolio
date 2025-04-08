import { IoMdMail } from "react-icons/io";
import { ABOUT_ME } from "../utils/Data";
import ContactInfoCard from "../components/ContactInfoCard";

function ContactMe() {
  return (
    <section id="contact">
      <div className="container mx-auto p-18 py-6">
        <div className="w-full lg:[60vw] mx-auto">
          <h4 className="section-title">Contact Me</h4>

          <p className="text-sm text-center mt-4 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            dolores, ullam necessitatibus fuga optio odio cum et! Tempora libero
            maxime quaerat accusamus? Amet illum iste vero exercitationem
            voluptatem, ut omnis! Eius, debitis ut eligendi accusamus ab
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
