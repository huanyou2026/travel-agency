function applyContact(s) {
      if (!s) return;
      var cc = s.contactContent || {};
      var hasContactContent = !!s.contactContent;
      var sub = document.querySelector('.page-header .page-subtitle');
      if (sub && cc.subtitle) {
          sub.textContent = cc.subtitle;
          sub.classList.remove('contact-info-placeholder');
        }
      if (cc.hours && !(Array.isArray(cc.cards) && cc.cards.length)) {
        var cardsEl = document.querySelectorAll('#contact-info-grid .contact-info-item');
        for (var x = 0; x < cardsEl.length; x++) {
          var tEl = cardsEl[x].querySelector('h3');
if (tEl && /Time|Hours|Business/.test(tEl.textContent)) {
            var vEl = cardsEl[x].querySelector('.contact-info-content p');
            if (vEl) {
                vEl.textContent = cc.hours;
                vEl.classList.remove('contact-info-placeholder');
              }
            break;
          }
        }
      }
      var __cardsList = (Array.isArray(cc.cards) && cc.cards.length) ? cc.cards : (s.contact && (s.contact.phone || s.contact.email || s.contact.address) ? [
          { icon: 'fa-map-marker-alt', title: 'Address', value: s.contact.address || '', sub: 'Headquarters' },
          { icon: 'fa-phone-alt', title: 'Phone', value: s.contact.phone || '', sub: 'Call us anytime' },
          { icon: 'fa-envelope', title: 'Email', value: s.contact.email || '', sub: 'We reply within 24 hours' },
          { icon: 'fa-clock', title: 'Business Hours', value: 'Monday to Sunday 09:00 – 21:00', sub: 'Open every day' }
        ] : []);
      if (__cardsList.length) {
        var grid = document.getElementById('contact-info-grid');
        if (grid) {
          grid.innerHTML = '';
          __cardsList.forEach(function(cd) {
            var icon = cd.icon || 'fa-phone-alt';
            if (icon.indexOf('fa-') !== 0) icon = 'fa-' + icon;
            var BRAND_ICONS = ['fa-weixin','fa-whatsapp','fa-qq','fa-weibo','fa-wechat','fa-facebook','fa-twitter','fa-instagram','fa-youtube','fa-linkedin','fa-github','fa-telegram','fa-skype','fa-discord','fa-line','fa-tiktok','fa-weibo'];
            var iconPrefix = BRAND_ICONS.indexOf(icon) >= 0 ? 'fab' : 'fas';
            var isBrand = iconPrefix === 'fab';
            var card = document.createElement('div');
            card.className = 'contact-info-card';
            var ic = document.createElement('div');
            ic.className = 'contact-info-icon' + (isBrand ? ' is-brand' : '');
            if (icon === 'fa-weixin') {
              ic.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9.5 4C5.36 4 2 6.69 2 10c0 1.81 1 3.44 2.59 4.53L4 17l2.7-1.4c.84.25 1.74.4 2.7.4h.5c-.13-.5-.2-1-.2-1.5 0-3 2.92-5.5 6.5-5.5h.5c-.5-2.5-3.5-5-7.2-5zM6.5 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.5 4c-3.04 0-5.5 1.92-5.5 4.5S9.96 20 13 20c.61 0 1.18-.1 1.71-.27L16.5 21l-.16-1.59c1.31-.92 2.16-2.27 2.16-3.91C18.5 12.92 16.04 11 13 11zm-2 2c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zm4 0c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75z"/></svg>';
            } else if (icon === 'fa-whatsapp') {
              ic.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.69 8.23-8.23 8.23zm4.51-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.79-.79.95-.15.16-.29.18-.54.06-.25-.12-1.04-.38-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.84-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.25 1.05.41 1.41.52.59.18 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.22-.16-.47-.28z"/></svg>';
            } else {
              ic.innerHTML = '<i class="' + iconPrefix + ' ' + escH(icon) + '"></i>';
            }
            var ctt = document.createElement('div');
            ctt.className = 'contact-info-content';
            var h = document.createElement('h3');
            h.textContent = cd.title || '';
            var v = document.createElement('p');
            v.textContent = cd.value || '';
            ctt.appendChild(h);
            ctt.appendChild(v);
            if (cd.sub) {
              var sp = document.createElement('p');
              sp.className = 'contact-info-sub';
              sp.textContent = cd.sub;
              ctt.appendChild(sp);
            }
            card.appendChild(ic);
            card.appendChild(ctt);
            grid.appendChild(card);
          });
        }
      }
      // 恢复所有未被自定义内容覆盖的 placeholder（默认卡片值/副标题）可见
      var _phEls = document.querySelectorAll('.contact-info-placeholder');
      for (var _pi = 0; _pi < _phEls.length; _pi++) {
        _phEls[_pi].classList.remove('contact-info-placeholder');
      }
      // FAQ 渲染
      var faqListEl = document.getElementById('contact-faq-list');
      if (faqListEl && Array.isArray(cc.faqs) && cc.faqs.length) {
        faqListEl.innerHTML = '';
        cc.faqs.forEach(function(item, idx) {
          if (!item || !item.q) return;
          var det = document.createElement('details');
          det.className = 'faq-item';
          if (idx === 0) det.setAttribute('open', '');
          var sum = document.createElement('summary');
          sum.innerHTML = '<span class="faq-q-text">' + String(item.q).replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</span><i class="fas fa-chevron-down faq-arrow"></i>';
          var body = document.createElement('div');
          body.className = 'faq-answer';
          body.innerHTML = String(item.a || '').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
          det.appendChild(sum);
          det.appendChild(body);
          faqListEl.appendChild(det);
        });
      } else if (faqListEl) {
        faqListEl.innerHTML = '<div class="faq-empty">' + (hasContactContent ? '暂无 FAQ，请在后台配置。' : 'FAQ 加载中…') + '</div>';
      }
    }
    DataLoader.loadSettings().then(applyContact).catch(function(){});
    if (window.ContactForm) ContactForm.init('contact-form', 'contact-success');
  