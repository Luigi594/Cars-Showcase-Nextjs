// all components in -Nextjs are default server side rendering
"use client";

import { ICustomButton } from "@/types";
import Image from "next/image";

function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: ICustomButton) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}>
      <span className={`flex-1 ${textStyles}`}>{title}</span>

      {rightIcon && (
        <div className="relative">
          <span className="text-white">{rightIcon}</span>
        </div>
      )}
    </button>
  );
}

export default CustomButton;
