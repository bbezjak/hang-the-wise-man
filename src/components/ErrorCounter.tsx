import { useSelector } from "react-redux";

export const ErrorCounter = (props: { errorCount: number }) => {
  const maxErrorNumber: number = useSelector(
    (state: any) => state.maxErrorNumber
  );

  return (
    <div className="d-flex flex-column align-center">
      <span>
          Number of errors made
      </span>
      <span>
        {props.errorCount} / {maxErrorNumber}
      </span>
    </div>
  );
};
