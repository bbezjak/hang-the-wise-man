interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  tabIndex?: number;
}

export const Button = ({
  text,
  onClick,
  className = "",
  tabIndex = undefined,
}: ButtonProps) => {
  return (
    <button className={"myButton " + className} onClick={onClick} tabIndex={tabIndex}>
      {text}
    </button>
  );
};
