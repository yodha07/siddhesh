

      const backToTopButton = document.querySelector('.back-to-top');

      backToTopButton.addEventListener('click', () => {
          window.scrollTo({
              top: 0,
              behavior: 'smooth' // Smooth scrolling behavior
          });

          backToTopButton.classList.add('clicked');

          setTimeout(() => {
            backToTopButton.classList.remove('clicked');
          }, 200);
        });
    

      wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();

                    // Check if the page has already been reloaded
if (!localStorage.getItem('reloaded')) {
        // Set a timeout to reload the page after 5 seconds (5000 milliseconds)
        setTimeout(function() {
            // Reload the page
            window.location.reload();
            // Set the flag in localStorage to indicate the page has been reloaded
            localStorage.setItem('reloaded', 'true');
        }, 1000);
    }

    