import React from 'react';
import Card from './Card';
import data from './data/data.json';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <h1 className="app-title">Happy 16th Anniversary My Love</h1>
        <h2 >فِي الدُّنْيَا وَالْآخِرَةِ، أَنْتَ حُبِّي وَقَلْبِي وَدُعَائِي. أُرِيدُك زَوْجًا لِي فِي هَذِهِ الحَيَاةِ وَفِي الجَنَّةِ. اللَّهُمَّ اجْمَعْنَا فِي الدُّنْيَا عَلَى خَيْرٍ وَفِي الآخِرَةِ فِي جَنَّاتِ النَّعِيمِ</h2>
        <h3 >In this world and the hereafter, you are my love, my heart, and my prayer. I want you as my husband in this life and in Jannah. Oh Allah, unite us in this world with goodness and in the hereafter in the gardens of Paradise</h3>
        <div className="cards-grid">
          {data.map(product => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App; 