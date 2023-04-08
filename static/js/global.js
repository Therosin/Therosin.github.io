// Copyright (C) 2023 Theros < MisModding | SvalTek >
// 
// This file is part of therosin.github.io.
// 
// therosin.github.io is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// therosin.github.io is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with therosin.github.io.  If not, see <http://www.gnu.org/licenses/>.
// The debounce function receives our function as a parameter


/**
 * debounce a callback function.
 * @param {function} fn - the function to debounce
 * @returns {function} - the debounced function
*/
const debounce = (fn) => {
    let frame;

    return (...params) => {
        if (frame) { cancelAnimationFrame(frame); }
        frame = requestAnimationFrame(() => { fn(...params); });
    }
};

/**
 * store the current scroll position in a data attribute so it can be read by CSS.
*/
const updateScrollTracking = () => {
    document.documentElement.dataset.scrollX = Math.round(window.scrollX);
    document.documentElement.dataset.scrollY = Math.round(window.scrollY);
}

let ScrollTracker = null;
const enableScrollTracking = () => {
    ScrollTracker = debounce(updateScrollTracking);
    // Listen for new scroll events.
    document.addEventListener('scroll', ScrollTracker, { passive: true });
    // Update scroll position for first time
    updateScrollTracking();
}
document.enableScrollTracking = enableScrollTracking;

const disableScrollTracking = () => {
    // stop listening for new scroll events.
    document.removeEventListener('scroll', ScrollTracker);
    document.documentElement.removeAttribute("data-scroll-x");
    document.documentElement.removeAttribute("data-scroll-y");
}
document.disableScrollTracking = disableScrollTracking;


/**
 * store the current mouse position in a data attribute so it can be read by CSS.
*/
const updateMouseTracking = (e) => {
    document.documentElement.dataset.mouseX = Math.round(e.clientX);
    document.documentElement.dataset.mouseY = Math.round(e.clientY);
}

let MouseTracker = null;
const enableMouseTracking = () => {
    MouseTracker = debounce(updateMouseTracking);
    // Listen for new mousemove events.
    document.addEventListener('mousemove', MouseTracker, { passive: true });
}
document.enableMouseTracking = enableMouseTracking;

const disableMouseTracking = () => {
    // stop listening for new mousemove events.
    document.removeEventListener('mousemove', MouseTracker);
    document.documentElement.removeAttribute("data-mouse-x");
    document.documentElement.removeAttribute("data-mouse-y");
}
document.disableMouseTracking = disableMouseTracking;

// enable scroll tracking
enableScrollTracking();

// enable mouse tracking
enableMouseTracking();
