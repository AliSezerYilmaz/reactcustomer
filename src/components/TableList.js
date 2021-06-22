import { Table,Column ,HeaderCell,Cell} from "rsuite-table";
import customers from "./customer.json";
import "rsuite-table/dist/css/rsuite-table.css";
import { Link } from "react-router-dom";

export const Rsuittable = () => {
    return (
      <div style={{margin:""}}>
        <Table data={customers} height={400}>
        <Column width={120} align="center" fixed resizable>
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column width={120} align="center" fixed resizable>
          <HeaderCell>İsim</HeaderCell>
          <Cell dataKey="isim" />
        </Column>
        <Column width={120} align="center" fixed resizable>
          <HeaderCell>Soy İsim</HeaderCell>
          <Cell dataKey="soyisim" />
        </Column>
        <Column width={120} align="center" fixed resizable>
          <HeaderCell>Numara</HeaderCell>
          <Cell dataKey="numara" />
        </Column>
        <Column width={120} align="center" fixed resizable>
          <HeaderCell>Ülke</HeaderCell>
          <Cell dataKey="ulke" />
        </Column>
        <Column width={120} align="center" fixed resizable>
          <HeaderCell>İl</HeaderCell>
          <Cell dataKey="il" />
        </Column>
        <Column width={120} align="center" fixed resizable>
          <HeaderCell>İlçe</HeaderCell>
          <Cell dataKey="ilce" />
        </Column>
        
        <Column width={120}  align="center" >
          <HeaderCell>İlçe</HeaderCell>
          <Cell dataKey="ilce" />
        </Column>
        <Column width={120}  align="center" >
          <HeaderCell>Semt</HeaderCell>
          <Cell dataKey="semt" />
        </Column>
        
        <Column width={120} align="center" >
          <HeaderCell>Vergi Dairesi</HeaderCell>
          <Cell dataKey="vergiDairesi" />
        </Column>
        
        <Column width={150}  align="center" >
          <HeaderCell>Vergi Numarası</HeaderCell>
          <Cell dataKey="vergiNumarasi" />
        </Column>
        
        <Column width={120} fixed="right">
          <HeaderCell>Action</HeaderCell>
          <Cell>
            {(rowData) => {
              const handleAction=(customers)=>{
                const id = parseInt(customers.id);
                for(let i = 0;i<customers.length;i++){
                    if(customers[i].id===id){
                       customers.splice(i,1);
                    }
                }
              }
              return (
                <span>
                  
                  
                  <Link onClick={handleAction}>
                    {" "}
                    <b>Remove</b>{" "}
                  </Link>
                </span>
              );
            }}
          </Cell>
        </Column>
      </Table> 
      </div>
    );
  };