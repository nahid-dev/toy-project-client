import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = ` Lego Toys | ${title} `;
  }, [title]);
};

export default useTitle;
