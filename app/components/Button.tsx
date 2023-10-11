interface ButtonProps {
  title: string;
  onClick: () => void;
}

function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      className="bg-white px-4 py-2 rounded-md text-black font-bold text-lg hover:bg-gray-100"
      onClick={onClick}
    >
      <span>{title}</span>
    </button>
  );
}

export default Button;
