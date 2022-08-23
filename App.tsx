import * as React from 'react';
import FarmerListTable from './FarmerListTable';
import FarmerSearchBar from './FarmerSearchBar';
import { Data, FormDataType } from './types';
import './style.css';

const App = () => {
  const [data, setData] = React.useState<Data>([]);
  const [nameSort, setNameSort] = React.useState<Number>(1);
  const [formData, setFormDataBase] = React.useState<FormDataType>({
    state: '',
    keyword: '',
    hasCropProtectionPurchases: '',
    hasSeedPurchases: '',
  });

  const toggleNameSort = () => setNameSort(Number(nameSort) * -1);

  const setFormData = (e) => {
    e.target.type === 'checkbox';
    setFormDataBase({
      ...formData,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  React.useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/SunnySedric/a5fc68cf6cff66fcf306b8a31bd34658/raw/11e006bd5f3684ad06557fe8e1e89b1c7699a144/data.json'
    )
      .then((res) => res.json())
      .then(({ data }) => {
        setData(data);
      });
  }, []);

  const states = data.map((item) => item.state);
  return (
    <div className="container">
      <FarmerSearchBar
        formData={formData}
        setFormData={setFormData}
        states={states}
      />
      <FarmerListTable
        data={data}
        formData={formData}
        nameSort={nameSort}
        toggleNameSort={toggleNameSort}
      />
    </div>
  );
};

export default App;
