// @ts-nocheck
import React from 'react';
import CrudNavbar from '@/components/navbar/CrudNavbar';
import './Layout.css';

export const Layout = ({ title, children, headerActions }) => {
  return (
    <div className="layout-global-container">
      <CrudNavbar />

      <div className="layout-inner">
        {(title || headerActions) && (
          <header className="layout-header">
            {title && <h1 className="layout-title">{title}</h1>}
            <div className="layout-actions">
              {headerActions}
            </div>
          </header>
        )}

        <main className="layout-content">
          {children}
        </main>
      </div>
    </div>
  );
};
