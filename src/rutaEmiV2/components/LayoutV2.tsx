import type { ReactNode } from 'react';
import HeaderV2 from './HeaderV2';
import FooterV2 from './FooterV2';

interface LayoutV2Props {
  children: ReactNode;
}

export default function LayoutV2({ children }: LayoutV2Props) {
  return (
    <div className="min-h-screen bg-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Sora:wght@400;600;700&display=swap');

        .ruta-emi-v2, .ruta-emi-v2 * {
          font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .ruta-emi-v2 h1, .ruta-emi-v2 h2, .ruta-emi-v2 h3 {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 700;
        }

        .nav-link-v2 {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link-v2::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: #2BBCEA;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }

        .nav-link-v2:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .btn-primary-v2 {
          transition: all 0.3s ease;
        }

        .btn-primary-v2:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(13, 41, 103, 0.25);
        }

        .btn-primary-v2:active {
          transform: translateY(0);
        }

        .card-hover-v2 {
          transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .card-hover-v2:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
        }

        .fade-in-v2 {
          animation: fadeInV2 0.6s ease-out;
        }

        @keyframes fadeInV2 {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .no-scrollbar-v2 {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .no-scrollbar-v2::-webkit-scrollbar {
          display: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .ruta-emi-v2 * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      <div className="ruta-emi-v2">
        <HeaderV2 />
        {children}
        <FooterV2 />
      </div>
    </div>
  );
}
