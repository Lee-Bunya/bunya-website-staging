/* Homepage product tour. All panels remain readable when JavaScript is disabled. */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  var tablist = document.querySelector('.hp-product-tabs');
  if (!tablist) return;
  var tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  function selectTab(tab, focus) {
    tabs.forEach(function (item) {
      var selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () { selectTab(tab, false); });
    tab.addEventListener('keydown', function (event) {
      var next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      selectTab(tabs[next], true);
    });
  });
  // Improve the shared navigation's keyboard behaviour on this homepage only.
  var menu = document.getElementById('mMenu');
  var opener = document.querySelector('.menu-btn');
  if (menu && opener) {
    menu.setAttribute('role', 'dialog');
    menu.setAttribute('aria-label', 'Site navigation');
    menu.setAttribute('aria-modal', 'true');
    menu.inert = true;
    opener.setAttribute('aria-controls', 'mMenu');
    opener.setAttribute('aria-expanded', 'false');
    var originalOpen = window.openMenu;
    var originalClose = window.closeMenu;
    window.openMenu = function () {
      originalOpen();
      menu.inert = false;
      opener.setAttribute('aria-expanded', 'true');
      menu.querySelector('.m-close').focus();
    };
    window.closeMenu = function () {
      var wasOpen = menu.classList.contains('open');
      originalClose();
      menu.inert = true;
      opener.setAttribute('aria-expanded', 'false');
      if (wasOpen) opener.focus();
    };
    menu.addEventListener('keydown', function (event) {
      if (event.key !== 'Tab') return;
      var items = Array.from(menu.querySelectorAll('a[href],button'));
      var first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
  }
  document.querySelectorAll('.nav-item').forEach(function (item) {
    var trigger = item.querySelector(':scope > a');
    var dropdown = item.querySelector('.dropdown');
    if (!trigger || !dropdown) return;
    trigger.setAttribute('role', 'button');
    trigger.tabIndex = 0;
    trigger.setAttribute('aria-expanded', 'false');
    function setOpen(open) {
      trigger.setAttribute('aria-expanded', String(open));
      item.classList.toggle('hp-nav-open', open);
    }
    trigger.addEventListener('click', function () {
      setOpen(trigger.getAttribute('aria-expanded') !== 'true');
    });
    trigger.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setOpen(trigger.getAttribute('aria-expanded') !== 'true');
      }
    });
    item.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); trigger.focus(); }
    });
    item.addEventListener('pointerenter', function () { setOpen(true); });
    item.addEventListener('pointerleave', function () {
      if (!item.contains(document.activeElement)) setOpen(false);
    });
    item.addEventListener('focusout', function (event) {
      if (!item.contains(event.relatedTarget)) setOpen(false);
    });
    document.addEventListener('click', function (event) {
      if (!item.contains(event.target)) setOpen(false);
    });
  });
});
