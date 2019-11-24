// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Minimal Closure externs for Web Animations.
 * "Minimal" because the web-animations spec is in flux, Chromium's support is
 * changing, and the intended consumer (MD Settings) is actually using the
 * web-animations-js polyfill for the time being.
 * @see https://w3c.github.io/web-animations/#programming-interface
 */

/**
 * @enum {number}
 * @see https://w3c.github.io/web-animations/#enumdef-fillmode
 */
var FillMode = {
  'none': 0,
  'forwards': 1,
  'backwards': 2,
  'both': 3,
  'auto': 4
};

/**
 * @enum {number}
 * @see https://w3c.github.io/web-animations/#enumdef-playbackdirection
 */
var PlaybackDirection = {
  'normal': 0,
  'reverse': 1,
  'alternate': 2,
  'alternate-reverse': 3
};

/**
 * @enum {number}
 * @see https://w3c.github.io/web-animations/#enumdef-iterationcompositeoperation
 */
var IterationCompositeOperation = {
  'replace': 0,
  'accumulate': 1
};

/**
 * @enum {number}
 * @see https://w3c.github.io/web-animations/#enumdef-compositeoperation
 */
var CompositeOperation = {
  'replace': 0,
  'add': 1,
  'accumulate': 2
};

/**
 * @constructor
 * @param {!Event} event
 */
var EventHandlerNonNull = function(event) {};

/** @typedef {?EventHandlerNonNull} */
var EventHandler;

/**
 * @constructor
 * @see https://w3c.github.io/web-animations/#dictdef-keyframeanimationoptions
 */
var KeyframeAnimationOptions = function() {};

/**
 * @constructor
 * @see https://w3c.github.io/web-animations/#dictdef-keyframeeffectoptions
 */
var KeyframeEffectOptions = function() {};

/** @type {number} */
KeyframeEffectOptions.prototype.delay;

/** @type {number} */
KeyframeEffectOptions.prototype.endDelay;

/** @type {!FillMode} */
KeyframeEffectOptions.prototype.fill;

/** @type {number} */
KeyframeEffectOptions.prototype.iterationStart;

/** @type {number} */
KeyframeEffectOptions.prototype.iterations;

/** @type {number|string} */
KeyframeEffectOptions.prototype.duration;

/** @type {number} */
KeyframeEffectOptions.prototype.playbackRate;

/** @type {!PlaybackDirection} */
KeyframeEffectOptions.prototype.direction;

/** @type {string} */
KeyframeEffectOptions.prototype.easing;

/** @type {string} */
KeyframeEffectOptions.prototype.id;

/**
 * @interface
 * @see https://w3c.github.io/web-animations/#animatable
 */
var Animatable = function() {};

Animatable.prototype = /** @lends {Element.prototype} */({
  /**
   * @param {?Array<Object>|Object} effect
   * @param {number|!KeyframeEffectOptions=} opt_timing
   * @return {!Animation}
   */
  animate: function(effect, opt_timing) {},
});