import React, { useReducer } from "react";
import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
} from "./actions";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <form name="Cal">
        <TotalDisplay value={state.total} />
        <div className="row details">
          <span id="operation">
            <b>Operation:</b> {state.operation}
          </span>
          <span id="memory">
            <b>Memory:</b> {state.memory}
          </span>
        </div>

        <div className="row">
          <CalcButton value={"M+"} />
          <CalcButton value={"MR"} />
          <CalcButton value={"MC"} />
        </div>

        <div className="row">
          <CalcButton
            value={1}
            onClick={() => dispatch({ type: APPLY_NUMBER, payload: 1 })}
          />
          <CalcButton
            value={2}
            onClick={() => dispatch({ type: APPLY_NUMBER, payload: 2 })}
          />
          <CalcButton
            value={3}
            onClick={() => dispatch({ type: APPLY_NUMBER, payload: 3 })}
          />
        </div>

        <div className="row">
          <CalcButton
            value={4}
            onClick={() => dispatch({ type: APPLY_NUMBER, payload: 4 })}
          />
          <CalcButton
            value={5}
            onClick={() => dispatch({ type: APPLY_NUMBER, payload: 5 })}
          />
          <CalcButton
            value={6}
            onClick={() => dispatch({ type: APPLY_NUMBER, payload: 6 })}
          />
        </div>

        <div className="row">
          <CalcButton
            value={7}
            onClick={() => dispatch({ type: APPLY_NUMBER, payload: 7 })}
          />
          <CalcButton
            value={8}
            onClick={() => dispatch({ type: APPLY_NUMBER, payload: 8 })}
          />
          <CalcButton
            value={9}
            onClick={() => dispatch({ type: APPLY_NUMBER, payload: 9 })}
          />
        </div>

        <div className="row">
          <CalcButton
            value={"+"}
            onClick={() =>
              dispatch({ type: CHANGE_OPERATION, payload: "+" })
            }
          />
          <CalcButton
            value={"*"}
            onClick={() =>
              dispatch({ type: CHANGE_OPERATION, payload: "*" })
            }
          />
          <CalcButton
            value={"-"}
            onClick={() =>
              dispatch({ type: CHANGE_OPERATION, payload: "-" })
            }
          />
           <CalcButton
            value={"/"}
            onClick={() =>
              dispatch({ type: CHANGE_OPERATION, payload: "/" })
            }
          />
        </div>

        <div className="row ce_button">
          <CalcButton
            value={"CE"}
            onClick={() => dispatch({ type: CLEAR_DISPLAY })}
          />
        </div>

      </form>
    </div>
  );
}

export default App;
