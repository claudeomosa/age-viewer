import { useState, useEffect } from 'react';

const useBreadcrumb = () => {
  const [showBreadcrumb, setShowBreadcrumb] = useState(false);

  useEffect(() => {
    setShowBreadcrumb(true);
    const timeout = setTimeout(() => {
      setShowBreadcrumb(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const breadcrumbStyle = {
    position: 'fixed',
    top: '60px',
    right: showBreadcrumb ? '10px' : '-500px',
    transition: 'right 0.3s',
    zIndex: 1000,
  };

  const clearBreadcrumb = () => {
    setShowBreadcrumb(false);
  };

  return { showBreadcrumb, breadcrumbStyle, clearBreadcrumb };
};

export default useBreadcrumb;
