let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        this.document.querySelector('#header').classList.add('show');
    }

    else {
        this.document.querySelector('#header').classList.remove('show');
    }

    prevScrollPos = currentScrollPos
});

document.addEventListener("DOMContentLoaded", function() {
    const dismissButton = document.querySelector('#dismiss-button');
    const closeButton = document.querySelector('#close-popup');
    const popup = document.querySelector('#popup');

    // 로컬 스토리지에서 'dismissed' 플래그 확인
    const dismissed = localStorage.getItem('dismissed');
    
    if (!dismissed) {
        // 팝업 표시
        popup.style.display = 'flex';
    }

    // '하루 동안 보지 않기' 버튼 클릭 이벤트
    if (dismissButton) {
        dismissButton.addEventListener('click', function() {
            // 하루 동안 숨김 처리
            localStorage.setItem('dismissed', true);
            popup.style.display = 'none';

            // 만료 시간 설정 (하루 후)
            const expiryTime = new Date();
            expiryTime.setDate(expiryTime.getDate() + 1);
            localStorage.setItem('dismissExpiry', expiryTime);
        });
    }

    // 닫기 버튼 클릭 이벤트
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            popup.style.display = 'none';
        });
    }

    // 로컬 스토리지 만료 시간 체크
    const dismissExpiry = localStorage.getItem('dismissExpiry');
    if (dismissExpiry && new Date() > new Date(dismissExpiry)) {
        // 만료되면 팝업 재표시
        localStorage.removeItem('dismissed');
        localStorage.removeItem('dismissExpiry');
        popup.style.display = 'flex';
    }
});