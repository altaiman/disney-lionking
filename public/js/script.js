'use strict';

(function (root) {

  // svg for all
  svg4everybody();
  scrollTo();

  var sliderOptions = {
    'prizes': {
      cellAlign: 'center',
      prevNextButtons: false,
      groupCells: 2,
      wrapAround: true,
      contain: true
    },
    'production': {
      cellAlign: 'left',
      prevNextButtons: false,
      groupCells: 4,
      wrapAround: true,
      contain: true
    }
  };

  document.querySelectorAll('[data-slider]').forEach(function (slider, i) {
    var slides = slider.querySelector('[data-slider-slides]'),
        slidesCount = slides.children.length,
        sliderData = slider.dataset.slider,
        options = sliderOptions[sliderData],
        sliderWidth = slider.offsetWidth,
        slideWidth = slides.children[0].offsetWidth,
        slidesCapacity = Math.round(sliderWidth / slideWidth),
        controls = slider.querySelector('[data-slider-controls]'),
        controlsEndIndex = slidesCount - slidesCapacity,
        adaptive = Number(slider.dataset.sliderAdaptive),
        windowWidth = window.innerWidth;

    var controlsPrev = void 0,
        controlsNext = void 0;

    if (controls) {
      controlsPrev = controls.querySelector('[data-slider-controls-prev]'), controlsNext = controls.querySelector('[data-slider-controls-next]');
    }

    if (slidesCount > slidesCapacity) {
      slider.classList.add('slider_initial');
      var flkty = new Flickity(slides, sliderOptions[slider.dataset.slider]);

      if (controls) {
        controlsPrev.addEventListener('click', function (e) {
          e.preventDefault();
          flkty.previous();
        });

        controlsNext.addEventListener('click', function (e) {
          e.preventDefault();
          flkty.next();
        });

        if (!options.wrapAround) {
          if (flkty.selectedIndex === 0) {
            controlsPrev.disabled = true;
          } else if (flkty.selectedIndex === controlsEndIndex) {
            controlsNext.disabled = true;
          }
        }
      }
    }
  });

  $('.question__header').on('click', function (e) {
    e.preventDefault();

    $(this).next().slideToggle();
    $(this).parent().toggleClass('open');
  });
})(window);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJyb290Iiwic3ZnNGV2ZXJ5Ym9keSIsInNjcm9sbFRvIiwic2xpZGVyT3B0aW9ucyIsImNlbGxBbGlnbiIsInByZXZOZXh0QnV0dG9ucyIsImdyb3VwQ2VsbHMiLCJ3cmFwQXJvdW5kIiwiY29udGFpbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzbGlkZXIiLCJpIiwic2xpZGVzIiwicXVlcnlTZWxlY3RvciIsInNsaWRlc0NvdW50IiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJzbGlkZXJEYXRhIiwiZGF0YXNldCIsIm9wdGlvbnMiLCJzbGlkZXJXaWR0aCIsIm9mZnNldFdpZHRoIiwic2xpZGVXaWR0aCIsInNsaWRlc0NhcGFjaXR5IiwiTWF0aCIsInJvdW5kIiwiY29udHJvbHMiLCJjb250cm9sc0VuZEluZGV4IiwiYWRhcHRpdmUiLCJOdW1iZXIiLCJzbGlkZXJBZGFwdGl2ZSIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNvbnRyb2xzUHJldiIsImNvbnRyb2xzTmV4dCIsImNsYXNzTGlzdCIsImFkZCIsImZsa3R5IiwiRmxpY2tpdHkiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJldmlvdXMiLCJuZXh0Iiwic2VsZWN0ZWRJbmRleCIsImRpc2FibGVkIiwiJCIsIm9uIiwic2xpZGVUb2dnbGUiLCJwYXJlbnQiLCJ0b2dnbGVDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFVBQVNBLElBQVQsRUFBZTs7QUFFZDtBQUNBQztBQUNBQzs7QUFFQSxNQUFNQyxnQkFBZ0I7QUFDcEIsY0FBVTtBQUNSQyxpQkFBVyxRQURIO0FBRVJDLHVCQUFpQixLQUZUO0FBR1JDLGtCQUFZLENBSEo7QUFJUkMsa0JBQVksSUFKSjtBQUtSQyxlQUFTO0FBTEQsS0FEVTtBQVFwQixrQkFBYztBQUNaSixpQkFBVyxNQURDO0FBRVpDLHVCQUFpQixLQUZMO0FBR1pDLGtCQUFZLENBSEE7QUFJWkMsa0JBQVksSUFKQTtBQUtaQyxlQUFTO0FBTEc7QUFSTSxHQUF0Qjs7QUFpQkFDLFdBQVNDLGdCQUFULENBQTBCLGVBQTFCLEVBQTJDQyxPQUEzQyxDQUFtRCxVQUFDQyxNQUFELEVBQVNDLENBQVQsRUFBZTtBQUNoRSxRQUFNQyxTQUFTRixPQUFPRyxhQUFQLENBQXFCLHNCQUFyQixDQUFmO0FBQUEsUUFDTUMsY0FBY0YsT0FBT0csUUFBUCxDQUFnQkMsTUFEcEM7QUFBQSxRQUVNQyxhQUFhUCxPQUFPUSxPQUFQLENBQWVSLE1BRmxDO0FBQUEsUUFHTVMsVUFBVWxCLGNBQWNnQixVQUFkLENBSGhCO0FBQUEsUUFJTUcsY0FBY1YsT0FBT1csV0FKM0I7QUFBQSxRQUtNQyxhQUFhVixPQUFPRyxRQUFQLENBQWdCLENBQWhCLEVBQW1CTSxXQUx0QztBQUFBLFFBTU1FLGlCQUFpQkMsS0FBS0MsS0FBTCxDQUFXTCxjQUFZRSxVQUF2QixDQU52QjtBQUFBLFFBT01JLFdBQVdoQixPQUFPRyxhQUFQLENBQXFCLHdCQUFyQixDQVBqQjtBQUFBLFFBUU1jLG1CQUFtQmIsY0FBY1MsY0FSdkM7QUFBQSxRQVNNSyxXQUFXQyxPQUFPbkIsT0FBT1EsT0FBUCxDQUFlWSxjQUF0QixDQVRqQjtBQUFBLFFBVU1DLGNBQWNDLE9BQU9DLFVBVjNCOztBQVlBLFFBQUlDLHFCQUFKO0FBQUEsUUFBa0JDLHFCQUFsQjs7QUFFQSxRQUFJVCxRQUFKLEVBQWM7QUFDWlEscUJBQWVSLFNBQVNiLGFBQVQsQ0FBdUIsNkJBQXZCLENBQWYsRUFDQXNCLGVBQWVULFNBQVNiLGFBQVQsQ0FBdUIsNkJBQXZCLENBRGY7QUFFRDs7QUFFRCxRQUFJQyxjQUFjUyxjQUFsQixFQUFrQztBQUNoQ2IsYUFBTzBCLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLGdCQUFyQjtBQUNBLFVBQU1DLFFBQVEsSUFBSUMsUUFBSixDQUFhM0IsTUFBYixFQUFxQlgsY0FBY1MsT0FBT1EsT0FBUCxDQUFlUixNQUE3QixDQUFyQixDQUFkOztBQUVBLFVBQUlnQixRQUFKLEVBQWM7QUFDWlEscUJBQ0dNLGdCQURILENBQ29CLE9BRHBCLEVBQzZCLFVBQUNDLENBQUQsRUFBTztBQUNoQ0EsWUFBRUMsY0FBRjtBQUNBSixnQkFBTUssUUFBTjtBQUNELFNBSkg7O0FBTUFSLHFCQUNHSyxnQkFESCxDQUNvQixPQURwQixFQUM2QixVQUFDQyxDQUFELEVBQU87QUFDaENBLFlBQUVDLGNBQUY7QUFDQUosZ0JBQU1NLElBQU47QUFDRCxTQUpIOztBQU1BLFlBQUksQ0FBQ3pCLFFBQVFkLFVBQWIsRUFBeUI7QUFDdkIsY0FBSWlDLE1BQU1PLGFBQU4sS0FBd0IsQ0FBNUIsRUFBK0I7QUFDN0JYLHlCQUFhWSxRQUFiLEdBQXdCLElBQXhCO0FBQ0QsV0FGRCxNQUVPLElBQUlSLE1BQU1PLGFBQU4sS0FBd0JsQixnQkFBNUIsRUFBOEM7QUFDbkRRLHlCQUFhVyxRQUFiLEdBQXdCLElBQXhCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7QUFDRixHQTlDRDs7QUFnREFDLElBQUUsbUJBQUYsRUFBdUJDLEVBQXZCLENBQTBCLE9BQTFCLEVBQW1DLFVBQVNQLENBQVQsRUFBWTtBQUM3Q0EsTUFBRUMsY0FBRjs7QUFFQUssTUFBRSxJQUFGLEVBQVFILElBQVIsR0FBZUssV0FBZjtBQUNBRixNQUFFLElBQUYsRUFBUUcsTUFBUixHQUFpQkMsV0FBakIsQ0FBNkIsTUFBN0I7QUFDRCxHQUxEO0FBT0QsQ0E5RUQsRUE4RUduQixNQTlFSCIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24ocm9vdCkge1xuXG4gIC8vIHN2ZyBmb3IgYWxsXG4gIHN2ZzRldmVyeWJvZHkoKVxuICBzY3JvbGxUbygpXG5cbiAgY29uc3Qgc2xpZGVyT3B0aW9ucyA9IHtcbiAgICAncHJpemVzJzoge1xuICAgICAgY2VsbEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG4gICAgICBncm91cENlbGxzOiAyLFxuICAgICAgd3JhcEFyb3VuZDogdHJ1ZSxcbiAgICAgIGNvbnRhaW46IHRydWVcbiAgICB9LFxuICAgICdwcm9kdWN0aW9uJzoge1xuICAgICAgY2VsbEFsaWduOiAnbGVmdCcsXG4gICAgICBwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuICAgICAgZ3JvdXBDZWxsczogNCxcbiAgICAgIHdyYXBBcm91bmQ6IHRydWUsXG4gICAgICBjb250YWluOiB0cnVlXG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2xpZGVyXScpLmZvckVhY2goKHNsaWRlciwgaSkgPT4ge1xuICAgIGNvbnN0IHNsaWRlcyA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zbGlkZXItc2xpZGVzXScpLFxuICAgICAgICAgIHNsaWRlc0NvdW50ID0gc2xpZGVzLmNoaWxkcmVuLmxlbmd0aCxcbiAgICAgICAgICBzbGlkZXJEYXRhID0gc2xpZGVyLmRhdGFzZXQuc2xpZGVyLFxuICAgICAgICAgIG9wdGlvbnMgPSBzbGlkZXJPcHRpb25zW3NsaWRlckRhdGFdLFxuICAgICAgICAgIHNsaWRlcldpZHRoID0gc2xpZGVyLm9mZnNldFdpZHRoLFxuICAgICAgICAgIHNsaWRlV2lkdGggPSBzbGlkZXMuY2hpbGRyZW5bMF0ub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgc2xpZGVzQ2FwYWNpdHkgPSBNYXRoLnJvdW5kKHNsaWRlcldpZHRoL3NsaWRlV2lkdGgpLFxuICAgICAgICAgIGNvbnRyb2xzID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNsaWRlci1jb250cm9sc10nKSxcbiAgICAgICAgICBjb250cm9sc0VuZEluZGV4ID0gc2xpZGVzQ291bnQgLSBzbGlkZXNDYXBhY2l0eSxcbiAgICAgICAgICBhZGFwdGl2ZSA9IE51bWJlcihzbGlkZXIuZGF0YXNldC5zbGlkZXJBZGFwdGl2ZSksXG4gICAgICAgICAgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgbGV0IGNvbnRyb2xzUHJldiwgY29udHJvbHNOZXh0XG5cbiAgICBpZiAoY29udHJvbHMpIHtcbiAgICAgIGNvbnRyb2xzUHJldiA9IGNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNsaWRlci1jb250cm9scy1wcmV2XScpLFxuICAgICAgY29udHJvbHNOZXh0ID0gY29udHJvbHMucXVlcnlTZWxlY3RvcignW2RhdGEtc2xpZGVyLWNvbnRyb2xzLW5leHRdJylcbiAgICB9XG5cbiAgICBpZiAoc2xpZGVzQ291bnQgPiBzbGlkZXNDYXBhY2l0eSkge1xuICAgICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcl9pbml0aWFsJylcbiAgICAgIGNvbnN0IGZsa3R5ID0gbmV3IEZsaWNraXR5KHNsaWRlcywgc2xpZGVyT3B0aW9uc1tzbGlkZXIuZGF0YXNldC5zbGlkZXJdKTtcblxuICAgICAgaWYgKGNvbnRyb2xzKSB7XG4gICAgICAgIGNvbnRyb2xzUHJldlxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGZsa3R5LnByZXZpb3VzKClcbiAgICAgICAgICB9KVxuXG4gICAgICAgIGNvbnRyb2xzTmV4dFxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGZsa3R5Lm5leHQoKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCFvcHRpb25zLndyYXBBcm91bmQpIHtcbiAgICAgICAgICBpZiAoZmxrdHkuc2VsZWN0ZWRJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgY29udHJvbHNQcmV2LmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICAgIH0gZWxzZSBpZiAoZmxrdHkuc2VsZWN0ZWRJbmRleCA9PT0gY29udHJvbHNFbmRJbmRleCkge1xuICAgICAgICAgICAgY29udHJvbHNOZXh0LmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICAkKCcucXVlc3Rpb25fX2hlYWRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAkKHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xuICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgfSlcblxufSkod2luZG93KTtcbiJdfQ==
