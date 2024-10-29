import { useEffect, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import Link from 'next/link'; // Import the Link component

type RowDataType = {
  firstName: string;
  id: string;
  ledger_name?: string;
  under?: string;
  group?: string;
  phone_number?: string;
};

const CustomerList: React.FC = () => {
  const [rowData, setRowData] = useState<RowDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://66790ce018a459f6394dc0d8.mockapi.io/abc";
      const response = await fetch(url);
      const data = await response.json();
      const formattedData = data.map((item: RowDataType) => ({
        firstName: item.firstName || "",
        id: item.id || "",
        ledger_name: item.ledger_name || "",
        under: item.under || "",
        group: item.group || "",
        phone_number: item.phone_number || ""
      }));
      setRowData(formattedData);
    };

    fetchData();
  }, []);

  const columnDefs: ColDef[] = useMemo(() => [
    { headerName: "First Name", field: "firstName" },
    { headerName: "ID", field: "id" },
    { headerName: "Ledger Name", field: "ledger_name" },
    { headerName: "Under", field: "under" },
    { headerName: "Group", field: "group" },
    { headerName: "Phone Number", field: "phone_number" },
    {
      headerName: "Actions",
      field: "id",
      cellRenderer: (params: { value: any; }) => {
        return (
          <Link href={`/pages/customer/customer/${params.value}`}>
            <button>Edit</button>
          </Link>
        );
      }
    }
  ], []);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{ flex: 1, resizable: true }}
      />
    </div>
  );
};

export default CustomerList;
