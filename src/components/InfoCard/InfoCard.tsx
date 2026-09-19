type InfoCardProps = {
  name: string;
  description?: string;
  email?: string;
};

const InfoCard = ({ name, description, email }: InfoCardProps) => {
  const getValueClass = (value?: string) => `mt-1 text-sm ${value ? 'text-gray-300' : 'text-gray-500'}`;
  const getValueText = (fieldName: string, value?: string) => value || `no ${fieldName} available.`;

  const descriptionClass = getValueClass(description);
  const descriptionText = getValueText('description', description);

  const emailClass = getValueClass(email);
  const emailText = getValueText('email', email);

  return (
    <div className="font-mono rounded-lg border border-gray-700 bg-gray-800 p-3 shadow-md mt-2">
      <h3 className="font-mono text-lg font-semibold text-white">{name}</h3>
      <p className={emailClass}>{emailText}</p>
      <p className={descriptionClass}>{descriptionText}</p>
    </div>
  );
};

InfoCard.defaultProps = {
  description: '',
  email: ''
};

export default InfoCard;
