declare module 'mo-js' {

    export interface ShapeOptions {

        /**
         *  Parent of the module.
         *  {String, Object}
         *  [selector, HTMLElement]
         */
        parent?: string | HTMLElement;

        /**
         * Class Name
         * {string}
         */
        className?: string;

        /**
         *  Name of Shape
         *  {string}
         *  [ 'circle' | 'rect' | 'polygon' | 'line' | 'cross' | 'equal' | 'curve' | 'zigzag' | '*custom defined name*' ]
         */
        shape?: string;

        /**
         * Stroke color.
         * {String}
         * [color name, rgb, rgba, hex]
         */
        stroke?: string;

        /**
         *  Stroke Opacity.
         *  {Number}
         *  [ 0..1 ]
         */
        strokeOpacity?: number;

        /**
         *  Stroke Line Cap.
         *  {String}
         *  ['butt' | 'round' | 'square']
         */
        strokeLinecap?: string;

        /**
         *  Stroke Width.
         *  {Number}
         *  [ number ]
         */
        strokeWidth?: number;

        /**
         *  Stroke Dash Array.
         *  {String, Number}
         */
        strokeDasharray?: string | number;

        /**
         *  Stroke Dash Offset.
         *  {String, Number}
         */
        strokeDashoffset?: string | number;

        /**
         *  Fill Color.
         *  {String}
         *  [color name, rgb, rgba, hex]
         */
        fill?: string;

        /**
         *  Fill Opacity.
         *  {Number}
         *  [ 0..1 ]
         */
        fillOpacity?: number;

        /**
         *  Left position of the module.
         *  {Number, String}
         */
        left?: string | number;

        /**
         *  Top position of the module.
         *  {Number, String}
         */
        top?: string | number;

        /**
         *  X shift.
         *  {Number, String}
         */
        x?: number | string;

        /**
         *  Y shift.
         *  {Number, String}
         */
        y?: number | string;

        /**
         *  Angle.
         *  {Number, String}
         */
        angle?: number | string;

        /**
         *  Scale of the module.
         *  {Number}
         */
        scale?: number;

        /**
         *  Explicit scaleX value (fallbacks to `scale`).
         *  {Number}
         */
        scaleX?: number;

        /**
         *  Explicit scaleX value (fallbacks to `scale`).
         *  {Number}
         */
        scaleY?: number;

        /**
         *  Origin for `x`, `y`, `scale`, `rotate` properties.
         *  {String}
         */
        origin?: string;

        /**
         *  Opacity.
         *  {Number}
         *  [ 0..1 ]
         */
        opacity?: number;

        /**
         *  X border radius.
         *  {Number, String}
         */
        rx?: number | string;

        /**
         *  Y border radius.
         *  {Number, String}
         */
        ry?: number | string;

        /**
         *  Points count ( for polygon, zigzag, equal ).
         *  {Number, String}
         */
        points?: number | string;

        /**
         *  Radius of the shape.
         *  {Number, String}
         */
        radius?: number | string;

        /**
         *  Radius X of the shape (fallbacks to `radius`).
         *  {Number, String}
         */
        radiusX?: number | string;

        /**
         *  Radius Y of the shape (fallbacks to `radius`).
         *  {Number, String}
         */
        radiusY?: number | string;

        /**
         *  If should hide module with `transforms` instead of `display`.
         *  {Boolean}
         */
        isSoftHide?: boolean;

        /**
         *  If should trigger composite layer for the module.
         *  {Boolean}
         */
        isForce3d?: boolean;

        /**
         *  If should be shown before animation starts.
         *  {Boolean}
         */
        isShowStart?: boolean,

        /**
         *  If should be shown after animation ends.
         *  {Boolean}
         */
        isShowEnd?: boolean;

        /**
         *  If refresh state on subsequent plays.
         *  {Boolean}
         */
        isRefreshState?: boolean;

        /**
         *  Context callbacks will be called with.
         *  {Object}
         */
        callbacksContext?: Object;

        /**
         *  Duration
         */
        duration?: number;

        /**
         *  Delay
         */
        delay?: number;

        /**
         *  If should repeat after animation finished
         *  {Number} *(1)
         */
        repeat?: number;

        /**
         *  Speed of the tween
         *  {Number}
         *  [0..∞]
         */
        speed?: number;

        /**
         *  If the progress should be flipped on repeat animation end
         *  {Boolean}
         */
        yoyo?: boolean;

