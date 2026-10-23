import { useEffect, useState } from 'react';
import { menu, office } from '../data.js';
import { MenuIcon, CloseIcon } from './Icons.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="header__bar">
        <a href="#" className="header__logo">새움교회</a>
        <button
          type="button"
          className="icon-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
          aria-controls="main-nav"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav id="main-nav" aria-label="주 메뉴" className="header__nav">
          {menu.map((m) => (
            <a key={m.label} href={m.href} className="header__nav-link" onClick={() => setOpen(false)}>
              {m.label} <span aria-hidden="true">→</span>
            </a>
          ))}
          <p className="header__nav-info">
            주일 1부 9:00 · 2부 11:00 · 오후 2:00
            <br />
            사무실 {office.phone}
          </p>
        </nav>
      )}
    </header>
  );
}
