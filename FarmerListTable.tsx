import * as React from 'react';
import { Data, FarmerItem } from './types';

const FarmerListTable = ({ data, formData, toggleNameSort, nameSort }) => {
  data = data.sort((a: FarmerItem, b: FarmerItem) => {
    if (a.farmer_name > b.farmer_name) return nameSort;
    if (a.farmer_name < b.farmer_name) return nameSort * -1;
    return 0;
  });
  if (formData.state) {
    data = data.filter((item) => item.state === formData.state);
  }
  if (formData.keyword) {
    data = data.filter(
      (item: FarmerItem) =>
        item.city.toLowerCase().startsWith(formData.keyword.toLowerCase()) ||
        item.farmer_name
          .toLowerCase()
          .startsWith(formData.keyword.toLowerCase())
    );
  }
  if (formData.hasCropProtectionPurchases) {
    data = data.filter((item) => Boolean(item.cp_spend));
  }
  if (formData.hasSeedPurchases) {
    data = data.filter((item) => Boolean(item.seed_purchases));
  }

  return (
    <table className="table is-fullwidth">
      <thead>
        <tr>
          <th onClick={toggleNameSort}>
            Farmer Name{' '}
            <i className={`fas fa-angle-${nameSort === 1 ? 'down' : 'up'}`}></i>
          </th>
          <th>City</th>
          <th>State</th>
          <th>Crop protection spend</th>
          <th>Seed (bags)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, id) => (
          <tr key={id}>
            <td>{item.farmer_name}</td>
            <td>{item.city}</td>
            <td>{item.state}</td>
            <td>{item.cp_spend}</td>
            <td>{item.seed_purchases}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FarmerListTable;
