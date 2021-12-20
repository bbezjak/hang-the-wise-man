interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  tabIndex?: number;
  disabled?: boolean
}

export const Button = ({
  text,
  onClick,
  className = "",
  tabIndex = undefined,
  disabled
}: ButtonProps) => {
  return (
    <button className={"myButton " + className} onClick={onClick} tabIndex={tabIndex} disabled={disabled}>
      {text}
    </button>
  );
};
