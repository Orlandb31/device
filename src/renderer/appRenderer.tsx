import React from 'react';
import { createRoot } from 'react-dom/client';
import WindowFrame from '@renderer/window/WindowFrame';
import { App } from './App';

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app = (
  <WindowFrame title='Fluyapp Device' platform='windows'>
    <App />
  </WindowFrame>
);

// Render application in DOM
createRoot(document.getElementById('app')).render(app);
