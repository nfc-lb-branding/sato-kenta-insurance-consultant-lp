/**
 * 佐藤健太 LP - メインスクリプト
 * vCard生成、スムーススクロール、インタラクション
 */

// ========================================
// vCard生成機能
// ========================================

/**
 * vCard (VCF) を生成してダウンロード
 */
function generateVCard() {
    // vCard情報（実際の情報に置き換えてください）
    const vCardData = {
        name: {
            firstName: '健太',
            lastName: '佐藤'
        },
        company: '〇〇生命保険',
        title: '代理店オーナー / トップセールス',
        tel: '090-1234-5678', // 実際の電話番号に置き換え
        email: 'kenta.sato@example.com', // 実際のメールアドレスに置き換え
        url: window.location.href,
        address: {
            city: '仙台市',
            region: '宮城県',
            country: '日本'
        }
    };

    // vCard (VCF) フォーマット生成
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:${vCardData.name.lastName};${vCardData.name.firstName};;;
FN:${vCardData.name.lastName} ${vCardData.name.firstName}
ORG:${vCardData.company}
TITLE:${vCardData.title}
TEL;TYPE=CELL:${vCardData.tel}
EMAIL;TYPE=INTERNET:${vCardData.email}
URL:${vCardData.url}
ADR;TYPE=WORK:;;${vCardData.address.city};${vCardData.address.region};;${vCardData.address.country}
END:VCARD`;

    // Blobオブジェクト作成
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    // ダウンロードリンク作成
    const link = document.createElement('a');
    link.href = url;
    link.download = '佐藤健太_連絡先.vcf';

    // クリックイベント発火
    document.body.appendChild(link);
    link.click();

    // クリーンアップ
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // フィードバック表示
    showNotification('連絡先を保存しました');
}

/**
 * 通知表示
 */
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        background: #1a2b4a;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-size: 0.9rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideUp 0.3s ease;
    `;

    document.body.appendChild(notification);

    // 3秒後に削除
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// アニメーション定義
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    @keyframes slideDown {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// イベントリスナー
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // vCardダウンロードボタン
    const vcardButton = document.getElementById('vcard-download');
    if (vcardButton) {
        vcardButton.addEventListener('click', generateVCard);
    }

    // サービスカードのクリックイベント（必要に応じて拡張）
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // デフォルトのリンク動作を維持
            // 将来的にモーダルやページ遷移をカスタマイズする場合はここに追加
        });
    });

    // スムーススクロール（アンカーリンク用）
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // #のみの場合は処理しない
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ========================================
// パフォーマンス最適化
// ========================================

// 画像の遅延読み込み（Intersection Observer）
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    // data-src属性を持つ画像を監視
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// アナリティクス（必要に応じて）
// ========================================

/**
 * イベントトラッキング（Google Analytics等）
 */
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    console.log(`Track: ${category} - ${action} - ${label}`);
}

// LINEボタンクリック追跡
document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-primary')) {
        trackEvent('CTA', 'click', 'LINE Contact');
    }

    if (e.target.closest('#vcard-download')) {
        trackEvent('CTA', 'download', 'vCard');
    }

    if (e.target.closest('.service-card')) {
        const cardTitle = e.target.closest('.service-card').querySelector('.card-title')?.textContent;
        trackEvent('Service', 'click', cardTitle || 'Unknown Service');
    }
});
