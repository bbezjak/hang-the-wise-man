export const LetterButton = (props: {text: string; disabled: boolean; onClick: () => void;}) => {

  return (
    <button
      className="letterButton"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};
