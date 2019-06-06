(function(root) {

  // svg for all
  svg4everybody()
  scrollTo()

  const sliderOptions = {
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
      groupCells: ($(window).width() <= 1000) ? (($(window).width() <= 768) ? 1 : 2) : 4,
      wrapAround: true,
      contain: true
    }
  }

  document.querySelectorAll('[data-slider]').forEach((slider, i) => {
    const slides = slider.querySelector('[data-slider-slides]'),
          slidesCount = slides.children.length,
          sliderData = slider.dataset.slider,
          options = sliderOptions[sliderData],
          sliderWidth = slider.offsetWidth,
          slideWidth = slides.children[0].offsetWidth,
          slidesCapacity = Math.round(sliderWidth/slideWidth),
          controls = slider.querySelector('[data-slider-controls]'),
          controlsEndIndex = slidesCount - slidesCapacity,
          adaptive = Number(slider.dataset.sliderAdaptive),
          windowWidth = window.innerWidth

    let controlsPrev, controlsNext

    if (controls) {
      controlsPrev = controls.querySelector('[data-slider-controls-prev]'),
      controlsNext = controls.querySelector('[data-slider-controls-next]')
    }

    if (slidesCount > slidesCapacity) {
      slider.classList.add('slider_initial')
      const flkty = new Flickity(slides, sliderOptions[slider.dataset.slider]);

      if (controls) {
        controlsPrev
          .addEventListener('click', (e) => {
            e.preventDefault()
            flkty.previous()
          })

        controlsNext
          .addEventListener('click', (e) => {
            e.preventDefault()
            flkty.next()
          })

        if (!options.wrapAround) {
          if (flkty.selectedIndex === 0) {
            controlsPrev.disabled = true
          } else if (flkty.selectedIndex === controlsEndIndex) {
            controlsNext.disabled = true
          }
        }
      }
    }
  })

  $('.question__header').on('click', function(e) {
    e.preventDefault();

    $(this).next().slideToggle();
    $(this).parent().toggleClass('open');
  })

})(window);
