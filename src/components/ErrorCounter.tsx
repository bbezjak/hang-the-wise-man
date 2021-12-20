import { useMemo } from "react";
import { useSelector } from "react-redux";

interface ErrorCouterProps {
  errorCount: number,
  firstMoveMade: boolean
}

export const ErrorCounter = ({ errorCount, firstMoveMade }: ErrorCouterProps) => {
  const maxErrorNumber: number = useSelector(
    (state: any) => state.maxErrorNumber
  );

  const message = useMemo(() => {
    if(!firstMoveMade) {
      return 'Off we go :D'
    } else {
      if(errorCount === 0) {
        return 'We are doing great :D'
      } else if(errorCount < maxErrorNumber / 2){
        return 'We are still on the right track :)'
      } else if((errorCount >= maxErrorNumber / 2) && (errorCount < maxErrorNumber)) {
        return "We need to be more carefull"
      } else if(errorCount === maxErrorNumber) {
        return "Lets try again, we can do it next time"
      }
    }
  }, [firstMoveMade, errorCount, maxErrorNumber])

  return (
    <div className="error-counter d-flex flex-column align-center">
      <span>
          {message}
      </span>
      <span>
        {errorCount} / {maxErrorNumber}
      </span>
    </div>
  );
};
