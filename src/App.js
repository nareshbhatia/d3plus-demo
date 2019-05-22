import React from 'react';
import { Section } from './Section';

function App() {
    return (
        <div className="App">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                key => (
                    <Section key={key} sectionId={key} />
                )
            )}
        </div>
    );
}

export default App;
