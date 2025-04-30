import React, { useEffect } from "react";
import Header from "../../../common/layout/Header";
import Sidebar from "../../../common/layout/Sidebar";
import ProductView from "./LayOut/ProductView";
import { useDispatch, useSelector } from "react-redux";
import { getCatogery } from "../../../../redux/catogerySlice";
import { getsubCatogery } from "../../../../redux/subCatogeryslice";
import SubHead from "../../../common/layout/SubHead";

function HomeLayOut() {
  const { catData } = useSelector((state) => state.catogeryData);
  const { subCatdata } = useSelector((state) => state.subCatogerydata);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatogery());
  }, []);
  const getSubcatData = (id) => {
    dispatch(getsubCatogery(id));
  };
  console.log(subCatdata, "oop");

  return (
    <div>
      <Header />
      <SubHead />
      <div className="flex ">
        <Sidebar
          catData={catData}
          getSubcatData={getSubcatData}
          subCatdata={subCatdata}
        />
        <ProductView />
      </div>
    </div>
  );
}

export default HomeLayOut;
