(function(root) {

  // svg for all
  svg4everybody()
  scrollTo()

  function scrollTo() {
  	const links = document.querySelectorAll('a[href*="#"]')
  	links.forEach(each => (each.onclick = scrollAnchors))
  }

  function scrollAnchors(e, respond = null) {
  	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top)

  	e.preventDefault()

  	let targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href')

  	const targetAnchor = document.querySelector(targetID)

    if (!targetAnchor) return

  	const originalTop = distanceToTop(targetAnchor)

  	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' })

  	const checkIfDone = setInterval(function() {
  		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2
  		if (distanceToTop(targetAnchor) === 0 || atBottom) {
  			targetAnchor.tabIndex = '-1'
  			targetAnchor.focus()
  			window.history.pushState('', '', targetID)
  			clearInterval(checkIfDone)
  		}
  	}, 100)

    document.querySelector('.menu').classList.remove('menu_open')
  }

  const sliderOptions = {
    'prizes': {
      cellAlign: 'center',
      prevNextButtons: false,
      groupCells: ($(window).width() <= 768) ? 1 : 2,
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

  $('.navigator__menu').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggle();
  })

  $('.menu__close').on('click', function(e) {
    $('.menu').hide();
  })

  $('.menu__link').on('click', function() {
    $('.menu__close').click()
  })

  // modals

  $('[data-modal]').iziModal()

  $('[data-modal-open]').on('click', function(e) {
    e.preventDefault()


    const data = $(this).data('modal-open')
    $(`[data-modal="${data}"]`).iziModal('open')
  })

})(window);
