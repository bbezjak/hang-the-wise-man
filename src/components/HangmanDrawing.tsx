import useWindowSize from "../hooks/useScreenSize";

export const HangmanDrawing = (props: { errors: number }) => {
  const size = useWindowSize();

  return (
    <>
      <div className={`container ${size.breakpoint}`}>
        <div className="bottomLine"></div>
        <div className="verticalLine"></div>
        <div className="upperLine"></div>
        <div className="rope"></div>
        <div
          className={"head " + (props.errors < 1 ? "visibility-hidden" : "")}
        >
          <div className={props.errors >= 6 ? "" : "visibility-hidden"}>
            <div className="eye left-eye"></div>
            <div className="eye right-eye"></div>
            <div className="mouth"></div>
          </div>
        </div>
        <div
          className={"body " + (props.errors < 2 ? "visibility-hidden" : "")}
        ></div>
        <div
          className={
            "right-arm" + (props.errors < 3 ? "visibility-hidden" : "")
          }
        ></div>
        <div
          className={"left-arm" + (props.errors < 4 ? "visibility-hidden" : "")}
        ></div>
        <div
          className={
            "right-leg" + (props.errors < 5 ? "visibility-hidden" : "")
          }
        ></div>
        <div
          className={
            "left-leg " + (props.errors < 6 ? "visibility-hidden" : "")
          }
        ></div>
      </div>
    </>
  );
};
