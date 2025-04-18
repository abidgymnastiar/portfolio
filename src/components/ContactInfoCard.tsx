interface ContactInfoCardProps {
  icon: React.ReactNode;
  text: string;
}

function ContactInfoCard({ icon, text }: ContactInfoCardProps) {
  return (
    <div className="flex items-center gap-5 bg-tertiary-300 rounded-lg border border-tertiary-500 px-4 py-3 mb-5">
      <div className="w-10 h-10 text-xl text-white flex items-center justify-center bg-gradient-primary rounded-lg">{icon}</div>
      <div className="">
        <p className="text-primaryy-200 text-xs md:text-sm">{text}</p>
      </div>
    </div>
  );
}
export default ContactInfoCard;
