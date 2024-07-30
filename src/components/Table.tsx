import React, { useEffect, useState } from 'react';
import { formatPhoneNumber } from '../utils/phoneUtils';
import formatDate from '../utils/dateUtils';
import './FilteredTable.css';

interface Data {
    id: number;
    name: string;
    job: string;
    admission_date: string;
    image: string;
    phone: string
  }
  
  const Table: React.FC = () => {
    const [data, setData] = useState<Data[]>([]);
    const [filter, setFilter] = useState('');
  
    useEffect(() => {
      fetch('http://localhost:3000/employees').then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Erro ao buscar dados:', error));
    }, []);

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(event.target.value.toLowerCase());
    };

    // Função para filtrar os dados
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(filter) ||
      item.job.toLowerCase().includes(filter) ||
      item.phone.includes(filter)
    );
  
    return (
      <>
        <input type="text" placeholder="Filter by Name, job or Phone"
        value={filter} onChange={handleFilterChange} className='input-search'/>
        <div id="container">
          <table className="custom-table">
            <thead className="custom-header">
              <tr className="image-title">
                <th>Imagem</th>
                <th>Nome</th>
                <th>Cargo</th>
                <th>Data de admissão</th>
                <th>Telefone</th>
              </tr>
            </thead>
            <tbody>
              { filteredData.map((item) => (
                <tr key={item.id}>
                  <td><img src={item.image} alt={item.name} className="table-image" /></td>
                  <td className='name-data'>{item.name}</td>
                  <td className='job-data'>{item.job}</td>
                  <td className='date-data'>{formatDate(item.admission_date)}</td>
                  <td className='phone-data'>{formatPhoneNumber(item.phone)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };
  
  export default Table;
