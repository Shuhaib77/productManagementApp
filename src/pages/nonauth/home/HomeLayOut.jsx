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
  //getCatogery
  useEffect(() => {
    dispatch(getCatogery());
  }, []);
   //getSubCatogery
  const getSubcatData = (id) => {
    dispatch(getsubCatogery(id));
  };
  console.log(subCatdata, "oop");
  console.log(catData, "000");
  return (
    <div>
      <Header />
      <SubHead />
      <div className="lg:flex-row sm:flex flex-col sm:justify-center  ">
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
