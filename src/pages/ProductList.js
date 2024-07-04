import Applephone from "../container/applephone";
import Realme from "../container/realmephone";
import SamSung from "../container/samsangphone";

export const ProductList = () => {
  return (
    <>
      <div>
        <Applephone />
        <SamSung />
        <Realme />
      </div>
    </>
  );
};
