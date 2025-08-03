interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: string;
}

const Button: React.FC<ButtonProps> = ({ buttonLabel, buttonBackgroundColor }) => {
  return (
    <button
      className={`bg-${buttonBackgroundColor}-500 hover:bg-${buttonBackgroundColor}-600 text-white font-semibold py-2 px-6 rounded-full text-lg transition duration-300`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
