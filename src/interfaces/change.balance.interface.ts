import React from "react";

export interface IChangeBalance {
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}