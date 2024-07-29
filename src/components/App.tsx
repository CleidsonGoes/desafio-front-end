import React, { useEffect, useState } from 'react';


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
  
    useEffect(() => {
      fetch('http://localhost:3000/employees').then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Erro ao buscar dados:', error));
    }, []);
  
    return (
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
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.image}</td>
              <td>{item.job}</td>
              <td>{item.admission_date}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;
