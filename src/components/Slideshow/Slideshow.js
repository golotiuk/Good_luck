import React, {Component} from 'react';
// import './component.css'
// import './demo.css'
// import './normalize.css'

// ( function( window ) {
//
//   'use strict';
//   function classReg( className ) {
//     return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
//   }
//   var hasClass, addClass, removeClass;
//
//   if ( 'classList' in document.documentElement ) {
//     hasClass = function( elem, c ) {
//       return elem.classList.contains( c );
//     };
//     addClass = function( elem, c ) {
//       elem.classList.add( c );
//     };
//     removeClass = function( elem, c ) {
//       elem.classList.remove( c );
//     };
//   }
//   else {
//     hasClass = function( elem, c ) {
//       return classReg( c ).test( elem.className );
//     };
//     addClass = function( elem, c ) {
//       if ( !hasClass( elem, c ) ) {
//         elem.className = elem.className + ' ' + c;
//       }
//     };
//     removeClass = function( elem, c ) {
//       elem.className = elem.className.replace( classReg( c ), ' ' );
//     };
//   }
//
//   function toggleClass( elem, c ) {
//     var fn = hasClass( elem, c ) ? removeClass : addClass;
//     fn( elem, c );
//   }
//
//   var classie = {
//     // full names
//     hasClass: hasClass,
//     addClass: addClass,
//     removeClass: removeClass,
//     toggleClass: toggleClass,
//     // short names
//     has: hasClass,
//     add: addClass,
//     remove: removeClass,
//     toggle: toggleClass
//   };
//
// // transport
//   if ( typeof define === 'function' && define.amd ) {
//     // AMD
//     define( classie );
//   } else {
//     // browser global
//     window.classie = classie;
//   }
//
// })( window );
// ( function( window ) {
//
//   'use strict';
//
//   // https://gist.github.com/edankwan/4389601
//   Modernizr.addTest('csstransformspreserve3d', function () {
//     var prop = Modernizr.prefixed('transformStyle');
//     var val = 'preserve-3d';
//     var computedStyle;
//     if(!prop) return false;
//
//     prop = prop.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');
//
//     Modernizr.testStyles('#modernizr{' + prop + ':' + val + ';}', function (el, rule) {
//       computedStyle = window.getComputedStyle ? getComputedStyle(el, null).getPropertyValue(prop) : '';
//     });
//
//     return (computedStyle === val);
//   });
//
//   var support = {
//       animations : Modernizr.cssanimations,
//       preserve3d : Modernizr.csstransformspreserve3d,
//       transforms3d : Modernizr.csstransforms3d
//     },
//     isSupported = support.animations && support.preserve3d && support.transforms3d,
//     animEndEventNames = {
//       'WebkitAnimation' : 'webkitAnimationEnd',
//       'OAnimation' : 'oAnimationEnd',
//       'msAnimation' : 'MSAnimationEnd',
//       'animation' : 'animationend'
//     },
//   // animation end event name
//     animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
//
//   function extend( a, b ) {
//     for( var key in b ) {
//       if( b.hasOwnProperty( key ) ) {
//         a[key] = b[key];
//       }
//     }
//     return a;
//   }
//
//   function TiltSlider( el, options ) {
//     this.el = el;
//     // available effects for the animations (animation class names) - when a item comes in / out
//     this.animEffectsOut = ['moveUpOut','moveDownOut','slideUpOut','slideDownOut','slideLeftOut','slideRightOut'];
//     this.animEffectsIn = ['moveUpIn','moveDownIn','slideUpIn','slideDownIn','slideLeftIn','slideRightIn'];
//     // the items
//     this.items = this.el.querySelector( 'ol.slides' ).children;
//     // total items
//     this.itemsCount = this.items.length;
//     if( !this.itemsCount ) return;
//     // index of the current item
//     this.current = 0;
//     this.options = extend( {}, this.options );
//     extend( this.options, options );
//     this._init();
//   }
//
//   TiltSlider.prototype.options = {};
//
//   TiltSlider.prototype._init = function() {
//     this._addNavigation();
//     this._initEvents();
//   }
//
//   // add the navigation to the DOM
//   TiltSlider.prototype._addNavigation = function() {
//     // add nav "dots"
//     this.nav = document.createElement( 'nav' )
//     var inner = '';
//     for( var i = 0; i < this.itemsCount; ++i ) {
//       inner += i === 0 ? '<span class="current"></span>' : '<span></span>';
//     }
//     this.nav.innerHTML = inner;
//     this.el.appendChild( this.nav );
//     this.navDots = [].slice.call( this.nav.children );
//   }
//
//   TiltSlider.prototype._initEvents = function() {
//     var self = this;
//     // show a new item when clicking the navigation "dots"
//     this.navDots.forEach( function( dot, idx ) {
//       dot.addEventListener( 'click', function() {
//         if( idx !== self.current ) {
//           self._showItem( idx );
//         }
//       } );
//     } );
//   }
//
//   TiltSlider.prototype._showItem = function( pos ) {
//     if( this.isAnimating ) {
//       return false;
//     }
//     this.isAnimating = true;
//
//     classie.removeClass( this.navDots[ this.current ], 'current' );
//
//     var self = this,
//     // the current item
//       currentItem = this.items[ this.current ];
//
//     this.current = pos;
//
//     // next item to come in
//     var nextItem = this.items[ this.current ],
//     // set random effects for the items
//       outEffect = this.animEffectsOut[ Math.floor( Math.random() * this.animEffectsOut.length ) ],
//       inEffect = this.animEffectsIn[ Math.floor( Math.random() * this.animEffectsOut.length ) ];
//
//     currentItem.setAttribute( 'data-effect-out', outEffect );
//     nextItem.setAttribute( 'data-effect-in', inEffect );
//
//     classie.addClass( this.navDots[ this.current ], 'current' );
//
//     var cntAnims = 0,
//     // the number of elements that actually animate inside the current item
//       animElemsCurrentCount = currentItem.querySelector( '.tiltview' ).children.length,
//     // the number of elements that actually animate inside the next item
//       animElemsNextCount = nextItem.querySelector( '.tiltview' ).children.length,
//     // keep track of the number of animations that are terminated
//       animEndCurrentCnt = 0, animEndNextCnt = 0,
//     // check function for the end of each animation
//       isFinished = function() {
//         ++cntAnims;
//         if( cntAnims === 2 ) {
//           self.isAnimating = false;
//         }
//       },
//     // function for the end of the current item animation
//       onEndAnimationCurrentItem = function() {
//         ++animEndCurrentCnt;
//         var endFn = function() {
//           classie.removeClass( currentItem, 'hide' );
//           classie.removeClass( currentItem, 'current' );
//           isFinished();
//         };
//
//         if( !isSupported ) {
//           endFn();
//         }
//         else if( animEndCurrentCnt === animElemsCurrentCount ) {
//           currentItem.removeEventListener( animEndEventName, onEndAnimationCurrentItem );
//           endFn();
//         }
//       },
//     // function for the end of the next item animation
//       onEndAnimationNextItem = function() {
//         ++animEndNextCnt;
//         var endFn = function() {
//           classie.removeClass( nextItem, 'show' );
//           classie.addClass( nextItem, 'current' );
//           isFinished();
//         };
//
//         if( !isSupported ) {
//           endFn();
//         }
//         else if( animEndNextCnt === animElemsNextCount ) {
//           nextItem.removeEventListener( animEndEventName, onEndAnimationNextItem );
//           endFn();
//         }
//       };
//
//     classie.addClass( currentItem, 'hide' );
//     classie.addClass( nextItem, 'show' );
//
//     if( isSupported ) {
//       currentItem.addEventListener( animEndEventName, onEndAnimationCurrentItem );
//       nextItem.addEventListener( animEndEventName, onEndAnimationNextItem );
//     }
//     else {
//       onEndAnimationCurrentItem();
//       onEndAnimationNextItem();
//     }
//   }
//
//   // add to global namespace
//   window.TiltSlider = TiltSlider;
//
// })( window );

