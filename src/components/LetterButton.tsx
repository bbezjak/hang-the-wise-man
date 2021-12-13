export const LetterButton = (props: {
//   key: string;
  text: string;
  disabled: boolean;
  onClick: () => void;
}) => {
  return (
    <button
    //   key={props.key}
      className="letterButton"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};
