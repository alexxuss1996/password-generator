type Heading = {
  title: string;
};
const PasswordHeading = ({ title }: Heading) => {
  return (
    <header>
      <h1 className="text-3xl text-light-gray font-bold text-center pt-8 mb-8">{title}</h1>
    </header>
  );
};

export default PasswordHeading;
