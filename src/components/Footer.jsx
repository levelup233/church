import { useState } from 'react';
import { visit, office } from '../data.js';
import KakaoMap, { kakaoSearchUrl } from './KakaoMap.jsx';
import { ClockIcon, VideoIcon, PinIcon, PhoneIcon } from './Icons.jsx';

export function Footer() {
  const [coords, setCoords] = useState(null);
  const directionsHref = coords
    ? `https://map.kakao.com/link/to/${encodeURIComponent(visit.name)},${coords.lat},${coords.lng}`
    : kakaoSearchUrl(visit.mapQuery);

  return (
    <footer id="visit" className="footer">
      <div className="footer__title">오시는 길</div>
      <KakaoMap appKey={visit.kakaoMapKey} query={visit.mapQuery} name={visit.name} onLocate={setCoords} />
      <address className="footer__addr">
        <div>{visit.address}</div>
        <div>{visit.transit}</div>
        <div>{visit.parking}</div>
      </address>
      <div className="btn-grid">
        <a href={directionsHref} target="_blank" rel="noopener noreferrer" className="btn btn--line btn--sm">
          길찾기
        </a>
        <a href={`tel:${office.tel}`} className="btn btn--line btn--sm">사무실 전화</a>
      </div>
      <div className="footer__small">{office.email} · 헌금 계좌는 사무실로 문의</div>
    </footer>
  );
}

const quick = [
  { href: '#times', label: '예배 시간', Icon: ClockIcon },
  { href: '#sermon', label: '설교', Icon: VideoIcon },
  { href: '#visit', label: '오시는 길', Icon: PinIcon },
  { href: `tel:${office.tel}`, label: '전화', Icon: PhoneIcon },
];

export function BottomNav() {
  return (
    <nav aria-label="바로가기" className="tabbar">
      {quick.map(({ href, label, Icon }) => (
        <a key={label} href={href} className="tabbar__item">
          <Icon />
          {label}
        </a>
      ))}
    </nav>
  );
}
