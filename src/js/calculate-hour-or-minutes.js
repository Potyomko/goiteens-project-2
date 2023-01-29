    const input = document.querySelector('.js-calculate');
            console.log(input);
            input.addEventListener('input', calculate);

                function calculate (event) {
                    const numbers = Number(event.target.value);
                    const calculation = numbers / 60;
                    // return calculation
                    console.log(calculation);
            }