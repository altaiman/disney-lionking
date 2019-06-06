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
      cellAlign: 'center',
      prevNextButtons: false,
      groupCells: $(window).width() <= 1000 ? $(window).width() <= 768 ? 1 : 2 : 4,
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJyb290Iiwic3ZnNGV2ZXJ5Ym9keSIsInNjcm9sbFRvIiwic2xpZGVyT3B0aW9ucyIsImNlbGxBbGlnbiIsInByZXZOZXh0QnV0dG9ucyIsImdyb3VwQ2VsbHMiLCJ3cmFwQXJvdW5kIiwiY29udGFpbiIsIiQiLCJ3aW5kb3ciLCJ3aWR0aCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzbGlkZXIiLCJpIiwic2xpZGVzIiwicXVlcnlTZWxlY3RvciIsInNsaWRlc0NvdW50IiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJzbGlkZXJEYXRhIiwiZGF0YXNldCIsIm9wdGlvbnMiLCJzbGlkZXJXaWR0aCIsIm9mZnNldFdpZHRoIiwic2xpZGVXaWR0aCIsInNsaWRlc0NhcGFjaXR5IiwiTWF0aCIsInJvdW5kIiwiY29udHJvbHMiLCJjb250cm9sc0VuZEluZGV4IiwiYWRhcHRpdmUiLCJOdW1iZXIiLCJzbGlkZXJBZGFwdGl2ZSIsIndpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsImNvbnRyb2xzUHJldiIsImNvbnRyb2xzTmV4dCIsImNsYXNzTGlzdCIsImFkZCIsImZsa3R5IiwiRmxpY2tpdHkiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJldmlvdXMiLCJuZXh0Iiwic2VsZWN0ZWRJbmRleCIsImRpc2FibGVkIiwib24iLCJzbGlkZVRvZ2dsZSIsInBhcmVudCIsInRvZ2dsZUNsYXNzIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsVUFBU0EsSUFBVCxFQUFlOztBQUVkO0FBQ0FDO0FBQ0FDOztBQUVBLE1BQU1DLGdCQUFnQjtBQUNwQixjQUFVO0FBQ1JDLGlCQUFXLFFBREg7QUFFUkMsdUJBQWlCLEtBRlQ7QUFHUkMsa0JBQVksQ0FISjtBQUlSQyxrQkFBWSxJQUpKO0FBS1JDLGVBQVM7QUFMRCxLQURVO0FBUXBCLGtCQUFjO0FBQ1pKLGlCQUFXLFFBREM7QUFFWkMsdUJBQWlCLEtBRkw7QUFHWkMsa0JBQWFHLEVBQUVDLE1BQUYsRUFBVUMsS0FBVixNQUFxQixJQUF0QixHQUFnQ0YsRUFBRUMsTUFBRixFQUFVQyxLQUFWLE1BQXFCLEdBQXRCLEdBQTZCLENBQTdCLEdBQWlDLENBQWhFLEdBQXFFLENBSHJFO0FBSVpKLGtCQUFZLElBSkE7QUFLWkMsZUFBUztBQUxHO0FBUk0sR0FBdEI7O0FBaUJBSSxXQUFTQyxnQkFBVCxDQUEwQixlQUExQixFQUEyQ0MsT0FBM0MsQ0FBbUQsVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDaEUsUUFBTUMsU0FBU0YsT0FBT0csYUFBUCxDQUFxQixzQkFBckIsQ0FBZjtBQUFBLFFBQ01DLGNBQWNGLE9BQU9HLFFBQVAsQ0FBZ0JDLE1BRHBDO0FBQUEsUUFFTUMsYUFBYVAsT0FBT1EsT0FBUCxDQUFlUixNQUZsQztBQUFBLFFBR01TLFVBQVVyQixjQUFjbUIsVUFBZCxDQUhoQjtBQUFBLFFBSU1HLGNBQWNWLE9BQU9XLFdBSjNCO0FBQUEsUUFLTUMsYUFBYVYsT0FBT0csUUFBUCxDQUFnQixDQUFoQixFQUFtQk0sV0FMdEM7QUFBQSxRQU1NRSxpQkFBaUJDLEtBQUtDLEtBQUwsQ0FBV0wsY0FBWUUsVUFBdkIsQ0FOdkI7QUFBQSxRQU9NSSxXQUFXaEIsT0FBT0csYUFBUCxDQUFxQix3QkFBckIsQ0FQakI7QUFBQSxRQVFNYyxtQkFBbUJiLGNBQWNTLGNBUnZDO0FBQUEsUUFTTUssV0FBV0MsT0FBT25CLE9BQU9RLE9BQVAsQ0FBZVksY0FBdEIsQ0FUakI7QUFBQSxRQVVNQyxjQUFjMUIsT0FBTzJCLFVBVjNCOztBQVlBLFFBQUlDLHFCQUFKO0FBQUEsUUFBa0JDLHFCQUFsQjs7QUFFQSxRQUFJUixRQUFKLEVBQWM7QUFDWk8scUJBQWVQLFNBQVNiLGFBQVQsQ0FBdUIsNkJBQXZCLENBQWYsRUFDQXFCLGVBQWVSLFNBQVNiLGFBQVQsQ0FBdUIsNkJBQXZCLENBRGY7QUFFRDs7QUFFRCxRQUFJQyxjQUFjUyxjQUFsQixFQUFrQztBQUNoQ2IsYUFBT3lCLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLGdCQUFyQjtBQUNBLFVBQU1DLFFBQVEsSUFBSUMsUUFBSixDQUFhMUIsTUFBYixFQUFxQmQsY0FBY1ksT0FBT1EsT0FBUCxDQUFlUixNQUE3QixDQUFyQixDQUFkOztBQUVBLFVBQUlnQixRQUFKLEVBQWM7QUFDWk8scUJBQ0dNLGdCQURILENBQ29CLE9BRHBCLEVBQzZCLFVBQUNDLENBQUQsRUFBTztBQUNoQ0EsWUFBRUMsY0FBRjtBQUNBSixnQkFBTUssUUFBTjtBQUNELFNBSkg7O0FBTUFSLHFCQUNHSyxnQkFESCxDQUNvQixPQURwQixFQUM2QixVQUFDQyxDQUFELEVBQU87QUFDaENBLFlBQUVDLGNBQUY7QUFDQUosZ0JBQU1NLElBQU47QUFDRCxTQUpIOztBQU1BLFlBQUksQ0FBQ3hCLFFBQVFqQixVQUFiLEVBQXlCO0FBQ3ZCLGNBQUltQyxNQUFNTyxhQUFOLEtBQXdCLENBQTVCLEVBQStCO0FBQzdCWCx5QkFBYVksUUFBYixHQUF3QixJQUF4QjtBQUNELFdBRkQsTUFFTyxJQUFJUixNQUFNTyxhQUFOLEtBQXdCakIsZ0JBQTVCLEVBQThDO0FBQ25ETyx5QkFBYVcsUUFBYixHQUF3QixJQUF4QjtBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0YsR0E5Q0Q7O0FBZ0RBekMsSUFBRSxtQkFBRixFQUF1QjBDLEVBQXZCLENBQTBCLE9BQTFCLEVBQW1DLFVBQVNOLENBQVQsRUFBWTtBQUM3Q0EsTUFBRUMsY0FBRjs7QUFFQXJDLE1BQUUsSUFBRixFQUFRdUMsSUFBUixHQUFlSSxXQUFmO0FBQ0EzQyxNQUFFLElBQUYsRUFBUTRDLE1BQVIsR0FBaUJDLFdBQWpCLENBQTZCLE1BQTdCO0FBQ0QsR0FMRDtBQU9ELENBOUVELEVBOEVHNUMsTUE5RUgiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKHJvb3QpIHtcblxuICAvLyBzdmcgZm9yIGFsbFxuICBzdmc0ZXZlcnlib2R5KClcbiAgc2Nyb2xsVG8oKVxuXG4gIGNvbnN0IHNsaWRlck9wdGlvbnMgPSB7XG4gICAgJ3ByaXplcyc6IHtcbiAgICAgIGNlbGxBbGlnbjogJ2NlbnRlcicsXG4gICAgICBwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuICAgICAgZ3JvdXBDZWxsczogMixcbiAgICAgIHdyYXBBcm91bmQ6IHRydWUsXG4gICAgICBjb250YWluOiB0cnVlXG4gICAgfSxcbiAgICAncHJvZHVjdGlvbic6IHtcbiAgICAgIGNlbGxBbGlnbjogJ2NlbnRlcicsXG4gICAgICBwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuICAgICAgZ3JvdXBDZWxsczogKCQod2luZG93KS53aWR0aCgpIDw9IDEwMDApID8gKCgkKHdpbmRvdykud2lkdGgoKSA8PSA3NjgpID8gMSA6IDIpIDogNCxcbiAgICAgIHdyYXBBcm91bmQ6IHRydWUsXG4gICAgICBjb250YWluOiB0cnVlXG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2xpZGVyXScpLmZvckVhY2goKHNsaWRlciwgaSkgPT4ge1xuICAgIGNvbnN0IHNsaWRlcyA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zbGlkZXItc2xpZGVzXScpLFxuICAgICAgICAgIHNsaWRlc0NvdW50ID0gc2xpZGVzLmNoaWxkcmVuLmxlbmd0aCxcbiAgICAgICAgICBzbGlkZXJEYXRhID0gc2xpZGVyLmRhdGFzZXQuc2xpZGVyLFxuICAgICAgICAgIG9wdGlvbnMgPSBzbGlkZXJPcHRpb25zW3NsaWRlckRhdGFdLFxuICAgICAgICAgIHNsaWRlcldpZHRoID0gc2xpZGVyLm9mZnNldFdpZHRoLFxuICAgICAgICAgIHNsaWRlV2lkdGggPSBzbGlkZXMuY2hpbGRyZW5bMF0ub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgc2xpZGVzQ2FwYWNpdHkgPSBNYXRoLnJvdW5kKHNsaWRlcldpZHRoL3NsaWRlV2lkdGgpLFxuICAgICAgICAgIGNvbnRyb2xzID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNsaWRlci1jb250cm9sc10nKSxcbiAgICAgICAgICBjb250cm9sc0VuZEluZGV4ID0gc2xpZGVzQ291bnQgLSBzbGlkZXNDYXBhY2l0eSxcbiAgICAgICAgICBhZGFwdGl2ZSA9IE51bWJlcihzbGlkZXIuZGF0YXNldC5zbGlkZXJBZGFwdGl2ZSksXG4gICAgICAgICAgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgbGV0IGNvbnRyb2xzUHJldiwgY29udHJvbHNOZXh0XG5cbiAgICBpZiAoY29udHJvbHMpIHtcbiAgICAgIGNvbnRyb2xzUHJldiA9IGNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNsaWRlci1jb250cm9scy1wcmV2XScpLFxuICAgICAgY29udHJvbHNOZXh0ID0gY29udHJvbHMucXVlcnlTZWxlY3RvcignW2RhdGEtc2xpZGVyLWNvbnRyb2xzLW5leHRdJylcbiAgICB9XG5cbiAgICBpZiAoc2xpZGVzQ291bnQgPiBzbGlkZXNDYXBhY2l0eSkge1xuICAgICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcl9pbml0aWFsJylcbiAgICAgIGNvbnN0IGZsa3R5ID0gbmV3IEZsaWNraXR5KHNsaWRlcywgc2xpZGVyT3B0aW9uc1tzbGlkZXIuZGF0YXNldC5zbGlkZXJdKTtcblxuICAgICAgaWYgKGNvbnRyb2xzKSB7XG4gICAgICAgIGNvbnRyb2xzUHJldlxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGZsa3R5LnByZXZpb3VzKClcbiAgICAgICAgICB9KVxuXG4gICAgICAgIGNvbnRyb2xzTmV4dFxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGZsa3R5Lm5leHQoKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCFvcHRpb25zLndyYXBBcm91bmQpIHtcbiAgICAgICAgICBpZiAoZmxrdHkuc2VsZWN0ZWRJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgY29udHJvbHNQcmV2LmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICAgIH0gZWxzZSBpZiAoZmxrdHkuc2VsZWN0ZWRJbmRleCA9PT0gY29udHJvbHNFbmRJbmRleCkge1xuICAgICAgICAgICAgY29udHJvbHNOZXh0LmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICAkKCcucXVlc3Rpb25fX2hlYWRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAkKHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xuICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgfSlcblxufSkod2luZG93KTtcbiJdfQ==
