import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Page,
  ExcelExport,
  PdfExport,
  Filter,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";

import { Header } from "../components";

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title='order' category='Page' />
      <GridComponent id='gridComp' dataSource={ordersData} allowPaging>
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, ExcelExport, PdfExport, Filter, Edit, Resize]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
