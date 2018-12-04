import React from 'react';
import Header from 'components/ui/Header/Header';
import Images from 'components/ui/Images/Images';

export default function HomePage() {
  return (
    <div>
      <Header></Header>
      <Images></Images>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      </div>
    </div>
  );
}
