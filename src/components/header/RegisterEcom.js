import React from "react";
import { useDispatch } from "react-redux";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import { generatePath } from "react-router";
const RegisterEcom = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="statusBtnReg flex-fill"
      onClick={() =>
        generatePath("/user/:id/:entity(posts|comments)", {
         
        })
      }
    >
      Register Sell
    </button>
  );
};

export default RegisterEcom;
