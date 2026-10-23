import { useState } from 'react';
import { sermon, order, times, news, photos, welcome } from '../data.js';
import { PlayIcon } from './Icons.jsx';

export function Placeholder({ label, className = '' }) {
  return (
    <div className={`ph ${className}`} role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  );
}

export function Sermon() {
  return (
    <section id="sermon" className="sermon">
      <p className="eyebrow">{sermon.eyebrow}</p>
      <h1 className="sermon__title">
        {sermon.title[0]}
        <br />
        {sermon.title[1]}
      </h1>
      <p className="sermon__meta">{sermon.meta}</p>
      <Placeholder label={sermon.photo} className="ph--4x3 sermon__photo" />
      <div className="btn-grid">
        <a href={sermon.videoHref} className="btn btn--solid">
          <PlayIcon />
          설교 영상
        </a>
        <a href={sermon.scriptHref} className="btn btn--line">설교 원고</a>
      </div>
    </section>
  );
}

export function WorshipOrder() {
  const [open, setOpen] = useState(false);

  return (
    <section className="order">
      <button
        type="button"
        className="order__toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="order-list"
      >
        <span className="order__heading">
          <span className="order__title">{order.title}</span>
          <span className="order__sub">{order.subtitle}</span>
        </span>
        <span className="order__label">{open ? '접기' : '펼치기'}</span>
      </button>
      {open && (
        <div id="order-list">
          <ol className="order__list">
            {order.items.map((it) => (
              <li key={it.name} className={it.strong ? 'is-strong' : undefined}>
                <span className="grow">{it.name}</span>
                {it.who && <span>{it.who}</span>}
              </li>
            ))}
          </ol>
          <a href={order.pdfHref} className="order__pdf">주보 PDF 내려받기</a>
        </div>
      )}
    </section>
  );
}

export function WorshipTimes() {
  return (
    <section id="times" className="times">
      <h2 className="times__title">예배 시간</h2>
      <p className="times__lead">처음 오신 분도 어느 예배든 편하게 오세요.</p>
      <dl className="times__list">
        {times.map((t) => (
          <div key={t.name} className="times__row">
            <dt>{t.name}</dt>
            <dd>{t.time}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function News() {
  return (
    <section id="news" className="section">
      <div className="section__head">
        <h2 className="section__title">교회 소식</h2>
        <a href="#" className="section__more">전체</a>
      </div>
      <ol className="news">
        {news.map((n, i) => (
          <li key={n.title}>
            <a href={n.href} className="news__item">
              <span className="news__num">{i + 1}</span>
              <span>
                <span className="news__title">{n.title}</span>
                <span className="news__detail">{n.detail}</span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="gallery" aria-label="교회 사진">
      <div className="gallery__track">
        {photos.map((p) => (
          <Placeholder key={p} label={p} className="ph--4x3 gallery__item" />
        ))}
      </div>
    </section>
  );
}

export function Welcome() {
  return (
    <section className="section welcome">
      <h2 className="section__title section__title--rule">처음 오셨나요</h2>
      <p className="welcome__body">{welcome.body}</p>
      <div className="link-list">
        {welcome.links.map((l) => (
          <a key={l.label} href={l.href} className="link-list__item">
            {l.label} <span aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
