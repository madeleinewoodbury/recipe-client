import React from 'react';
import { Link } from 'react-router-dom';

const DashTable = ({ recipes }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Oppskrift</th>
          <th>Kategori</th>
          <th>Land</th>
          <th className="hide-sm">Dato lagt til</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe) => (
          <tr key={recipe.id}>
            <td>
              <Link to="/">{recipe.name}</Link>
            </td>
            <td>{recipe.category}</td>
            <td>{recipe.country}</td>
            <td className="hide-sm">{recipe.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DashTable;
