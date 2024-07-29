import React, { useEffect, useState } from 'react';
import { formatPhoneNumber } from '../utils/phoneUtils';
import formatDate from '../utils/dateUtils';

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
        value={filter} onChange={handleFilterChange}/>
        <table>
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Data de admissão</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            { data.map((item) => (
              <tr key={item.id}>
                <td>{item.image}</td>
                <td>{item.name}</td>
                <td>{item.job}</td>
                <td>{formatDate(item.admission_date)}</td>
                <td>{formatPhoneNumber(item.phone)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };
  
  export default Table;
