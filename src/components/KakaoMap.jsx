import { useEffect, useRef, useState } from 'react';

let sdkPromise;

function loadSdk(appKey) {
  if (window.kakao?.maps?.services) return Promise.resolve(window.kakao);
  if (!sdkPromise) {
    sdkPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&libraries=services&autoload=false`;
      s.onload = () => window.kakao.maps.load(() => resolve(window.kakao));
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  return sdkPromise;
}

export const kakaoSearchUrl = (query) => `https://map.kakao.com/link/search/${encodeURIComponent(query)}`;

// 주소로 위치를 찾아 지도에 표시. 키가 없거나 실패하면 카카오맵 링크 카드로 대체.
export default function KakaoMap({ appKey, query, name, onLocate }) {
  const ref = useRef(null);
  const [failed, setFailed] = useState(!appKey);

  useEffect(() => {
    if (!appKey) return;
    let alive = true;

    loadSdk(appKey)
      .then((kakao) => {
        new kakao.maps.services.Geocoder().addressSearch(query, (result, status) => {
          if (!alive) return;
          if (status !== kakao.maps.services.Status.OK) return setFailed(true);

          const { x, y } = result[0];
          const pos = new kakao.maps.LatLng(y, x);
          const map = new kakao.maps.Map(ref.current, { center: pos, level: 3, draggable: false, scrollwheel: false });
          new kakao.maps.Marker({ map, position: pos });
          onLocate?.({ lat: y, lng: x });
          // 지도 영역 크기가 바뀌면 중심 유지
          const ro = new ResizeObserver(() => {
            map.relayout();
            map.setCenter(pos);
          });
          ro.observe(ref.current);
        });
      })
      .catch(() => alive && setFailed(true));

    return () => {
      alive = false;
    };
  }, [appKey, query]);

  if (failed) {
    return (
      <a href={kakaoSearchUrl(query)} target="_blank" rel="noopener noreferrer" className="ph map map--link">
        <span className="map__pin">{name}</span>
        <span>카카오맵에서 위치 보기 →</span>
      </a>
    );
  }

  return (
    <div className="map">
      <div ref={ref} className="map__canvas" role="img" aria-label={`${name} 위치 지도`} />
      <a href={kakaoSearchUrl(query)} target="_blank" rel="noopener noreferrer" className="map__open">
        크게 보기
      </a>
    </div>
  );
}
