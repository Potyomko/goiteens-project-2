const images = [
    {
      url: "https://cdn.motor1.com/images/mgl/RzE0m/s1/2020-honda-civic-hatchback-facelift.jpg",
      description: 'Honda Civic',
    },
    {
      url: "https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2021/11/16/07/5029149/d3bfd675b3dbe31ecd845472ccf0a733569445ff.jpg",
      description: 'Honda Civic',
    },
    {
      url: "https://focus.ua/static/storage/thumbs/920x465/0/d3/d9a48f20-530bad3574a9306ac46354a43014bd30.jpg?v=5329_1",
      description: 'Honda Civic',
    }
  ];

  const btnRight = document.querySelector(".next-photo");
    const btnLeft = document.querySelector(".last-photo");
    const section = document.querySelector('.hero-section')

    const imageEl = document.createElement('img');
    imageEl.classList.add('image');
    imageEl.src = images[0].url;

    section.prepend(imageEl);
    // 

    btnRight.addEventListener('click', nextClick);

    function nextClick(e) {
     
      for (let i = 0; i < images.length; i += 1) {
        console.log(i);
        const elem = images[i];
        console.log(elem.url === imageEl.src);
        if (elem.url === imageEl.src) {
          if (i === images.length - 1) {
            return;
          } 
          console.log(imageEl.src = images[i + 1].url);
          return imageEl.src = images[i + 1].url;
        }
      }
    };
    // 

    btnLeft.addEventListener('click', lastClick);

    function lastClick(e) {
      for (let i = 0; i < images.length; i+=1) {
        const elem = images[i];
        if (elem.url === imageEl.src) {
          if (i === 0) {
            return;
          }
          return imageEl.src = images[i - 1].url;
        }
      }
    };