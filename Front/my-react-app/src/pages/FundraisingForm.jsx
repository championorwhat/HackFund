import React from 'react';

const FundraisingForm = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Start a Fundraiser</h2>
      <form>
        <input type="text" placeholder="Title" required /><br /><br />
        <textarea placeholder="Describe your need..." required></textarea><br /><br />
        <input type="number" placeholder="Target Amount" required /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FundraisingForm;
