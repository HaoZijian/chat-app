import React from 'react';
import './admin.css';

class Admin extends React.Component {
  // 如果你需要管理状态或生命周期方法，请在这里添加

  render() {
    return (
      <div className="admin-container">
        <header>
          <h1>Management Page</h1>
        </header>
        <main>
          <div className="contacts">
            <button className="add-contact-button">Add Contact</button>
            <button className="export-button">Export</button>
            <table>
              <thead>
                <tr>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Create Time</th>
                  <th>Operate</th>
                </tr>
              </thead>
              <tbody>
                {/* 在这里遍历数据来显示每一行 */}
              </tbody>
            </table>
          </div>
          <div className="add-contact-form">
            <h2>Add Contact</h2>
            <form>
              <label>
                Contact Name*
                <input type="text" placeholder="Eg: Zijian Hao" />
              </label>
              <label>
                Phone Number
                <input type="tel" placeholder="Please enter..." />
              </label>
              <label>
                Email
                <input type="email" placeholder="Please enter..." />
              </label>
              <div className="form-actions">
                <button type="button">Cancel</button>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    );
  }
}

export default Admin;