        /**
         *  Easing function
         *  {String, Function}
         *  [ easing name, path coordinates, bezier string, easing function ]
         */
        easing?: string | Function;

        /**
         *  Easing function for backward direction of the tween animation (fallbacks to `easing`)
         *  {String, Function}
         *  [ easing name, path coordinates, bezier string, easing function ]
         */
        backwardEasing?: string | Function;

        /**
         *  Fires on every update of the tween in any period (including delay periods). You probably want to use `onUpdate` method instead.
         *  @param p {Number} Normal (not eased) progress.
         *  @param isForward {Boolean} Direction of the progress.
         *  @param isYoyo {Boolean} If in `yoyo` period.
         */
        onProgress?: (progress: number, isForward?: boolean, isYoyo?: boolean) => any;

        /**
         *  Fires when tween's the progress reaches `0` point in normal or repeat period.
         *  @param isForward {Boolean} If progress moves in forward direction.
         *  @param isYoyo {Boolean} If progress inside `yoyo` flip period.
         */
        onStart?: (isForward: boolean, isYoyo: boolean) => any;

        /**
         *  Fires when tween's the progress reaches `0` point in normal or repeat period.
         *  @param isForward {Boolean} If progress moves in forward direction.
         *  @param isYoyo {Boolean} If progress inside `yoyo` flip period.
         */
        onFirstUpdate?: (isForward, isYoyo) => any;

        /**
         *  Fires on first update of the tween in sufficiently active period (excluding delay periods).
         *  @param ep {Number} Eased progress.
         *  @param p {Number} Normal (not eased) progress
         *  @param isForward {Boolean} Direction of the progress.
         *  @param isYoyo {Boolean} If in `yoyo` period.
         */
        onUpdate?: (ep, p, isForward, isYoyo) => any;

        /**
         *  Fires when tween's the progress reaches `1` point in normal or repeat period.
         *  @param isForward {Boolean} If progress moves in forward direction.
         *  @param isYoyo {Boolean} If progress inside `yoyo` flip period.
         */
        onRepeatComplete?: (isForward, isYoyo) => any;

        /**
         *  Fires when tween's the entire progress reaches `1` point(doesn't fire in repeat periods).
         *  @param isForward {Boolean} If progress moves in forward direction.
         *  @param isYoyo {Boolean} If progress inside `yoyo` flip period.
         */
        onComplete?: (isForward, isYoyo) => any;

        /**
         *  Fires when the `.play` method called and tween isn't in play state yet.
         */
        onPlaybackStart?: () => any,

        /**
         *  Fires when the `.pause` method called and tween isn't in pause state yet.
         */
        onPlaybackPause?: () => any,

        /**
         *  Fires when the `.stop` method called and tween isn't in stop state yet.
         */
        onPlaybackStop?: () => any,

        /**
         *  Fires when the tween end's animation (regardless progress)
         */
        onPlaybackComplete?: () => any,


    }

    export class Shape {
        constructor(opts: ShapeOptions);

        /**
         *  Creates next state transition chain.
         */
        then(opts: ShapeOptions): void;

        /**
         *  Tunes start state with new options.
         *  @param options {Object} New start properties.
         */
        tune(opts: ShapeOptions): void;

        /**
         *  Regenerates all randoms in initial properties.
         */
        generate(): void;

        /**
         *  Starts playback.
         *  @param shift {Number} Start progress shift in milliseconds.
         */
        play(shift: number);

        /**
         *  Starts playback in backward direction.
         *  @param shift {Number} Start progress shift in milliseconds.
         */
        playBackward(shift: number);

        /**
         *  Pause
         *  */
        pause();

        /**
         *  Restarts playback.
         *  @param shift {Number} Start progress shift in milliseconds.
         *  */
        replay(shift: number);

        /**
         *  Restarts playback in backward direction.
         *  @param shift {Number} Start progress shift in milliseconds.
         *  */
        replayBackward(shift: number);

        /**
         *  Resumes playback in direction it was prior to `pause`.
         *  @param shift {Number} Start progress shift in milliseconds.
         *  */
        resume(shift: number);

        /**
         *  Sets progress of the tween.
         *  @param progress {Number} Progress to set [ 0..1 ].
         *  */
        setProgress(progress);

        /**
         *  Sets speed of the tween.
         *  @param speed {Number} Progress to set [ 0..∞ ].
         *  */
        setSpeed(speed);

        /**
         *  Stops and resets the tween
         */
        reset(speed);
    }
}

