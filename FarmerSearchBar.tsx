import * as React from 'react';

const FarmerListTable = ({ formData, setFormData, states }) => {
  return (
    <form>
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={formData.state || '1'}
                  name="state"
                  onChange={setFormData}
                >
                  <option value={''}>State (All)</option>
                  {states.map((state, id) => (
                    <option key={id} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="field is-narrow">
            <p className="control is-expanded has-icons-left has-icons-right">
              <input
                className="input is-success"
                type="text"
                placeholder="Name, City"
                name="keyword"
                onChange={setFormData}
                value={formData.keyword}
              />
              <span className="icon is-small is-right">
                <i className="fas fa-search"></i>
              </span>
            </p>
          </div>
          <div className="field is-narrow">
            <label className="checkbox">
              <input
                type="checkbox"
                name="hasCropProtectionPurchases"
                onChange={setFormData}
                checked={formData.hasCropProtectionPurchases}
              />
              &nbsp;Has Crop protection purchases
            </label>
          </div>
          <div className="field is-narrow">
            <label className="checkbox">
              <input
                type="checkbox"
                name="hasSeedPurchases"
                onChange={setFormData}
                checked={formData.hasSeedPurchases}
              />
              &nbsp; Has seed purchases
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FarmerListTable;