class Slideshow extends Component {
  render(){
    return <div className="slideshow" id="slideshow">
      <ol className="slides">
        <li className="current">
          <div className="description">
            <h2>Tilted Content Slideshow</h2>
            <p>This slider, as seen on the landing page of the <a href="http://www.thefwa.com/">FWA</a>, plays with 3D perspective and performs some interesting animations on the right-hand side images.</p>
          </div>
          <div className="tiltview col">
            <a href="http://grovemade.com/"><img src="img/1_screen.jpg"/></a>
            <a href="https://tsovet.com/"><img src="img/2_screen.jpg"/></a>
          </div>
        </li>
        <li>
          <div className="description">
            <h2>CSS Animations</h2>
            <p>We are using 12 different animations for showing and hiding the items of a slide. The animations are defined by randomly adding data-attributes called <code>data-effect-in</code> and <code>data-effect-out</code> for every slide. </p>
          </div>
          <div className="tiltview row">
            <a href="http://pexcil.com/"><img src="img/3_mobile.jpg"/></a>
            <a href="http://foodsense.is/"><img src="img/4_mobile.jpg"/></a>
          </div>
        </li>
        <li>
          <div className="description">
            <h2>Tilted Items</h2>
            <p>The perspective view is achieved by adding a perspective value to the slide list item and tilting a division that contains the two screenshots.</p>
          </div>
          <div className="tiltview col">
            <a href="http://minimalmonkey.com/"><img src="img/5_screen.jpg"/></a>
            <a href="http://www.herschelsupply.com/"><img src="img/6_screen.jpg"/></a>
          </div>
        </li>
        <li>
          <div className="description">
            <h2>Column or Row</h2>
            <p>The items in the tilted container are either laid out in a column or in a row. For some directions we need to adjust the animation delays for the items, since we don't want the items to overlap each other when they move in or out.</p>
          </div>
          <div className="tiltview row">
            <a href="http://grovemade.com/"><img src="img/1_mobile.jpg"/></a>
            <a href="https://tsovet.com/"><img src="img/2_mobile.jpg"/></a>
          </div>
        </li>
        <li>
          <div className="description">
            <h2>Responsiveness</h2>
            <p>For smaller screens, the items on the right hand side will become less opaque and serve as decoration only. The focus will be on the description which will occupy all the width.</p>
          </div>
          <div className="tiltview col">
            <a href="http://pexcil.com/"><img src="img/3_screen.jpg"/></a>
            <a href="http://foodsense.is/"><img src="img/4_screen.jpg"/></a>
          </div>
        </li>
        <li>
          <div className="description">
            <h2>Navigation</h2>
            <p>For the "line" navigation we use a little trick to make the clickable area a bit bigger: we add a thick white border to the top and bottom of the span. Since the border is part of the element, it will be part of the clickable zone.</p>
          </div>
          <div className="tiltview row">
            <a href="http://minimalmonkey.com/"><img src="img/5_mobile.jpg"/></a>
            <a href="http://www.herschelsupply.com/"><img src="img/6_mobile.jpg"/></a>
          </div>
        </li>
      </ol>
    </div>
  }
}
export default Slideshow;
