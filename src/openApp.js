// 유튜브 링크를 모바일에서는 유튜브 앱으로, PC에서는 새 탭으로 엽니다.
export function openYouTube(e, url) {
  const ua = navigator.userAgent;
  const rest = url.replace(/^https?:\/\//, '');

  if (/Android/i.test(ua)) {
    e.preventDefault();
    window.location.href =
      `intent://${rest}#Intent;scheme=https;package=com.google.android.youtube;` +
      `S.browser_fallback_url=${encodeURIComponent(url)};end`;
    return;
  }

  if (/iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) {
    e.preventDefault();
    // 앱이 없으면 페이지가 그대로 남아 있으므로 웹으로 이동
    const timer = setTimeout(() => {
      if (!document.hidden) window.location.href = url;
    }, 1500);
    document.addEventListener('visibilitychange', () => clearTimeout(timer), { once: true });
    window.location.href = `youtube://${rest}`;
  }
  // 그 밖(PC)은 <a target="_blank"> 기본 동작
}
