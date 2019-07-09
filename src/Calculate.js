
export default function calculate(currState, btnType) {
    if (btnType === 'AC') {
        return {
            total: '0',
            nextButton: null
        };
    }

    
    var res = parseInt(btnType, 10)

    if (!isNaN(res)) {
        if (currState.nextButton == null) {
            if (currState.total === '0') {
                currState.total = btnType;
            }
            else {
                currState.total = currState.total + parseInt(btnType, 10);
            }
        }
    }

   return currState;
}